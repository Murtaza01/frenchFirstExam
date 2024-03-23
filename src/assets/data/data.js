import bathroom from "../images/houseParts/bathroom.png";
import bedroom from "../images/houseParts/bedroom.png";
import door from "../images/houseParts/door.png";
import kitchen from "../images/houseParts/kitchen.png";
import livingRoom from "../images/houseParts/living-room.png";

// menuImages
import pie from "../images/menuItems/pie.png";
import salad from "../images/menuItems/salad.png";
import steak from "../images/menuItems/steak.png";

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
        item: "les escargots ",
        image: salad,
      },
      {
        item: "le salade italienne",
        image: salad,
      },
      {
        item: "le salade fruités",
        image: salad,
      },
    ],
  },
  {
    title: "Boisson",
    items: [
      {
        item: "une carafe d'eau",
        image: salad,
      },
      {
        item: "le vin",
        image: salad,
      },
      {
        item: "le jus de fruit",
        image: salad,
      },
    ],
  },
  {
    title: "Viandes",
    items: [
      {
        item: "le poulet basquaise",
        image: salad,
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
        image: salad,
      },
    ],
  },
  {
    title: "Poisson",
    items: [
      {
        item: "le saumon",
        image: salad,
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
