import React from "react";

export default function Header() {
  return (
    <div className="flex items-center mx-3 md:mx-8 justify-between">
      <div className="flex items-start gap-3">
        <span className="font-extrabold text-veryDarkBlue text-2xl capitalize">
          notifications
        </span>
        <span className="bg-blue text-white font-bold px-4 py-1 rounded-md">
          3
        </span>
      </div>
      <button className="font-bold text-sm text-grayishBlue hover:text-blue">
        Mark all as read
      </button>
    </div>
  );
}
