import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="bg-ui-bg text-white flex flex-col  space-y-7  items-center py-20">
      <div className="flex space-x-5">
        <a href="https://github.com/Sparrow48" target="_blank">
          <Icon icon="carbon:logo-github" color="white" width="45" />
        </a>
        <a href="" target="_blank">
          <Icon icon="ant-design:linkedin-filled" color="white" width="45" />
        </a>
        <a href="" target="_blank">
          <Icon icon="ic:baseline-facebook" color="white" width="45" />
        </a>
      </div>
      <div>
        <p>I would love to hear from you</p>
        <a className="pl-5" href="mailto:abunasib48@gmail.com">
          <strong>abunasib48@gmail.com</strong>
        </a>
      </div>
    </div>
  );
}

export default Footer;
