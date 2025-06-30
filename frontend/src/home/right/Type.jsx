import React from 'react'
import { IoSend } from 'react-icons/io5'

const Type = () => {
  return (
    <>
    
    <div className='flex space-x-1 h-[8vh]  bg-gray-800'>
        
        <div className="w-[90%] mx-4">
             <input 
             type="text"
              className="border-[1px] border-gray-700  flex items-center w-full py-3 px-3 rounded-xl grow outline-none bg-slate-900 mt-1"
               placeholder="Type here" />
        </div>
       
           <button>
             <IoSend className='text-3xl hover:bg-gray-900' />
           </button>
        
    </div>
    </>
  )
}

export default Type