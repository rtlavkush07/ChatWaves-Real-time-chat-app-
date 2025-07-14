
// right side me top pe sender ka name and image 

import React from 'react'
import img from './profile.jpg'

import useConversation from '../../statemanage/useConversation.js';

const Chatuser = () => {
  const {selectedConversation} = useConversation();
  console.log(selectedConversation);
  return (
   <div className=" pl-5 pt-5 pb-3 h-[12vh] flex space-x-4 bg-gray-900 hover:bg-gray-700 duration-300 cursor-pointer">
    <div>
         <div className="avatar online">
                    <div className="w-14 rounded-full">
                        <img src={img} />
                    </div>
                </div>
    </div>
    <div>
        <h1 className='text-xl'>
           {
        selectedConversation.name
        }
        </h1>  
        {/* <h1 className='text-xl'>LavKush</h1> */}
        <span className='text-sm'>Online</span>
    </div>

  </div>
  )
}

export default Chatuser