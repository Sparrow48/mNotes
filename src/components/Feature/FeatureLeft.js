import React from "react";

function FeatureLeft(props) {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="text-right pb-16 col-span-11">
        <h1 className="text-2xl">{props.title}</h1>
        <p>{props.details}</p>
      </div>
      <div>
        <div className="bg-pink-600 mt-5 p-3 w-12 rounded-fully rounded-full ">
          {props.icon}
        </div>
      </div>
    </div>
  );
}

export default FeatureLeft;

// import React from "react";

// function Feature(props) {
//   return (
//     <div className="grid grid-cols-4 gap-2">
//       <div className="text-right pb-10 col-span-3">
//         <h1 className="text-2xl">{props.title}</h1>
//         <p>{props.details}</p>
//       </div>
//       <div>
//         <div className="bg-pink-600 mt-5 p-3 w-12 rounded-fully rounded-full ">
//           {props.icon}
//         </div>
//         <div></div>
//       </div>
//       <div></div>
//       <div></div>
//     </div>
//   );
// }

// export default Feature;
