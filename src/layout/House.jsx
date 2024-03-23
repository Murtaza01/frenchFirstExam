import { houseParts } from "../assets/data/data";

export default function House() {
  return (
    <div className="mb-5 ">
      <ul className="flex flex-wrap   justify-center gap-4 ">
        {houseParts.map(({ part, image }) => {
          return (
            <li
              key={part}
              className="center flex-1  py-3 basis-40 gap-2 flex-col-reverse"
            >
              <span className="text-xl ">{part}</span>
              <img src={image} alt="" className="w-20" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
