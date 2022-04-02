import React from 'react'
import Image from 'next/image'

function LandingGrid() {
  return (
    <div className='mt-8 mb-8 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {/* grid item */}
        <div className='flex flex-col cursor-pointer bg-white rounded overflow-hidden drop-shadow-lg hover:drop-shadow-2xl'>
            <div className='relative'>
                <Image 
                    width={433}
                    height={433}
                    alt="The Purpose EP"
                    src="/purposeheader.jpeg"
                    layout='responsive'
                    className='brightness-50'
                />
                <h3 className='absolute brightness-100 font-bold text-3xl -mt-32 text-white px-5'>'The Purpose' EP by Timi Kei and iamMHP</h3>
            </div>
            <span className='text-sm text-gray-700 mt-2 mb-2 text-justify px-3'>
                Timi Kei delivers a stellar oratory performance on The Purpose Ep. Weaving his religion with practical ideas his use of a vast vocabulary is very much evident.
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
                <h3 className='absolute brightness-100 font-bold text-3xl -mt-32 text-white px-5'>'A Travel Guide for the Broken' by Synik</h3>
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
                <h3 className='absolute brightness-100 font-bold text-3xl -mt-32 text-white px-5'>'Africore' by Holstar</h3>
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
  )
}

export default LandingGrid