import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import phoneMockup from '../public/AndroidPromo.png'
import googleImg from '../public/googleplay.png'

function AndroidPromo() {
    return (
        <div className='bg-slate-100 dark:bg-zinc-900 w-full'>
            <div className='flex flex-col xl:flex-row lg:items-center lg:flex lg:justify-between mt-[2rem] py-6 md:py-9'>
                <main className='flex flex-col md:flex-row justify-center items-center lg:justify-end  xl:w-1/2 order-2 xl:order-1'>
                    <motion.h3 
                        initial={{x:-30, opacity: 0}}
                        whileInView={{x:0, opacity: 1}}
                        transition={{delay: 0.7}}
                        className='text-black dark:text-white text-md md:text-xl xl:text-2xl justify-center px-3 text-center py-2'>
                        tunesketch is now available on Android devices
                    </motion.h3>
                    <a href='https://play.google.com/store/apps/details?id=com.abu.sammie.tunesketch18&pcampaignid=web_share' target='_blank' rel='noreferrer'>
                        <div 
                            className='flex justify-center items-center'>
                            <Image
                                src={googleImg}
                                height={60}
                                width={189}
                                alt='Get tunesketch on Google Play'
                                priority
                            />
                        </div>
                    </a>
                    
                    
                </main>
                <div 
                    className='xl:w-1/2 flex justify-start order-1 xl:order-2 px-20 md:px-52 lg:px-60 xl:px-72'>
                    <Image
                        src={phoneMockup}
                        height={1710}
                        width={938}
                        alt='Tunesketch Android'
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default AndroidPromo