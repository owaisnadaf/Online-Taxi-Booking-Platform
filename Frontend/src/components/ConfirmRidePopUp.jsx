import React, { useState } from "react";
import { Link } from "react-router-dom";
const ConfirmRidePopUp = (props) => {
    const [OTP, setOTP] = useState("")
    const submitHandler = (e)=>{
        e.preventDefault();
        setOTP('')
    }
  return (
    <div>
      <h5
        className="p1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setConfirmRidePopUpPanel(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-4">
        Confirm this ride to start
      </h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
            alt=""
            className="h-12 rounded-full object-cover w-12"
          />
          <h2 className="text-lg font-medium">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2km</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-3">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Sambhaji Chowk, Keshavnagar
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Sambhaji Chowk, Keshavnagar
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="text-lg ri-currency-line"></i>
            <div className="">
              <h3 className="text-lg font-medium">174.52</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full">
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input value={OTP}
            type="text"
            onChange={(e)=>{
                setOTP(e.target.value)
            }}
            className="px-6 py-4 font-mono text-lg rounded-lg w-full mt-3"
            placeholder="Enter OTP"
          />
          <Link
            to="/captain-riding"
            className="w-full flex justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg"
            onClick={() => {}}
          >
            Confirm ride
          </Link>
          <button
            className="w-full mt-2 bg-red-600 text-white font-semibold p-3 rounded-lg"
            onClick={() => {
              props.setConfirmRidePopUpPanel(false);
              props.setRidePopUpPanel(false);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
