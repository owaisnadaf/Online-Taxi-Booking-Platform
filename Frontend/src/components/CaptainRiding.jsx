import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from './FinishRide';
const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
    useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
     <div className="h-screen relative">
      
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16 bg-transparent"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg?mbid=social_retweet"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400"onClick={()=>{
        setFinishRidePanel(true)
       }}> 
        <h5
        className="p1 text-center w-[93%] absolute top-0"
       >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">Complete Ride</button>
      </div>
       <div ref={finishRidePanelRef} className="fixed w-full z-10 bottom-0 bg-white translate-y-full px-3 py-10 pt-12">
      <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  )
}

export default CaptainRiding