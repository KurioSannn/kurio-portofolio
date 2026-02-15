import Navbar from "./components/layout/navbar";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Commission from "./components/sections/commission";
import Portofolio from "./components/sections/porto";
import Order from "./components/sections/order";
import Footer from "./components/layout/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Commission />
      <Portofolio />
      <Order />
      <Footer />
    </>
  );
}

export default App;
