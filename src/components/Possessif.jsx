import React from "react";
import Gender from "../layout/Gender";
import masculin from "../assets/images/man.png";
import feminin from "../assets/images/woman.png";

export default function Possessif() {
  return (
    <div className=" flex gap-5 px-3 my-10  capitalize">
      <Gender gender="masculin" image={masculin}>
        <li>
          <b>mon</b> photo (صورتي)
        </li>
        <li>
          <b>ton</b> portable (هاتفك)
        </li>
        <li>
          <b>Son</b> numéro (رقمه)
        </li>
        <li>
          <b>Votre</b> photo (صورتكم)
        </li>
      </Gender>
      <Gender gender="féminin" image={feminin}>
        <li>
          <b>Ma</b> photo (صورتي)
        </li>
        <li>
          <b>Ta</b> portable (هاتفكي)
        </li>
        <li>
          <b>Sa</b> numéro (رقمها)
        </li>
        <li>
          <b>Vorte</b> photo (صورتكم)
        </li>
      </Gender>
    </div>
  );
}
