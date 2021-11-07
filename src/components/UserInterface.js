import React from "react";

import UI from "../image/ui.png";

function UserInterface() {
  return (
    <div className="flex flex-col justify-center w-full px-10 py-24 text-white lg:space-x-24 lg:flex-row bg-ui-bg">
      <div>
        <img src={UI} alt="User_Interface" />
      </div>
      <div className="pt-10 space-y-5 lg:space-y-10 ">
        <h1 className="text-4xl ">USER FRIENDLY UI</h1>
        <p>
          You can create notes and keep track of your ideas & plans. Enter your
          notes with different colors and designs.
        </p>
        <button className="px-6 py-2 font-bold bg-green-300 rounded-full hover:bg-green-700 text-indigo-bg">
          Read More
        </button>
      </div>
    </div>
  );
}

export default UserInterface;
