import React from "react";
import Header from "./Header";
import Card from "./Card";
import CardComment from "./CardComment";
import data from "../data";

export default function Notifications() {
  return (
    <main className="flex flex-col gap-8 py-5 px-3 md:shadow-lg md:rounded-2xl md:py-8 md:px-8 md:my-8 bg-white max-w-[740px]">
      <Header />
      <div className="flex flex-col gap-4">
        {data.map((e, index) => {
          if (e.type === "comment") return <CardComment data={e} key={index} />;
          else return <Card data={e} key={index} />;
        })}
      </div>
    </main>
  );
}
