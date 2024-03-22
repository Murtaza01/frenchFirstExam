import { FaArrowRightLong } from "react-icons/fa6";
export default function House() {
  return (
    <div className="mb-5 ">
      <ul className="flex flex-wrap capitalize  justify-center gap-8 identifier">
        <li>
          l'entrée <FaArrowRightLong className="icon" /> <span>المدخل</span>
        </li>
        <li>
          la cuisine <FaArrowRightLong className="icon" />
          <span>المطبخ</span>
        </li>
        <li>
          la salle de bains <FaArrowRightLong className="icon" />{" "}
          <span>حمام</span>
        </li>
        <li>
          la chambre <FaArrowRightLong className="icon" />
          <span>غرفة النوم</span>
        </li>
        <li>
          la salon <FaArrowRightLong className="icon" />
          <span>غرفة المعيشة</span>
        </li>
      </ul>
    </div>
  );
}
