import React from "react";
import Item from "./Item";

export default function Menu() {
  return (
    <div className="px-3 flex-wrap flex gap-5 mb-5">
      <Item section="Entrées / مقبلات">
        <li>les escargots</li>
        <span>(القواقع)</span>
        <li>le salade italienne</li>
        <span>(سلطة ايطالية)</span>
        <li>le salade fruités</li>
        <span>(سلطة الفواكه)</span>
      </Item>
      <Item section="Boisson / شراب">
        <li>une carafe d'eau</li>
        <span>( قدح من الماء)</span>
        <li>le vin</li>
        <span>(شراب التفاح)</span>
        <li>le jus de fruit</li>
        <span>(عصير الفواكه)</span>
      </Item>
      <Item section="Viandes / لحوم">
        <li>le poulet basquaise</li>
        <span>(دجاج مشوي)</span>
        <li>le steak frites</li>
        <span>(شريحة لحم و رقائق)</span>
      </Item>
      <Item section="Poisson / سمك">
        <li>le saumon</li>
        <span>( سلمون)</span>
      </Item>
      <Item section="Dessert / حلوى">
        <li>la tarte aux pommes</li>
        <span>(فطيرة التفاح )</span>
        <li> la mousse au chocolat</li>
        <span>(قدح شوكولاته)</span>
      </Item>
    </div>
  );
}
