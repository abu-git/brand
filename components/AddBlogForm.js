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

            router.push('/')
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
    }
}