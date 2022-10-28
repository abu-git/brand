import React from 'react'
import connectMongo from '../../utils/connectMongoDB'
import Blog from '../../models/blogModel'

function Create() {

    const createBlog = async () => {
        const res = await fetch('/api/blog/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                title: req.body.title,
                description: req.body.description,
                content: req.body.content,
                more_content: req.body.content,
                gridImage: req.body.gridImage,
                slug: req.body.slug,
                spotify: req.body.spotify,
                youtube: req.body.youtube,
                itunes: req.body.itunes,
                metaImage: req.body.metaImage
            })
        })

        const data = await res.json()
        console.log(data)
    }
    

    return (
    <div className='bg-slate-100 py-7 px-24'>
        <h2 className='text-lg font-semibold text-center'>Create Blog Post</h2>
        <form className='bg-white mx-5 my-6 py-4 px-3'>
            <div className='flex py-2'>
                <div className='w-full px-2'>
                    <label className='block mb-1'>title</label>
                    <input className='w-full h-10 px-3 border border-black rounded-md'/>
                </div>
                <div className='w-full px-2'>
                    <label className='block mb-1'>description</label>
                    <input className='w-full h-10 px-3 border border-black rounded-md'/>
                </div>
            </div>

            <div className='w-full px-2 py-2'>
                <label className='block mb-1'>content</label>
                <textarea className='w-full h-24 px-3 border border-black rounded-md'></textarea>
            </div>

            <div className='w-full px-2 py-2'>
                <label className='block mb-1'>more content</label>
                <textarea className='w-full h-24 px-3 border border-black rounded-md'></textarea>
            </div>

            <div className='flex py-2'>
                <div className='w-full px-2'>
                    <label className='block mb-1'>gridImage</label>
                    <input className='w-full h-10 px-3 border border-black rounded-md'/>
                </div>
                <div className='w-full px-2'>
                    <label className='block mb-1'>slug</label>
                    <input className='w-full h-10 px-3 border border-black rounded-md'/>
                </div>
            </div>

            <div className='flex py-2'>
                <div className='w-full px-2'>
                    <label className='block mb-1'>spotify</label>
                    <input className='w-full h-10 px-3 border border-black rounded-md'/>
                </div>
                <div className='w-full px-2'>
                    <label className='block mb-1'>youtube</label>
                    <input className='w-full h-10 px-3 border border-black rounded-md'/>
                </div>
            </div>

            <div className='flex py-2'>
                <div className='w-full px-2'>
                    <label className='block mb-1'>itunes</label>
                    <input className='w-full h-10 px-3 border border-black rounded-md'/>
                </div>
                <div className='w-full px-2'>
                    <label className='block mb-1'>metaImage</label>
                    <input className='w-full h-10 px-3 border border-black rounded-md'/>
                </div>
            </div>

            <button className='h-12 mt-4 w-full text-white transition-colors duration-150 bg-amber-700 rounded-lg focus:shadow-outline hover:bg-amber-800'>Add to Database</button>
        </form>
    </div>
  )
}

export default Create