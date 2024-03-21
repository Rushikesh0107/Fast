import React from 'react'
import Quote from '../components/Quote'
import Auth from '../components/Auth'

const Signup = () => {
  return (
    <div>
        <div
        className='grid md:grid-cols-2 flex-col'
        >
            <div
            className='h-screen'
            >
                <Auth type="signup"/>
            </div>
            <div
            className=''
            >
                <Quote />
            </div>
        </div>

    </div>
  )
}

export default Signup