import Heading from "./components/Heading";
import menu from "./assets/menu.jpg";
import house from "./assets/house.webp";
import Menu from "./components/Menu";
import Figure from "./components/Figure";
import Question from "./components/Question";
import House from "./components/House";
import Possessif from "./components/Possessif";
import Conjugaison from "./components/Conjugaison";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center my-10">
        French First Exam / Second Course
      </h1>
      <Heading>Le Menu</Heading>
      <Figure img={menu} />
      <Question>
        Écrivez le menu du restaurant: proposez 3 entrées, 2 viandes, 1 poisson,
        2 desserts et 3 boissons. donnez les prix du menu
      </Question>
      <Menu />
      <Heading>parties de la maison</Heading>
      <Figure img={house} />
      <Question>Écrivez les parties de la maison</Question>
      <House />
      <Heading>l'adjectif possessif au singulier</Heading>
      <Possessif />
      <Heading>prendre au présent</Heading>
      <div className="my-5"></div>
      <Question>conjugaison d'un verbe (prendre) / صرف الفعل</Question>
      <Conjugaison />
    </>
  );
}

export default App;
