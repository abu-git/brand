import Link from 'next/link'
import dbConnect from '../../lib/dbConnect'
import Blog from '../../models/Blog'
import { useRouter } from 'next/router'


function Index ({ blogs, page, count, limit }){
    
    const router = useRouter()
    let countIndex = 0
    if(page > 1){
        countIndex =  limit * (page - 1)
    }
    const lastPage = Math.ceil(count/10)
    return(
    <>
        <h2 className='text-lg font-bold my-10 text-center'>Blog Dashboard</h2>
        <div className='container mx-auto border-2 rounded-md pb-5'>
            <div className='flex justify-between px-6 py-4'>
                
                <button disabled={page <= 1} className='disabled:opacity-50 disabled:hover:bg-gray-800 py-2 px-3 bg-gray-800 hover:bg-gray-900 text-white rounded-md flex' onClick={() => router.push(`/add?page=${page - 1}`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <h3>Previous</h3>
                </button>
                
                
                
                <button disabled={page >= lastPage} className='disabled:opacity-50 disabled:hover:bg-gray-800 py-2 px-3 bg-gray-800 hover:bg-gray-900 text-white rounded-md flex' onClick={() => router.push(`/add?page=${page + 1}`)}>
                    <h3>Next</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                
                
            </div>
            <div className='flex flex-col'>
                <div className='overflow-x-auto sm:-mx-6 lg:px-8'>
                    <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                        <div className='overflow-hidden'>
                            <table className='min-w-full'>
                                <thead className='bg-white border-b'>
                                    <tr>
                                        <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                                            #
                                        </th>
                                        <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                                            TITLE
                                        </th>
                                        <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                                            DESCRIPTION
                                        </th>
                                        <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                                            SLUG
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Create table row for each blog */}
                                    {blogs.map((blog, index) => (
                                        <tr key={blog._id} className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100'>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                                                {page === 1 && index + 1}
                                                {page > 1 && (index + countIndex + 1)}
                                            </td>
                                            <td className='px-6 py-4 whitespace-wrap text-sm text-gray-900'>
                                                {blog.title}
                                            </td>
                                            <td className='px-6 py-4 whitespace-wrap text-sm text-gray-900'>
                                                {blog.description}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                                                {blog.slug}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
             
    </>
    )
}

/* Retreives blog(s) data from mongodb database */
export async function getServerSideProps({ query: {page = 1}}){
    await dbConnect()

    /* find all data in database */
    //const result = await Blog.find({})

    const options = { page: page, limit: 10 }
    const result = await Blog.paginate({}, options)
    //console.log(result.page)
    const blogs = result.docs.map((doc) => {
        const blog = doc.toObject()
        blog._id = blog._id.toString()
        blog.date = blog.date.toString()
        return blog
    })

    return { 
        props: { 
            blogs: blogs,
            page: parseInt(result.page),
            count: parseInt(result.totalDocs), 
            limit: parseInt(result.limit)
        } 
    }
}

export default Index