import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true)
  const {user ,setUser} = useContext(UserDataContext)

  useEffect(() => {
    if (!token) {
      navigate("/login");
     
    }
  }, [token, navigate]);
   axios.get(`${import.meta.env.VITE_BASE_URL}users/profile`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(response =>{
    if(response.status==200){
      setUser(response.data.user)
      setIsLoading(false)
    }
  })
  .catch(err=>{
    console.log(err);
    localStorage.removeItem("token")
    navigate("/login")
  })
   if(isLoading){
    return (<>
      Loading
      </>
  )};
  return <>{children}</>;
};

export default UserProtectWrapper;
