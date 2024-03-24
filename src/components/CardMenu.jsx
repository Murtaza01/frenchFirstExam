export default function CardMenu({ title, children }) {
  return (
    <div className=" bg-white rounded-lg  shadow-black/40 shadow-md  h-max flex-1 basis-40 xs:basis-42">
      <h4 className="h-10  font-semibold center border-b-[1px] border-gray-400 bg-gray-200 ">
        {title}
      </h4>
      <ul className="h-full py-1 flex gap-[4px] flex-col  px-2 ">{children}</ul>
    </div>
  );
}
