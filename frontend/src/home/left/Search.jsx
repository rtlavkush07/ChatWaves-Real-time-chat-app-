import React from 'react'
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import userGetAllUsers from "../../context/userGetAllUsers.jsx";
import useConversation from '../../statemanage/useConversation.js';
import toast from 'react-hot-toast';

function Search() {

  const [search,setSearch] = useState("");
  const [allUsers] = userGetAllUsers();
  const {setSelectedConversation} = useConversation();

const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    const conversation = allUsers.find((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };


  return (
   <div className='px-4 py-4'>
    <form onSubmit={handleSubmit}>
<div className='flex space-x-3'>
    <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]" >
    
  <input
   type="text" 

  className="grow outline-none bg-slate-900" 
  placeholder="Search users"
  
  value={search}
  onChange={(e)=> setSearch(e.target.value)}


  />

</label>
<button>
    <IoSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300'/>
</button>
   </div>
</form>
</div>


  )
}

export default Search;