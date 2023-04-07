import React from "react";

export default function CardLatests(props) {
  return (
    <button className="flex gap-3 items-start px-5 py-5 bg-veryLightGrayishBlue">
      <img src={props.data.avatar} alt="user" className="w-11 h-11" />
      <div className="flex flex-col items-start">
        <p className="text-left text-grayishBlue">
          <font className="capitalize font-bold text-veryDarkBlue mr-[.4rem]">
            {props.data.username}
          </font>
          {props.data.type === "reaction"
            ? "reacted to your recent post"
            : props.data.type === "follow"
            ? "followed you"
            : props.data.type === "join"
            ? "has joined your group"
            : null}
          {props.data.post ? (
            <font className="text-darkGrayishBlue font-bold ml-[.4rem]">
              {props.data.post}
            </font>
          ) : props.data.group ? (
            <font className="text-blue font-bold ml-[.4rem]">
              {props.data.group}
            </font>
          ) : null}
          {props.data.active ? (
            <i className="w-2.5 h-2.5 bg-red inline-block  ml-[.4rem] rounded-full"></i>
          ) : null}
        </p>
        <span className="text-grayishBlue text-sm">{props.data.time}</span>
      </div>
    </button>
  );
}
