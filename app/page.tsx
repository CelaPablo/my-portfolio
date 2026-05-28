import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import ServiceSection from "@/components/Services";
import TechnicalSection from "@/components/Technical";
import ProjectSection from "@/components/Projects";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import FooterConsole from "@/components/FooterConsole";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <HeroSection />
        <ServiceSection />
        <TechnicalSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
      <div className="console-spacer" />
      <FooterConsole />
    </>
  );
}
