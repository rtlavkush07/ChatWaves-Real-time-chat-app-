import React from 'react';
import Chatuser from './Chatuser';
import Messages from './Messages';
import Type from './Type';
function Right () {
  return (
    <div  className="w-[70%]    bg-slate-950  text-white" >
    
    <Chatuser/>
   <div className="py-2 flex-1 overflow-y-auto" style={{maxHeight: "calc( 88vh - 8vh )"}}>
    <Messages/>
    </div> 
    <Type/>
    </div>
  )
}

export default Right;