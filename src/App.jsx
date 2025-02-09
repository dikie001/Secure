import Cloud from "./components/Cloud/Cloud";
import Data from "./components/Data/Data";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Hero />
      <Data/>
      <Cloud/>
      <Footer/>
    </>
  );
}

export default App;
