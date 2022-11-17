import Link from 'next/link'
import dbConnect from '../../lib/dbConnect'
import Blog from '../../models/Blog'
import { useRouter } from 'next/router'


function Index ({ blogs, page, count }){
    
    const router = useRouter()

    const lastPage = Math.ceil(count/10)
    return(
    <>
        <h2 className='text-lg font-bold my-10 text-center'>Blog Dashboard</h2>
        <div className='container mx-auto border-2 rounded-md pb-5'>
            <div className='flex justify-between px-6 py-4'>
                {page > 1 &&
                    <button onClick={() => router.push(`/add?page=${page - 1}`)}>
                        Previous
                    </button>
                }
                
                {page != lastPage &&
                    <button onClick={() => router.push(`/add?page=${page + 1}`)}>
                        Next
                    </button>
                }
                
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
                                                {index + 1}
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
            count: parseInt(result.totalDocs) 
        } 
    }
}

export default Index