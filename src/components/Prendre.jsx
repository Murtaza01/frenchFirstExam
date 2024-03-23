import { prendre } from "../assets/data/data.js";

export default function Prendre() {
  return (
    <div className="py-2">
      <ul className=" text-lg  center flex-col gap-2">
        {prendre.map(({ sub, verb, addition }) => {
          return (
            <li key={sub}>
              {sub} + {verb}
              <span>{addition}</span>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
