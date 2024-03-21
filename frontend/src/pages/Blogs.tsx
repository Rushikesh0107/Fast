import React from 'react'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
  return (
    <div
    className='flex w-full justify-center items-center flex-col'
    >
      <BlogCard
      authorName='Rushikesh Dadas'
      title='How to attain a higher form of consciousness with the help of meditation'
      content='Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.'
      publishedAt='2021-07-01'
      />

      <BlogCard
      authorName='Rushikesh Dadas'
      title='How to attain a higher form of consciousness with the help of meditation'
      content='Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.'
      publishedAt='2021-07-01'
      />

      <BlogCard
      authorName='Rushikesh Dadas'
      title='How to attain a higher form of consciousness with the help of meditation'
      content='Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.'
      publishedAt='2021-07-01'
      />
    </div>
  )
}

export default Blogs