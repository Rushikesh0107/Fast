import React from 'react'
import { Link } from 'react-router-dom'

interface BlogCardProps {
    id: string
    authorName: string
    title: string
    content: string
    publishedAt: string
}

const BlogCard = ({title, content, authorName, publishedAt, id} : BlogCardProps) => {
  return (
    <Link
    to={`/blog/${id}`}
    >
    
        <div
        className=' md:max-w-xl p-5 border-b border-slate-300'
        >
            <div
            className='flex items-center'
            >
                <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{authorName[0]}</span>
                </div>

                <div
                className='pl-2 font-light'
                >
                    {authorName}
                </div>

                <div
                className='w-1 h-1 mx-2 bg-slate-400 rounded-full'
                >
                </div>

                <div
                className='font-thin'
                >
                    {publishedAt}
                </div>
            </div>

            <div
            className='flex flex-col'
            >
                <div
                className='font-semibold mt-3 text-2xl'
                >
                    {title}
                </div>

                <div
                className='font-light'
                >
                    {content.length > 200 ? content.substring(0, 200) + '...' : content}
                </div>
            </div>

            <div
            className='font-thin text-slate-700 mt-3'
            >
                {Math.ceil(content.length / 100) + " minute(s) to read"} 
            </div>


        </div>
    </Link>
  )
}

export default BlogCard