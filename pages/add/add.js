import React from 'react'
import AddBlogForm from '../../components/AddBlogForm'

function AddBlog() {
  const blogForm = {
    title: '',
    description: '',
    content: '',
    more_content: '',
    gridImage: '',
    slug: '',
    spotify: '',
    youtube: '',
    itunes: '',
    metaImage: '',
  }

  return (
    <AddBlogForm formId="add-blog-form" blogForm={blogForm}  />
  )
}

export default AddBlog