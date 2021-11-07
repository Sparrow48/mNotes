import React from "react";

function FeatureRight(props) {
  return (
    <div className="grid grid-cols-12 gap-2 pl-10">
      <div>
        <div className="bg-pink-600 mt-5 p-3 w-12 rounded-full ">
          {props.icon}
        </div>
      </div>
      <div className="pb-16 col-span-11">
        <h1 className="text-2xl">{props.title}</h1>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default FeatureRight;
