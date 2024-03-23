import { prendre } from "../assets/data/data.js";

export default function Prendre() {
  return (
    <div className="stickyNote before:stickyNoteBefore  after:stickyNoteAfter   ">
      <ul className=" text-lg center flex-col gap-2">
        {prendre.map(({ sub, verb, addition }) => {
          return (
            <li key={sub}>
              {sub} + {verb}
              <span className="text-red-500 font-semibold">
                {addition}
              </span>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
