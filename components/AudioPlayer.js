import React, { useState, useRef, useEffect } from 'react'
import styles from "../styles/AudioPlayer.module.css";
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { motion } from 'framer-motion';

const AudioPlayer = () => {
    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // references
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
        audioPlayer.current.pause();
        cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        if(audioPlayer.current === null) return // fixed break on going to another page
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
        if(currentTime === duration){
            setIsPlaying(!isPlaying)
        }
    }

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 30);
        changeRange();
    }

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value + 30);
        changeRange();
    }

    return (
        <main className='flex flex-col mt-16 pt-4 pb-4 mx-4 dark:text-gray-100'>
            <motion.h3 
                initial={{ y:-30 ,opacity: 0}}
                whileInView={{ y: 0, opacity: 1}}
                transition={{ delay: 0.4 }}
                className='text-md md:text-lg font-semibold text-center pb-2'>Song of the Day - <span className="font-bold text-amber-600">The Other Side</span> by Synik</motion.h3>
            <div className='flex justify-center ml-6 md:ml-48 lg:ml-80'>
                <div className={styles.audioPlayer}>
                    <audio ref={audioPlayer} src="/audio/sotd-synik.mp3" type="audio/mpeg" preload="auto"></audio>
                    {/*<button className={styles.forwardBackward} onClick={backThirty}><BsArrowLeftShort /> 30</button>*/}
                    <button onClick={togglePlayPause} className={styles.playPause}>
                        {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
                    </button>
                    {/*<button className={styles.forwardBackward} onClick={forwardThirty}>30 <BsArrowRightShort /></button>*/}

                    {/* current time */}
                    <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

                    {/* progress bar */}
                    <div>
                        <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
                    </div>

                    {/* duration */}
                    <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
                </div>
            </div>
            
        </main>
        
    )
}

export { AudioPlayer }



