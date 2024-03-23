export default function CardMenu({ title, children }) {
  return (
    <div className="flex-1 rounded-lg  shadow-black/40 shadow-md  h-max  basis-44">
      <h4 className="h-10  font-semibold center border-b-[1px] border-gray-400 bg-white ">
        {title}
      </h4>
      <ul className="h-full py-1 flex gap-[4px] flex-col  px-2 ">{children}</ul>
    </div>
  );
}
