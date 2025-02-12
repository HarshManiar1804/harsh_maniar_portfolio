import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
