import { useState } from "react"
import { useRouter } from "next/router"
import { mutate } from "swr"

const AddBlogForm = ({ formId, blogForm, forNewBlog = true }) => {
    const router = useRouter()
    const contentType = 'application/json'
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')

    const [form, setForm] = useState({
        title: blogForm.title,
        description: blogForm.description,
        content: blogForm.content,
        more_content: blogForm.more_content,
        gridImage: blogForm.gridImage,
        slug: blogForm.slug,
        spotify: blogForm.spotify,
        youtube: blogForm.youtube,
        itunes: blogForm.itunes,
        metaImage: blogForm.metaImage,
    })

    /* The POST method adds a new entry in the mongodb database */
    const postData = async (form) => {
        try{
            const res = await fetch('/api/blog', {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(form)
            })

            //Throw error with status code in case Fetch API req failed
            if(!res.ok){
                throw new Error(res.status)
            }

            router.push('/add')
        }catch(error){
            console.log(error)
            setMessage('Failed to add Blog Post')
        }
    }

    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        setForm({...form, [name]: value })
    }

    /* Makes sure blog info is filled */
    const formValidate = () => {
        let err = {}
        if(!form.title) err.title = 'Title is required'
        if(!form.description) err.description = 'Description is required'
        if(!form.content) err.content = 'Content is required'
        if(!form.gridImage) err.gridImage = 'gridImage is required'
        if(!form.slug) err.slug = 'slug is required'
        if(!form.spotify) err.spotify = 'spotify is required'
        if(!form.youtube) err.youtube = 'youtube is required'
        if(!form.itunes) err.itunes = 'itunes is required'
        if(!form.metaImage) err.metaImage = 'metaImage is required'
        return err
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const errs = formValidate()
        if(Object.keys(errs).length === 0){
            if(forNewBlog === true){
                postData(form)
            }
        }else{
            setErrors({ errs })
        }
    }

    return(
        <>
            <div className='bg-slate-100 py-7 px-24'>
                <h2 className='text-lg font-semibold text-center'>Create Blog Post</h2>
                <form id={formId} onSubmit={handleSubmit} className='bg-white mx-5 my-6 py-4 px-3'>
                    <div className='flex py-2'>
                        <div className='w-full px-2'>
                            <label htmlFor="title" className='block mb-1'>title</label>
                            <input
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md text-black'
                                required
                            />
                            {/*errors?.title && (<p className='text-red-500 mt-1'>title cannot be empty</p>)*/}
                        </div>
                        <div className='w-full px-2'>
                            <label className='block mb-1'>description</label>
                            <input
                                type="text"
                                name="description"
                                value={form.description}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md'
                                required
                            />
                            {/*errors?.description && (<p className='text-red-500 mt-1'>description cannot be empty</p>)*/}
                        </div>
                    </div>

                    <div className='w-full px-2 py-2'>
                        <label className='block mb-1'>content</label>
                        <textarea
                            type="text"
                            name="content"
                            value={form.content}
                            onChange={handleChange} 
                            className='w-full h-24 px-3 border border-black rounded-md'
                            required
                        >
                        </textarea>
                        {/*errors?.content && (<p className='text-red-500 mt-1'>content cannot be empty</p>)*/}
                    </div>

                    <div className='w-full px-2 py-2'>
                        <label className='block mb-1'>more content</label>
                        <textarea
                            type='text'
                            name="more_content"
                            value={form.more_content}
                            onChange={ handleChange } 
                            className='w-full h-24 px-3 border border-black rounded-md'>
                        </textarea>
                    </div>

                    <div className='flex py-2'>
                        <div className='w-full px-2'>
                            <label className='block mb-1'>gridImage</label>
                            <input
                                type="text"
                                name="gridImage"
                                value={form.gridImage}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md'
                                required
                            />
                            {/*errors?.gridImage && (<p className='text-red-500 mt-1'>gridImage cannot be empty</p>)*/}
                        </div>
                        <div className='w-full px-2'>
                            <label className='block mb-1'>slug</label>
                            <input
                                type="text"
                                name="slug"
                                value={form.slug}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md'
                                required
                            />
                            {/*errors?.slug && (<p className='text-red-500 mt-1'>slug cannot be empty</p>)*/}
                        </div>
                    </div>

                    <div className='flex py-2'>
                        <div className='w-full px-2'>
                            <label className='block mb-1'>spotify</label>
                            <input
                                type="text"
                                name="spotify"
                                value={form.spotify}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md'
                                required
                            />
                            {/*errors?.spotify && (<p className='text-red-500 mt-1'>spotify cannot be empty</p>)*/}
                        </div>
                        <div className='w-full px-2'>
                            <label className='block mb-1'>youtube</label>
                            <input
                                type="text"
                                name="youtube"
                                value={form.youtube}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md'
                                required
                            />
                            {/*errors?.youtube && (<p className='text-red-500 mt-1'>youtube cannot be empty</p>)*/}
                        </div>
                    </div>

                    <div className='flex py-2'>
                        <div className='w-full px-2'>
                            <label className='block mb-1'>itunes</label>
                            <input
                                type="text"
                                name="itunes"
                                value={form.itunes}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md'
                                required
                            />
                            {/*errors?.itunes && (<p className='text-red-500 mt-1'>itunes cannot be empty</p>)*/}
                        </div>
                        <div className='w-full px-2'>
                            <label className='block mb-1'>metaImage</label>
                            <input
                                type="text"
                                name="metaImage"
                                value={form.metaImage}
                                onChange={handleChange} 
                                className='w-full h-10 px-3 border border-black rounded-md'
                                required
                            />
                            {/*errors?.metaImage && (<p className='text-red-500 mt-1'>metaImage cannot be empty</p>)*/}
                        </div>
                    </div>
                    {/*showSuccessMsg === true && <p className='text-green-500 font-semibold mt-1'>Success! Added to Database</p>}
                    {showFailureMsg === true && <p className='text-red-500 font-semibold mt-1'>Oops! Something went wrong!</p>*/}
                    <button className='h-12 mt-4 w-full text-white transition-colors duration-150 bg-amber-700 rounded-lg focus:shadow-outline hover:bg-amber-800'>Add to Database</button>
                </form>
            </div>
        </>
    )
}

export default AddBlogForm