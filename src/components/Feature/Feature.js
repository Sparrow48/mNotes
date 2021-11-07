import React from "react";

function Feature(props) {
  return (
    <div>
      {props.side ? (
        <div className="flex space-x-2">
          <div className=" text-right pb-16 ">
            <h1 className="text-2xl">{props.title}</h1>
            <p>{props.details}</p>
          </div>
          <div>
            <div className="bg-pink-600  p-3 w-12 rounded-fully rounded-full ">
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
