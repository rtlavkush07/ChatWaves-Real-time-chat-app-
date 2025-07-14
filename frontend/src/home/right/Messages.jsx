import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js';
import Loading from '../../components/Loading.jsx';
import useGetSocketMessage from '../../context/useGetSocketMessage.js';
const Messages = () => {
  const { messages, loading } = useGetMessage();
  console.log(messages);

useGetSocketMessage();
   


  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);

  return (
     <div className="flex-1 overflow-y-auto" style={{ minHeight: "calc( 92vh - 8vh )" 

      }}>

      {loading ? (<Loading />) 
      : 
      (messages.length > 0 && messages.map((message) => (

        <div key={message._id} ref={lastMessageRef}>

         <Message message={message}   />
        </div>
      
      )))}

     
        {!loading && messages.length === 0 && (<div>
          <p className="text-center text-white font-sans mt-[20%]">No Messages</p>
          </div>
          )
        }


      </div>
    
  );
};

export default Messages