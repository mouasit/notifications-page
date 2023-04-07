import React from "react";
import Header from "./Header";
import Card from "./Card";
import CardComment from "./CardComment";
import data from "../data";

export default function Notifications() {
  return (
    <main className="flex flex-col gap-5 py-5 px-3">
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
