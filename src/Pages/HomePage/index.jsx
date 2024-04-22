import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import Intro from "../../Components/Intro";
import Projects from "../../Components/Projects";
import Skills from "../../Components/Skills";
import Footer from "../../Components/Footer";

function Home() {
  return (
    <div>
      <div className="p-[1rem]">
        <Navbar></Navbar>
        <Intro></Intro>
        <Hero></Hero>
        <Skills></Skills>
        <Projects></Projects>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
