import React, { useState } from 'react'
import connectMongo from '../../utils/connectMongoDB'
import { Blogs } from '../../models/blogModel'
import validator from 'validator'

function Create() {

    //inputs
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const [more_content, setMore_content] = useState('')
    const [gridImage, setGridImage] = useState('')
    const [slug, setSlug] = useState('')
    const [spotify, setSpotify] = useState('')
    const [youtube, setYoutube] = useState('')
    const [itunes, setItunes] = useState('')
    const [metaImage, setMetaImage] = useState('')

    //form validation
    const [errors, setErrors] = useState({})

    //success or failure states
    const [showSuccessMsg, setShowSuccessMsg] = useState(false)
    const [showFailureMsg, setShowFailureMsg] = useState(false)

    const handleValidation = () => {
        let tempErrors = {}
        let isValid = true

        if(validator.isEmpty(title)){
            tempErrors['title'] = true
            isValid = false
        }else if(validator.isEmpty(description)){
            tempErrors['description'] = true
            isValid = false
        }else if(validator.isEmpty(content)){
            tempErrors['content'] = true
            isValid = false
        }else if(validator.isEmpty(gridImage)){
            tempErrors['gridImage'] = true
            isValid = false
        }else if(validator.isEmpty(slug)){
            tempErrors['slug'] = true
            isValid = false
        }else if(validator.isEmpty(spotify)){
            tempErrors['spotify'] = true
            isValid = false
        }else if(validator.isEmpty(youtube)){
            tempErrors['youtube'] = true
            isValid = false
        }else if(validator.isEmpty(itunes)){
            tempErrors['itunes'] = true
            isValid = false
        }else if(validator.isEmpty(metaImage)){
            tempErrors['metaImage'] = true
            isValid = false
        }

        setErrors({...tempErrors})
        console.log('errors', errors)
        return isValid
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let isValidForm = handleValidation()

        if(isValidForm){
            const res = await fetch('/api/blog/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
    
                body: JSON.stringify({
                    title: title,
                    description: description,
                    content: content,
                    more_content: more_content,
                    gridImage: gridImage,
                    slug: slug,
                    spotify: spotify,
                    youtube: youtube,
                    itunes: itunes,
                    metaImage: metaImage
                })
            })

            const error = await res.json()
            if(error.status !== 'Ok'){
                console.log(error)
                setShowFailureMsg(true)
                setShowSuccessMsg(false)
                return
            }else{
                setShowFailureMsg(false)
                setShowSuccessMsg(true)
            }
        }
    }
    

    return (
    <div className='bg-slate-100 py-7 px-24'>
        <h2 className='text-lg font-semibold text-center'>Create Blog Post</h2>
        <form onSubmit={handleSubmit} className='bg-white mx-5 my-6 py-4 px-3'>
            <div className='flex py-2'>
                <div className='w-full px-2'>
                    <label className='block mb-1'>title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} 
                        className='w-full h-10 px-3 border border-black rounded-md'
                    />
                    {errors?.title && (<p className='text-red-500 mt-1'>title cannot be empty</p>)}
                </div>
                <div className='w-full px-2'>
                    <label className='block mb-1'>description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} 
                        className='w-full h-10 px-3 border border-black rounded-md'
                    />
                    {errors?.description && (<p className='text-red-500 mt-1'>description cannot be empty</p>)}
                </div>
            </div>

            <div className='w-full px-2 py-2'>
                <label className='block mb-1'>content</label>
                <textarea
                    type="text"
                    value={content}
                    onChange={(e) => { setContent(e.target.value) }} 
                    className='w-full h-24 px-3 border border-black rounded-md'>
                </textarea>
                {errors?.content && (<p className='text-red-500 mt-1'>content cannot be empty</p>)}
            </div>

            <div className='w-full px-2 py-2'>
                <label className='block mb-1'>more content</label>
                <textarea
                    type='text'
                    value={more_content}
                    onChange={(e) => { setMore_content(e.target.value) }} 
                    className='w-full h-24 px-3 border border-black rounded-md'>
                </textarea>
            </div>

            <div className='flex py-2'>
                <div className='w-full px-2'>
                    <label className='block mb-1'>gridImage</label>
                    <input
                        type="text"
                        value={gridImage}
                        onChange={(e) => { setGridImage(e.target.value) }} 
                        className='w-full h-10 px-3 border border-black rounded-md'
                    />
                    {errors?.gridImage && (<p className='text-red-500 mt-1'>gridImage cannot be empty</p>)}
                </div>
                <div className='w-full px-2'>
                    <label className='block mb-1'>slug</label>
                    <input
                        type="text"
                        value={slug}
                        onChange={(e) => { setSlug(e.target.value) }} 
                        className='w-full h-10 px-3 border border-black rounded-md'
                    />
                    {errors?.slug && (<p className='text-red-500 mt-1'>slug cannot be empty</p>)}
                </div>
            </div>

            <div className='flex py-2'>
                <div className='w-full px-2'>
                    <label className='block mb-1'>spotify</label>
                    <input
                        type="text"
                        value={spotify}
                        onChange={(e) => { setSpotify(e.target.value) }} 
                        className='w-full h-10 px-3 border border-black rounded-md'
                    />
                    {errors?.spotify && (<p className='text-red-500 mt-1'>spotify cannot be empty</p>)}
                </div>
                <div className='w-full px-2'>
                    <label className='block mb-1'>youtube</label>
                    <input
                        type="text"
                        value={youtube}
                        onChange={(e) => { setYoutube(e.target.value) }} 
                        className='w-full h-10 px-3 border border-black rounded-md'
                    />
                    {errors?.youtube && (<p className='text-red-500 mt-1'>youtube cannot be empty</p>)}
                </div>
            </div>

            <div className='flex py-2'>
                <div className='w-full px-2'>
                    <label className='block mb-1'>itunes</label>
                    <input
                        type="text"
                        value={itunes}
                        onChange={(e) => { setItunes(e.target.value) }} 
                        className='w-full h-10 px-3 border border-black rounded-md'
                    />
                    {errors?.itunes && (<p className='text-red-500 mt-1'>itunes cannot be empty</p>)}
                </div>
                <div className='w-full px-2'>
                    <label className='block mb-1'>metaImage</label>
                    <input
                        type="text"
                        value={metaImage}
                        onChange={(e) => { setMetaImage(e.target.value)}} 
                        className='w-full h-10 px-3 border border-black rounded-md'
                    />
                    {errors?.metaImage && (<p className='text-red-500 mt-1'>metaImage cannot be empty</p>)}
                </div>
            </div>
            {showSuccessMsg === true && <p className='text-green-500 font-semibold mt-1'>Success! Added to Database</p>}
            {showFailureMsg === true && <p className='text-red-500 font-semibold mt-1'>Oops! Something went wrong!</p>}
            <button className='h-12 mt-4 w-full text-white transition-colors duration-150 bg-amber-700 rounded-lg focus:shadow-outline hover:bg-amber-800'>Add to Database</button>
        </form>
    </div>
  )
}

export default Create

/*export const getServerSideProps = async () => {
    console.log('Connecting to MongoDB...')
    await connectMongo()
    console.log('Connected to MongoDB...')
    return{
        props: {

        }
    }
}*/