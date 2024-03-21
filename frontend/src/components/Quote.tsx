import React from 'react'

const Quote = () => {
  return (
    <div
    className='bg-slate-200 flex justify-center items-center h-screen'
    >   
    <div
    className='max-w-xl'
    >
        <div
        className='flex flex-col'
        >
            <div
            className='text-3xl font-bold text-slate-800'
            >
                "The customer service I received was excellent. The support team went above and beyond to address my concerns."
            </div>
            <div
            className='max-w-md text-left text-xl font-semibold text-slate-800 mt-7'
            >
                Akash Singh
            </div>
            <div
            className='max-w-md text-left text-sm font-light text-slate-400'
            >
                CEO | Acme Corp
            </div>
    </div>
        </div>
    </div>
  )
}

export default Quote