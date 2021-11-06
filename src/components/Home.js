import React from "react";
import HomeImg from "../image/home.png";
import { Icon } from "@iconify/react";

function Home() {
  return (
    <div className="grid sm:h-screen  p-10 md:pl-0 md:grid-cols-2 gap-16 items-center bg-blue-500 text-justify	">
      <div className=" text-white md:pl-24 lg:pl-48 xl:pl-72  ">
        <h1 className="lg:text-4xl text-2xl font-bold ">
          DAY PLANNER FOR <br /> PRODUCTIVE PERSON
        </h1>
        <p className="">
          <strong> mNotes </strong>
          is recommended for daily works which is best for managing different
          activities and tasks with different levels of priorities. It really
          helps you to focus on what really matters in your life.
        </p>
        <div className="m-2 mt-4">
          <button className=" bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full">
            <div className="flex flex-row gap-2 ">
              <Icon icon="logos:google-play-icon" width="20" />
              <p>Button</p>
            </div>
          </button>
        </div>
      </div>
      <div>
        <img src={HomeImg} alt="Mobile_Image"></img>
      </div>
    </div>
  );
}

export default Home;
