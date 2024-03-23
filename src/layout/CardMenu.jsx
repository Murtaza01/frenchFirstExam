import Hr from "./Hr";

export default function CardMenu({ title, children }) {
  return (
    <div className="flex-1 border-[1px] border-gray-300 shadow-md rounded-md h-max  basis-44">
      <h4 className="h-10  font-semibold center border-b-2 border-gray-300 bg-gray-100">
        {title}
      </h4>
      <ul className="h-full py-1 flex gap-[4px] flex-col  px-2 ">{children}</ul>
    </div>
  );
}
