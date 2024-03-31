import React from 'react'

const AppBar = () => {
  return (
    <div
    className='border-b border-slate-900 h-20 flex w-full justify-between items-center md:px-16 px-5 bg-slate-800 dark:bg-gray-800 dark:text-gray-300 sticky top-0 z-10'
    >
        <div
        className='font-semibold text-3xl '
        >
          Medium
        </div>

        <div>
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span className="font-medium text-gray-600 dark:text-gray-300">R</span>
              </div>
        </div>
    </div>
  )
}

export default AppBar