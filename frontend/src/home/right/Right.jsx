import React, { useEffect } from 'react';
import Chatuser from './Chatuser';
import Messages from './Messages';
import Type from './Type';
import useConversation from '../../statemanage/useConversation.js';
import { useAuth } from "../../context/AuthProvider.jsx";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
  return () => setSelectedConversation(null); // ✅ proper cleanup
}, []);

  return (
    <div className="w-full   bg-slate-800  text-gray-300" >
      <div>
        {!selectedConversation? (
          <NoChat />
        ) :
          (
            <>

              <Chatuser />
              <div className="py-2 flex-1 overflow-y-auto" style={{ maxHeight: "calc( 88vh - 8vh )" }}>
                <Messages />
              </div>
              <Type />
            
      </>
    )}
    </div>
    </div>
  )
}
 
export default Right;

const NoChat = () => {

  const [authUser] = useAuth();

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
       <h1 className='text-center font-semibold text-xl'>
 Welcome <span>{authUser.user.name}</span>
  <br />
  Please select a chat to start messaging.
</h1>

      </div>
    </>
  )

}