import bathroom from "../images/houseParts/bathroom.png";
import bedroom from "../images/houseParts/bedroom.png";
import door from "../images/houseParts/door.png";
import kitchen from "../images/houseParts/kitchen.png";
import livingRoom from "../images/houseParts/living-room.png";

// menuImages
import pie from "../images/menuItems/pie.png";
import salad from "../images/menuItems/salad.png";
import steak from "../images/menuItems/steak.png";
import water from "../images/menuItems/water.png";
import wine from "../images/menuItems/wine.png";
import fruitJuice from "../images/menuItems/fruitJuice.png";
import chicken from "../images/menuItems/chicken.png";
import chocolate from "../images/menuItems/chocolate.png";
import salamon from "../images/menuItems/salamon.png";
import snails from "../images/menuItems/snails.png";
import chickenSalad from "../images/menuItems/chickenSalad.png";

export const houseParts = [
  {
    part: "l'entrée",
    image: door,
  },
  {
    part: "la cuisine",
    image: kitchen,
  },

  {
    part: "la chambre",
    image: bedroom,
  },
  {
    part: "la salle de bains ",
    image: bathroom,
  },
  {
    part: "la salon",
    image: livingRoom,
  },
];

export const menuItems = [
  {
    title: "Entrées",
    items: [
      {
        item: "les escargots",
        image: snails,
      },
      {
        item: "le salade italienne",
        image: salad,
      },
      {
        item: " salade au poulet",
        image: chickenSalad,
      },
    ],
  },
  {
    title: "Boisson",
    items: [
      {
        item: "une carafe d'eau",
        image: water,
      },
      {
        item: "le vin",
        image: wine,
      },
      {
        item: "le jus de fruit",
        image: fruitJuice,
      },
    ],
  },
  {
    title: "Viandes",
    items: [
      {
        item: "le poulet basquaise",
        image: chicken,
      },
      {
        item: "le steak frites",
        image: steak,
      },
    ],
  },

  {
    title: "Dessert",

    items: [
      {
        item: "la tarte aux pommes",
        image: pie,
      },
      {
        item: "la mousse au chocolat",
        image: chocolate,
      },
    ],
  },
  {
    title: "Poisson",
    items: [
      {
        item: "le saumon",
        image: salamon,
      },
    ],
  },
];

export const prendre = [
  { sub: "ju", verb: "prend", addition: "s" },
  { sub: "tu", verb: "prend", addition: "s" },
  { sub: "il/elle/on", verb: "prend", addition: "" },
  { sub: "nous", verb: "prend", addition: "ons" },
  { sub: "vous", verb: "prend", addition: "ez" },
  { sub: "ils/elles", verb: "pren", addition: "nent" },
];
