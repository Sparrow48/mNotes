import React from "react";

function Feature(props) {
  return (
    <div>
      {props.side ? (
        <div className="flex  justify-end lg:space-x-2">
          <div className=" text-left lg:text-right  pb-16 ">
            <h1 className="text-2xl">{props.title}</h1>
            <p>{props.details}</p>
          </div>
          <div className="order-first lg:order-last pl-10 lg:pl-0">
            <div className="  bg-blue-600   p-3 w-12 rounded-fully rounded-full ">
              {props.icon}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-5">
          <div>
            <div className="bg-blue-600  p-3 w-12 rounded-fully rounded-full ">
              {props.icon}
            </div>
          </div>
          <div className=" pb-16 ">
            <h1 className="text-2xl">{props.title}</h1>
            <p>{props.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feature;
