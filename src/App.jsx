import Heading from "./components/Heading";
import Menu from "./layout/Menu";
import Question from "./components/Question";
import House from "./layout/House";
import Possessif from "./layout/Possessif";
import Prendre from "./layout/Prendre";
import Footer from "./layout/Footer";
import Hero from "./layout/Hero";

function App() {
  return (
    <>
      <Hero />
      <Heading>Le Menu</Heading>
      <Question>
        Écrivez le menu du restaurant: proposez 3 entrées, 2 viandes, 1 poisson,
        2 desserts et 3 boissons. donnez les prix du menu
      </Question>
      <Menu />
      <Heading>parties de la maison</Heading>
      <Question>Écrivez les parties de la maison</Question>
      <House />
      <Heading>l'adjectif possessif au singulier</Heading>
      <Possessif />
      <Heading>prendre au présent</Heading>
      <div className="my-5"></div>
      <Question>conjugaison d'un verbe (prendre)</Question>
      <Prendre />
      <Footer />
    </>
  );
}

export default App;
