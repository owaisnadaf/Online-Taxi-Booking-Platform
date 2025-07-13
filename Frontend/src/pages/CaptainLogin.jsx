import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
const CaptainLogin = () => {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData, setCaptainData] = useState({})
     const navigate = useNavigate();
     const {captain,setCaptain} = React.useContext(CaptainDataContext)
    const submitHandler = async (e) => {
      e.preventDefault();
      const captainData = {
        email,
        password
      }
      
      const response  = await axios.post(`${import.meta.env.VITE_BASE_URL}captains/login`,captainData);
      if(response.status===200){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem("token",data.token);
        navigate("/captain-home")
      }
      
      setEmail("");
      setPassword("");
    };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
         <div className="">
           <img
             className="w-16 mb-10 bg-transparent"
             src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
             alt=""
           />
           <form action="" onSubmit={(e) => submitHandler(e)}>
             <h3 className="text-lg font-medium mb-2">What's your email?</h3>
             <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
               className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
               placeholder="email@example.com"
             />
             <h3 className="text-lg font-medium mb-2">Enter password</h3>
             <input
               type="password"
               value={password}
               required
               onChange={(e) => setPassword(e.target.value)}
               className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
               placeholder="Password"
             />
             <button className=" bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
               Login
             </button>
             <p className="text-center text-lg sm:text-xl">
               <span>Join a fleet? </span>
               <Link to="/captain-signup" className="text-blue-600">
                 Register as a captain
               </Link>
             </p>
           </form>
         </div>
         <div>
           <Link to="/login" className=" bg-[#d5622d] flex justify-center items-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
             Sign in as User
           </Link>
         </div>
       </div>
  )
}

export default CaptainLogin