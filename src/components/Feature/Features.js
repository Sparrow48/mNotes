import React from "react";
import { Fragment } from "react";
import Feature from "./Feature";

import featureImg from "../../image/feature.png";
import { Icon } from "@iconify/react";

function Features() {
  return (
    <Fragment>
      <div className="w-full py-24 px-10 text-center text-white bg-feature-bg">
        <div>
          <h1 className="text-2xl font-bold lg:text-4xl">Features</h1>
          <p>
            <strong> mNotes</strong>
            is truly usable with great user experience, no matter who you are
            and what you do, you will be better organized!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center pt-20 space-x-10 lg:flex-row">
          <div className="">
            <Feature
              side={true}
              icon={<Icon icon="bi:clock" color="white" width="22" />}
              title="A daily planner"
              details="Task lists are accessible anywhere, on any device."
            />
            <Feature
              side={true}
              icon={<Icon icon="bi:card-image" color="white" width="22" />}
              title="Image & Website"
              details="You can attach images and add URLs to any notes."
            />

            <Feature
              side={true}
              icon={
                <Icon
                  icon="ic:baseline-priority-high"
                  color="white"
                  width="22"
                />
              }
              title="Priorities"
              details="Prioritize your tasks according to their importance."
            />
            <Feature
              side={true}
              icon={<Icon icon="gg:notes" color="white" width="22" />}
              title="Colorfull notes"
              details="Organize notes into different images and colors."
            />
          </div>
          <div className="content-center ">
            <img src={featureImg} alt="Feature_img" />
          </div>
          <div className="text-left pt-10 lg:pt-0">
            <Feature
              side={false}
              icon={
                <Icon
                  icon="fluent:clipboard-task-list-rtl-20-regular"
                  color="white"
                  width="22"
                />
              }
              title="Task details"
              details="Take all the details to add to any task."
            />

            <Feature
              side={false}
              icon={
                <Icon icon="fa-solid:user-friends" color="white" width="22" />
              }
              title="User friendly"
              details="User-friendly task management."
            />
            <Feature
              side={false}
              icon={
                <Icon icon="fa-solid:search-plus" color="white" width="22" />
              }
              title="Search"
              details="A quick search helps to find out a particular task."
            />
            <Feature
              side={false}
              icon={
                <Icon icon="carbon:cloud-offline" color="white" width="22" />
              }
              title="Offline"
              details="Use can use this app offline."
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Features;

//------------------------------------------------Extra code-----------------------------------------------------------------//

// import FeatureLeft from "./FeatureLeft";
// import FeatureRight from "./FeatureRight";

// function Features() {
//   return (
//     <Fragment>
//       <div className="h-screen text-center text-white bg-indigo-800 pt-28">
//         <div>
//           <h1 className="text-2xl font-bold lg:text-4xl">Features</h1>
//           <p>
//             <strong> mNotes</strong>
//             is truly usable with great user experience, no matter who you are
//             and what you do, you will be better organized!
//           </p>
//         </div>
//         <div className="flex py-24 justify-items-center ">
//           <div className="px-10 ">
//             <FeatureLeft
//               icon={<Icon icon="bi:clock" color="white" width="22" />}
//               title="A daily planner"
//               details="Task lists are accessible anywhere, on any device."
//             />
//             <FeatureLeft
//               icon={<Icon icon="bi:clock" color="white" width="22" />}
//               title="A daily planner"
//               details="Task lists are accessible anywhere, on any device."
//             />
//             <FeatureLeft
//               icon={<Icon icon="bi:clock" color="white" width="22" />}
//               title="A daily planner"
//               details="Task lists are accessible anywhere, on any device."
//             />
//             <FeatureLeft
//               icon={<Icon icon="bi:clock" color="white" width="22" />}
//               title="A daily planner"
//               details="Task lists are accessible anywhere, on any device."
//             />
//           </div>
//           <div className="content-center ">
//             <img src={featureImg} alt="Feature_img" />
//           </div>
//           <div>
//             <FeatureRight
//               icon={<Icon icon="bi:clock" color="white" width="22" />}
//               title="A daily planner"
//               details="Task lists are accessible anywhere, on any device."
//             />
//             <FeatureRight
//               icon={<Icon icon="bi:clock" color="white" width="22" />}
//               title="A daily planner"
//               details="Task lists are accessible anywhere, on any device."
//             />
//             <FeatureRight
//               icon={<Icon icon="bi:clock" color="white" width="22" />}
//               title="A daily planner"
//               details="Task lists are accessible anywhere, on any device."
//             />
//             <FeatureRight
//               icon={<Icon icon="bi:clock" color="white" width="22" />}
//               title="A daily planner"
//               details="Task lists are accessible anywhere, on any device."
//             />
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// }
