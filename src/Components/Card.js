import React from "react";

export default function Card(props) {
  return (
    <button
      className={`flex gap-3 items-start px-5 py-5 rounded-md ${
        props.data.latest ? "bg-veryLightGrayishBlue" : ""
      }`}
    >
      <img src={props.data.avatar} alt="user" className="w-11 h-11" />
      <span className="flex flex-col items-start">
        <span className="text-left text-darkGrayishBlue">
          <span className="capitalize font-bold text-veryDarkBlue mr-[.4rem] hover:text-blue">
            {props.data.username}
          </span>
          {props.data.type === "reaction"
            ? "reacted to your recent post"
            : props.data.type === "follow"
            ? "followed you"
            : props.data.type === "join"
            ? "has joined your group"
            : props.data.type === "sent"
            ? "sent you a private message"
            : props.data.type === "left"
            ? "left the group"
            : null}
          {props.data.post ? (
            <span className="text-darkGrayishBlue font-bold ml-[.4rem] hover:text-blue">
              {props.data.post}
            </span>
          ) : props.data.group ? (
            <span className="text-blue font-bold ml-[.4rem]">
              {props.data.group}
            </span>
          ) : null}
          {props.data.latest ? (
            <i className="w-2.5 h-2.5 bg-red inline-block  ml-[.4rem] rounded-full"></i>
          ) : null}
        </span>
        <span className="text-grayishBlue text-sm">{props.data.time}</span>
        {props.data.message ? (
          <p className=" mt-4 text-left text-darkGrayishBlue border-[1px] border-lightGrayishBlueTwo p-5 rounded-md hover:bg-lightGrayishBlueTwo">
            {props.data.message}
          </p>
        ) : null}
      </span>
    </button>
  );
}
