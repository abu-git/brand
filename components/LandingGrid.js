import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function LandingGrid() {
  return (
    <>
        <div className='mt-8 mb-8 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {/* grid item */}
            <div className='flex flex-col cursor-pointer bg-white rounded overflow-hidden drop-shadow-lg hover:drop-shadow-2xl'>
                <div className='relative'>
                    <Image 
                        width={433}
                        height={433}
                        alt="The Purpose EP"
                        src="/boomsha.jpeg"
                        layout='responsive'
                        className='brightness-50'
                    />
                    <h3 className='absolute brightness-100 font-bold text-3xl -mt-36 text-white px-5'>'Peace God' EP by Daboomsha and Stoute Louis</h3>
                </div>
                <span className='text-sm text-gray-700 mt-2 mb-2 text-justify px-3'>
                    We take a deep dive into this masterpiece from two Nigerian creatives. Daboomsha and Stoute Louis collaborate and deliver a nostalgic sound that reminds us why we love Hip Hop.
                </span>
                <span className='flex justify-end'>
                    <h5 className='px-3 text-xs text-gray-500 self-center'>April 02, 2022</h5>
                    <div className='px-3 content-center'>
                        <Image 
                            width={20}
                            height={20}
                            alt="author"
                            src="/sam-modified.png"
                        />
                    </div>
                    
                </span>
            </div>

            <div className='flex flex-col cursor-pointer bg-white rounded overflow-hidden drop-shadow-lg hover:drop-shadow-2xl'>
                <div className='relative'>
                    <Image 
                        width={433}
                        height={433}
                        alt="A travel guide for the broken"
                        src="/synik.jpg"
                        layout='responsive'
                        className='brightness-50'
                    />
                    <h3 className='absolute brightness-100 font-bold text-3xl -mt-36 text-white px-5'>'A Travel Guide for the Broken' by Synik</h3>
                </div>
                <span className='text-sm text-gray-700 mt-2 mb-2 text-justify px-3'>
                    We set our ears and sights on a Zimbabwean creative by the name of Synik. A conceptually pleasing sound offering with a plethora of emotional themes to vibe to.
                </span>
                <span className='flex justify-end'>
                    <h5 className='px-3 text-xs text-gray-500 self-center'>April 02, 2022</h5>
                    <div className='px-3 content-center'>
                        <Image 
                            width={20}
                            height={20}
                            alt="author"
                            src="/sam-modified.png"
                        />
                    </div>
                    
                </span>
            </div>

            <div className='flex flex-col cursor-pointer bg-white rounded overflow-hidden drop-shadow-lg hover:drop-shadow-2xl'>
                <div className='relative'>
                    <Image 
                        width={433}
                        height={433}
                        alt="The Purpose EP"
                        src="/holstar.jpg"
                        layout='responsive'
                        className='brightness-50'
                    />
                    <h3 className='absolute brightness-100 font-bold text-3xl -mt-36 text-white px-5'>'Africore' by Holstar</h3>
                </div>
                <span className='text-sm text-gray-700 mt-2 mb-2 text-justify px-3'>
                    Much is to be said of the Holstar. A Zambian creative, music executive and African music champion. Africore is neatly executed.
                </span>
                <span className='flex justify-end'>
                    <h5 className='px-3 text-xs text-gray-500 self-center'>April 02, 2022</h5>
                    <div className='px-3 content-center'>
                        <Image 
                            width={20}
                            height={20}
                            alt="author"
                            src="/sam-modified.png"
                        />
                    </div>
                    
                </span>
            </div>
        </div>
        <div className='flex justify-center mt-12'>
            <Link href="/posts">
            <div className='rounded-full py-2 px-3 uppercase font-bold cursor-pointer tracking-wider border-black border-2 hover:text-white hover:bg-black transition ease-out duration-500'>More Posts</div>
            </Link>
        </div>
    </>
  )
}

export default LandingGrid