import React from "react";

const LocationSearchPanel = (props) => {
  const addresses = [
    "123 Main Street, New York, NY 10001",
    "456 Elm Avenue, Los Angeles, CA 90012",
    "789 Oak Boulevard, Chicago, IL 60601",
    "101 Pine Lane, Miami, FL 33101",
    "202 Maple Drive, Seattle, WA 98101",
  ];
  return (
    <div>
      {addresses.map((elem,idx) => {
        return (
          <div key={idx} onClick={()=>{
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
          }} className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start">
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-2-line"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
