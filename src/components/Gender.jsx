export default function Gender({ gender, children, image }) {
  return (
    <div className="flex-1 bg-white py-4 text-center rounded-md  shadow-md  shadow-black/50 ">
      <div className="center  flex-col gap-2 py-2   ">
        <img
          src={image}
          alt=""
          className="w-20 border-[1px] border-black rounded-full"
        />
        <h4 className="text-lg font-semibold">{gender}</h4>
      </div>
      <hr className="w-[85%] border-[1px] rounded-md border-black mx-auto  " />
      <ul className="flex flex-col  py-3 gap-3">{children}</ul>
    </div>
  );
}
