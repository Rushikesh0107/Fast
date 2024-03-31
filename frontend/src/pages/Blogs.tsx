import React from 'react'
import BlogCard from '../components/BlogCard'
import AppBar from '../components/AppBar'
import useBlogsHook from '../hooks'

const Blogs = () => {

    const blogs = useBlogsHook();

    console.log(blogs);
    

  return (
    <div
    className='flex w-full justify-center items-center flex-col'
    >
      <AppBar />
      {
        blogs.map((blog : any) => (
          <div
          key={blog?.id}
          >
            <BlogCard 
              authorName={blog?.authorId} 
              title={blog?.title}
              content={blog?.content}
              publishedAt="12 Jan 2002"
              id={blog?._id}
              />
          </div>
        ))
      }
    </div>
  )
}

export default Blogs