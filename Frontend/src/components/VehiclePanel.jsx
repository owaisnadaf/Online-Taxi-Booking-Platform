import React from "react";

const VehiclePanel = (props) => {


  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
           props.setVehiclePanel(false);
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 sm:p-3 items-center justify-between"
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1714472148/assets/95/a05538-918b-42d8-afe7-3c92325f2fd4/original/UberLux.png"
          alt=""
          className="h-10 sm:h-20"
        />
        <div className="ml-2 sm:ml-60 w-1/2">
          <h4 className="font-medium  text-base sm:text-xl">
            UberGo
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium  text-sm sm:text-base">2 mins away</h5>
          <p className="font-normal text-xs  text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold sm:text-xl">193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
           props.setVehiclePanel(false);
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 sm:p-3 items-center justify-between"
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
          alt=""
          className="h-10 sm:h-20"
        />
        <div className="ml-2 sm:ml-60 w-1/2">
          <h4 className="font-medium  text-base sm:text-xl">
            Moto
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium  text-sm sm:text-base">1 mins away</h5>
          <p className="font-normal text-xs  text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold  sm:text-xl">193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
           props.setVehiclePanel(false);
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 sm:p-3 items-center justify-between"
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
          className="h-10 sm:h-20"
        />
        <div className="ml-2 sm:ml-60 w-1/2">
          <h4 className="font-medium  text-base sm:text-xl">
            UberAuto
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium  text-sm sm:text-base">4 mins away</h5>
          <p className="font-normal text-xs  text-gray-600">
            Affordable auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold  sm:text-xl">193.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
