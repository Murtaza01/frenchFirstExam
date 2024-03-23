import React from "react";
import CardMenu from "../layout/CardMenu";
import { menuItems } from "../assets/data/data.js";

export default function Menu() {
  return (
    <div className=" flex-wrap px-2 flex gap-4 mb-10 ">
      {menuItems.map(({ title, items }) => {
        return (
          <CardMenu key={title} title={title}>
            {items.map(({ item, image }) => {
              return (
                <li
                  key={item}
                  className="flex last:border-none border-b-[1px] justify-between items-center"
                >
                  <span className="">{item}</span>
                  <img src={image} alt="" className="w-11" />
                </li>
              );
            })}
          </CardMenu>
        );
      })}
    </div>
  );
}
