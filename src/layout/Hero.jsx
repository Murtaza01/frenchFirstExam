import eiffelTower from "../assets/images/eiffelTower.svg";

export default function Hero() {
  return (
    <div className="center py-10 ">
      <h1 className="text-2xl pl-4">French First Exam / Second Course</h1>
      <figure>
        <img src={eiffelTower} alt="" className="w-72" />
      </figure>
    </div>
  );
}
