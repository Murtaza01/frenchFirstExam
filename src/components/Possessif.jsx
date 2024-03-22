import React from "react";
import Gender from "./Gender";

export default function Possessif() {
  return (
    <div className="grid grid-cols-2 place-items-center my-5 capitalize">
      <Gender gender="masculin">
        <span>
          <b>mon</b> photo (صورتي)
        </span>
        <span>
          <b>ton</b> portable (هاتفك)
        </span>
        <span>
          <b>Son</b> numéro (رقمه)
        </span>
        <span>
          <b>Votre</b> photo (صورتكم / صورتك)
        </span>
      </Gender>
      <Gender gender="féminin">
        <span>
          <b>Ma</b> photo (صورتي)
        </span>
        <span>
          <b>Ta</b> portable (هاتفكي)
        </span>
        <span>
          <b>Sa</b> numéro (رقمها)
        </span>
        <span>
          <b>Vorte</b> photo (صورتكم / صورتك)
        </span>
      </Gender>
    </div>
  );
}
