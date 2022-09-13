import NavigationBar from "./components/NavigationBar";
import HeroBlock from "./components/HeroBlock";
import Cards from "./components/Cards";
import FooterBlock from "./components/FooterBlock";
import 'normalize.css';

function App() { 
  return (
    <>
      <NavigationBar />
      <HeroBlock />
      <Cards />
      <hr/>
      <FooterBlock />
    </>
  );
}

export default App;
