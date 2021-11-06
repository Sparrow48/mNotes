import React from "react";
import { Fragment } from "react";
import Feature from "./Feature";
import featureImg from "../../image/feature.png";
import { Icon } from "@iconify/react";

function Features() {
  return (
    <Fragment>
      <div className="h-screen bg-indigo-800 pt-28 text-white text-center">
        <div>
          <h1 className="lg:text-4xl text-2xl font-bold">Features</h1>
          <p>
            <strong> mNotes</strong>
            is truly usable with great user experience, no matter who you are
            and what you do, you will be better organized!
          </p>
        </div>
        <div className="grid grid-cols-3 pt-24  ">
          <div className="p-10 ">
            <Feature
              icon={<Icon icon="bi:clock" color="white" width="22" />}
              title="A daily planner"
              details="Task lists are accessible anywhere, on any device."
            />
            <Feature
              icon={<Icon icon="bi:clock" color="white" width="22" />}
              title="A daily planner"
              details="Task lists are accessible anywhere, on any device."
            />
            <Feature
              icon={<Icon icon="bi:clock" color="white" width="22" />}
              title="A daily planner"
              details="Task lists are accessible anywhere, on any device."
            />
            <Feature
              icon={<Icon icon="bi:clock" color="white" width="22" />}
              title="A daily planner"
              details="Task lists are accessible anywhere, on any device."
            />
          </div>
          <div className=" content-center">
            <img src={featureImg} alt="Feature_img" />
          </div>
          <div>
            <Feature
              icon={<Icon icon="bi:clock" color="white" width="22" />}
              title="A daily planner"
              details="Task lists are accessible anywhere, on any device."
            />
            <Feature
              icon={<Icon icon="bi:clock" color="white" width="22" />}
              title="A daily planner"
              details="Task lists are accessible anywhere, on any device."
            />
            <Feature
              icon={<Icon icon="bi:clock" color="white" width="22" />}
              title="A daily planner"
              details="Task lists are accessible anywhere, on any device."
            />
            <Feature
              icon={<Icon icon="bi:clock" color="white" width="22" />}
              title="A daily planner"
              details="Task lists are accessible anywhere, on any device."
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Features;
