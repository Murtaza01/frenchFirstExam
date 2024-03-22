import React from "react";
import Hr from "./Hr";

export default function Item({ section, children }) {
  return (
    <div className="text-center flex-1   basis-40">
      <h4 className=" font-semibold ">{section}</h4>
      <Hr />
      <ul className="center flex-col capitalize">{children}</ul>
    </div>
  );
}
