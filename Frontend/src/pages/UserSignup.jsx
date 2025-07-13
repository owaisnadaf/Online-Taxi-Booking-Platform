import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios  from "axios"
import {UserDataContext} from "../context/UserContext";

const UserSignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const {user,setUser} = React.useContext(UserDataContext)

  const submitHandler = async(e) => {
    e.preventDefault();
    const newuser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email,
      password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}users/register`,newuser)
    if(response.status==201){
      const data = response.data
      setUser(data.user)
      localStorage.setItem("token",data.token)
      navigate("/home")
    }

    setFirstname("");
    setLastname("");
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
          <h3 className="text-lg font-medium mb-2">What's your name?</h3>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              placeholder="Firstname"
            />
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              placeholder="Lastname"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="Password"
          />
          <button className=" bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Create Account
          </button>
          <p className="text-center text-lg sm:text-xl">
            <span>Already have a account? </span>
            <Link to="/login" className="text-blue-600">
              Login Here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[8px] leading-tight text-grey-300 sm:text-[12px]">
          By proceeding, you consent to get calls,WhatsApp or SMS
          messages,including by automated means,from Uber and its affiliates to
          the number provided
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
