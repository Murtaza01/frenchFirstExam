import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="center  h-28 flex-col gap-5  bg-black text-white">
      <div className=" ">
        <ul className=" center gap-4 text-3xl">
          <li>
            <a
              href="https://www.instagram.com/murtaza_alkabie/"
              target={"_blank"}
              className="text-red-400 hover:brightness-50"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/murtaza_alkabie"
              target={"_blank"}
              className="text-sky-500 hover:brightness-50"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Murtaza01"
              target={"_blank"}
              className="text-slate-500 hover:brightness-50"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-lg capitalize">
        all copyRights @ goes to{" "}
        <span className="secondaryFont text-xl font-semibold italic text-[#536DFE] ">
          Birdman.
        </span>{" "}
      </p>
    </footer>
  );
}
