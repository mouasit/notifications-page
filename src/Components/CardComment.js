import React from "react";

export default function CardComment(props) {
  return (
    <button className="flex gap-3 items-start px-5 py-5 rounded-md">
      <img src={props.data.avatar} alt="user" className="w-11 h-11" />
      <span className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <p className="text-left text-darkGrayishBlue">
            <span className="capitalize font-bold text-veryDarkBlue mr-[.4rem] hover:text-blue">
              {props.data.username}
            </span>
            commented on your picture
          </p>
          <span className="text-grayishBlue text-sm">{props.data.time}</span>
        </div>
        <img
          src={props.data.avatarCommented}
          alt="user commented"
          className="w-11 h-11"
        />
      </span>
    </button>
  );
}
