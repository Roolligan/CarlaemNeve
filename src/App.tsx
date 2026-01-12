import "./styles/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Steps from "./components/Steps";
import MenuSection from "./components/MenuSection";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Steps />
        <MenuSection />
        <Events />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
