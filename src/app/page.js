import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
