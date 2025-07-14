import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js';
import Loading from '../../components/Loading.jsx';
const Messages = () => {
  const { messages, loading} = useGetMessage();
  console.log(messages);

  const lastMessageRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMessageRef.current){
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    },100);
  },[messages]);

  return (
   <>

{loading?(<Loading/>):(messages.length > 0 && messages.map((message)=>{
  return <Message  message={message} />
}))}

   <div className="" style={{minHeight: "calc( 88vh - 8vh )"}}>
   {!loading && messages.length === 0 && <div><p className="text-center text-white font-sans mt-[20%]">No Messages</p></div>}
   
  
   </div>
   </>
  )
}

export default Messages