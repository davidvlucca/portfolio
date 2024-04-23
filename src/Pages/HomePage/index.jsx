import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import Intro from "../../Components/Intro";
import ProjectsMobile from "../../Components/ProjectsMobile";
import Skills from "../../Components/Skills";
import Footer from "../../Components/Footer";
import ProjectsDesktop from "../../Components/ProjectsDesktop";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Hero></Hero>
      <ProjectsMobile></ProjectsMobile>
      <ProjectsDesktop></ProjectsDesktop>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default Home;
