import React, { useEffect, useState } from 'react'
import useConversation from '../statemanage/useConversation.js';
import axios from "axios";
const useGetMessage = () => {

    const [loading, setLoading] = useState(false);
    const {messages,setMessages,selectedConversation} = useConversation();

// console.log(selectedConversation?._id) // shuru me null tha to ._id error aa rha tha 
    useEffect(()=>{
        const getMessages = async () => {
            setLoading(true);
        if(selectedConversation && selectedConversation._id) // phle select then show selected id nhi to null ka kya id hoga error aayega 
        {
            try {
                // console.log("Selected Conversation ID:", selectedConversation?._id);

           const res = await axios.get(
             `/api/message/get/${selectedConversation._id} `
          );

            setMessages(res.data);
            setLoading(false);
        } catch (error) {
            console.log("Error in useGetMessage: ", error);
        }

        }

        
        };
        getMessages();

       
    },[selectedConversation,setMessages]);

  return {
    messages,
    loading
  };
}

export default useGetMessage;