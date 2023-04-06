import React from "react";
import avatarWebber from "../assets/images/avatar-mark-webber.webp"

export default function Card() {
  return (
    <button className="flex items-start">
      <img src={avatarWebber} alt="user" className="w-11 h-11" />
      <div>
        <div className="flex bg-green-900">
          <span className="text-left whitespace-nowrap">mark webber</span>
          <span className="text-left whitespace-nowrap">reacted to your recent post</span>
          <span className="text-left whitespace-nowrap ">My first tournament today!</span>
        </div>
        <span>1m ago</span>
      </div>
    </button>
  );
}
