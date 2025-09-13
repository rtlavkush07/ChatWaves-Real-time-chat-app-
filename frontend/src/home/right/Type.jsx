import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'
import useSendMessage from '../../context/useSendMessage.js';

const Type = () => {
  const {loading, sendMessages} = useSendMessage();
  const [message, setMessage] = useState("");// starting me empty string hoga
  const handleSubmit = async (e)=>{
     e.preventDefault();
    await sendMessages(message);
    setMessage(""); // message send hone ke baad input box ko clear karne ke li
  }
  return (
    <>
    
   <form onSubmit={handleSubmit}>
     <div className='flex space-x-1 h-[8vh]  bg-gray-800'>
        
        <div className="w-[90%] mx-4">
             <input 
             type="text"
             value={message}
             onChange={(e)=>{
              setMessage(e.target.value)
             }}
              className="border-[1px] border-gray-700  flex items-center w-full py-3 px-3 rounded-xl grow outline-none bg-slate-900 mt-1"
               placeholder="Type here" />
        </div>
       
           <button>
             <IoSend className='text-3xl hover:bg-gray-900' />
           </button>
        
    </div>
   </form>
    </>
  )
}

export default Type