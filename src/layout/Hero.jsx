import eiffelTower from "../assets/images/eiffelTower.svg";

export default function Hero() {
  return (
    <div className="center py-10 ">
      <h1 className="text-3xl pl-4 heroFont">
        <span className="textEffect">French</span> First Exam Second Course
      </h1>
      <figure>
        <img src={eiffelTower} alt="" className="w-80" />
      </figure>
    </div>
  );
}
