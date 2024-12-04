import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import OtherServices from "./components/OtherService";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./Pages/Gallery";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <Router>
      <div className="w-full overflow-hidden">
        <Navbar />
        <WhatsAppButton />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Services />
                <OtherServices />

                <Questions />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
