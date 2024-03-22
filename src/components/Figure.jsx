import React from "react";

export default function Figure({ img }) {
  return (
    <figure className="my-3">
      <img src={img} className="mx-auto w-[90%]" alt="" />
    </figure>
  );
}
