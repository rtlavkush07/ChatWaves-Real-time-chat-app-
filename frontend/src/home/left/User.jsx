import React from 'react'
import img from './profile.jpg'
import useConversation from '../../statemanage/useConversation.js'

 function User({user}) {
    const {selectedConversation,setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === user._id;
    return (

       <div className={`hover:bg-slate-600 duration-300 cursor-pointer  ${isSelected ? 'bg-slate-700' : ''}`} 
       onClick={() => setSelectedConversation(user)}
        >
         <div className='flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src={img} />
                </div> 
            </div>
            <div>
                <h1 className='font-bold'>{user.name}</h1>
                <span>{user.email}</span>
            </div>
        </div>
       </div>
    )
}

export default User