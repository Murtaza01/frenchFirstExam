import React from "react";

export default function Question({ children }) {
  return (
    <h3 className="text-center capitalize text-lg leading-5 font-semibold px-4 mb-5">
      Q/{children}
    </h3>
  );
}
