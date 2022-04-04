import React from 'react'
import Image from 'next/image'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

function Posts() {
  return (
    <>
        <Navigation />
        <section className='mt-8 px-6 lg:px-48 flex flex-col'>
            <h2 className='mb-5 p-2 md:text-xl text-md font-semibold'>All Posts</h2>
            {/* post item */}
            <div className='flex bg-white rounded overflow-hidden drop-shadow-lg hover:drop-shadow-xl mb-4 max-h-96'>
                <div className='w-1/3 brightness-75'> 
                    <Image
                        width={20}
                        height={20}
                        src="/purposeheader.jpeg"
                        layout='responsive'
                    />
                </div>
                
                <div className='w-2/3 flex items-center'>
                    <h3 className='w-fit text-xs md:text-2xl lg:text-3xl xl:text-4xl font-light p-3 items-center'><span className='text-md font-semibold'>Timi Kei delivers a stellar oratory performance on The Purpose EP.</span> Production credits going to iamMHP also known as MHP.</h3>
                </div>
            </div>

            <div className='flex bg-white rounded overflow-hidden drop-shadow-lg hover:drop-shadow-xl mb-4 max-h-96'>
                <div className='w-1/3 brightness-75'> 
                    <Image
                        width={20}
                        height={20}
                        src="/boomsha.jpeg"
                        layout='responsive'
                    />
                </div>
                
                <div className='w-2/3 flex items-center'>
                    <h3 className='w-fit text-xs md:text-2xl lg:text-3xl xl:text-4xl font-light p-3 items-center'><span className='text-md font-semibold'>'Peace God' EP by Daboomsha and Stoute Louis</span> We dive deep into this masterpiece from two Nigerian creatives: Daboomsha and Stoute Louis</h3>
                </div>
            </div>

            <div className='flex bg-white rounded overflow-hidden drop-shadow-lg hover:drop-shadow-xl mb-4 max-h-96'>
                <div className='w-1/3 brightness-75'> 
                    <Image
                        width={20}
                        height={20}
                        src="/synik.jpg"
                        layout='responsive'
                    />
                </div>
                
                <div className='w-2/3 flex items-center'>
                    <h3 className='w-fit text-xs md:text-2xl lg:text-3xl xl:text-4xl font-light p-3 items-center'><span className='text-md font-semibold'>'A Travel Guide for the Broken' by Synik</span> We set our ears on a Zimbabwean creative by the name of Synik. A conceptually pleasing sound offering.</h3>
                </div>
            </div>

            <div className='flex bg-white rounded overflow-hidden drop-shadow-lg hover:drop-shadow-xl mb-4 max-h-96'>
                <div className='w-1/3 brightness-75'> 
                    <Image
                        width={20}
                        height={20}
                        src="/holstar.jpg"
                        layout='responsive'
                    />
                </div>
                
                <div className='w-2/3 flex items-center'>
                    <h3 className='w-fit text-xs md:text-2xl lg:text-3xl xl:text-4xl font-light p-3 items-center'><span className='text-md font-semibold'>'Africore' by Holstar</span> Much is to be said of the Holstar. A Zambian creative, music executive and African music champion. Africore is neatly executed.</h3>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Posts