import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useContext } from "react";
import axios from "axios";
const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token, navigate]);
  axios.get(`${import.meta.env.VITE_BASE_URL}captains/profile`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(response =>{
    if(response.status==200){
      setCaptain(response.data.captain)
      setIsLoading(false)
    }
  })
  .catch(err=>{
    console.log(err);
    localStorage.removeItem("token")
    navigate("/captain-login")
  })
   if(isLoading){
    return (<>
      Loading
      </>
  )};
  return <>{children}</>;
};

export default CaptainProtectWrapper;
