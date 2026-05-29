import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import ServiceSection from "@/components/Services";
import TechnicalSection from "@/components/Technical";
import ProjectSection from "@/components/Projects";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServiceSection />
        <TechnicalSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
