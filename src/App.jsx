import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import OtherServices from "./components/OtherService";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full overflow-hidden">
        <Header />
        <About />
        <Services />
        <OtherServices />
        <Clients />
        <Questions />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
