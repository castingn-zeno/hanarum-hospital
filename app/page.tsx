import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Departments from "./components/Departments";
import Doctors from "./components/Doctors";
import Facilities from "./components/Facilities";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Departments />
        <Doctors />
        <Facilities />
        <Reviews />
        <CTA />
        <Location />
      </main>
      <Footer />
    </>
  );
}
