import React from 'react'

const Message = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem("user"));
  const itsme = message.senderId === authUser.user._id;
  const chatName = itsme ? "chat-end" : "chat-start";
  const chatColor = itsme ? "bg-blue-400" : "";
  // console.log(authUser.user._id)
  // console.log(message.senderId)
  return (

    <div className='p-4'>
      <div className={ `chat ${chatName}`}>
        <div className={ `chat-bubble text-white ${chatColor}`}>{message.message}</div>
      </div>

     

    </div>


  )
}

export default Message