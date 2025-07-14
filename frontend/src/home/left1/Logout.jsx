import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";


function Logout() {
    const [loading, setLoading] = useState(false);
const handleLogOut = async () => {
setLoading(true);
try {
   const res =  await axios.post("/api/user/logout");
   localStorage.removeItem("user");
   Cookies.remove("jwt"); 
setLoading(false);
toast.success("Logout successful");

  // Redirect to login page
  window.location.href = "/login";

    
} catch (error) {
    console.log("Error logging out:", error);
}

}
  return (
    <>
      <div className="w-[4%]   bg-slate-950 text-white  flex flex-col justify-end ">
        <div className="p-3  align-bottom ">
          <button>
            <TbLogout2
              className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300"
             onClick={handleLogOut}
            />
          </button>
        </div>
      </div>
    </>
  );
}
export default Logout;