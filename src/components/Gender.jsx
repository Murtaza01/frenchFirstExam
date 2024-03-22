import Hr from "./Hr";

export default function Gender({ gender, children }) {
  return (
    <div className="text-center">
      <h4 className=" text-lg font-semibold">{gender}</h4>
      <Hr />
      <p className="flex flex-col gap-2">{children}</p>
    </div>
  );
}
