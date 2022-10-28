import React from 'react'

function Add() {
  return (
    <div className='bg-slate-100 py-7 px-12'>
        <div className='flex justify-between'>
            <h3 className='text-lg font-semibold'>tunesketch Posts</h3>

            <button className='bg-amber-600 py-4 px-3 flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                Create Entry
            </button>
        </div>
    </div>
  )
}

export default Add