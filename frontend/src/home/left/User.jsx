import React from 'react'
import img from './profile.jpg'

const User = () => {
    return (

        <div className='flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src={img} />
                </div>
            </div>
            <div>
                <h1 className='font-bold'>Lav Kush</h1>
                <span>lavkush@gmail.com</span>
            </div>
        </div>
    )
}

export default User