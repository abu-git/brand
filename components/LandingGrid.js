import React from 'react'
import Image from 'next/image'

function LandingGrid() {
  return (
    <div className='mt-8 mb-8 px-6 grid lg:grid-cols-3 gap-10'>
        {/* grid item */}
        <div className='flex flex-col bg-white rounded overflow-hidden shadow-lg'>
            <Image 
                width={433}
                height={433}
                alt="The Purpose EP"
                src="/purposeheader.jpeg"
            />
            <span className='text-sm text-gray-700 mt-2 mb-2 text-justify px-3'>
                Timi Kei delivers a stellar oratory performance on The Purpose Ep. Weaving his religion with practical ideas his use of a vast vocabulary is very much evident.
            </span>
            <span>
                <h5 className='px-3 text-xs text-gray-500'>April 02, 2022</h5>
                <Image 
                    width={6}
                    height={6}
                    alt="author"
                    src="/sam-modified.png"
                />
            </span>
        </div>
    </div>
  )
}

export default LandingGrid