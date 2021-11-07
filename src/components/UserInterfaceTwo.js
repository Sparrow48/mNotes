import React from "react";
import UI2 from "../image/ui2.png";

function UserInterfaceTwo() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-10 py-24 text-white lg:space-x-14 lg:flex-row bg-home-bg">
      <div className="flex flex-col items-center space-y-5 lg:space-y-10">
        <h1 className="text-2xl font-bold ">
          Change your habits, achieve your goals, track your progress for a
          better life.
        </h1>
        <button className="px-6 py-2 font-bold bg-green-300 rounded-full hover:bg-green-700 text-indigo-bg">
          For Android
        </button>
      </div>
      <div className="pt-10 lg:w-2/6">
        <img src={UI2} alt="User_Interface" />
      </div>
    </div>
  );
}

export default UserInterfaceTwo;
