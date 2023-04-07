import React from "react";
import Header from "./Header";
import CardLatests from "./CardLatests";
import data from "../data";

export default function Notifications() {
  return (
    <main className="flex flex-col gap-5 py-5 px-3">
      <Header />
      <div className="flex flex-col gap-4">
        {data.map((e,index) => {
          return <CardLatests data={e} key={index}/>;
        })}
      </div>
    </main>
  );
}
