import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import ServiceSection from "@/components/Services";
import ProjectSection from "@/components/Projects";
import TechnicalSection from "@/components/Technical";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <div className="flex flex-col">
          <HeroSection />
          <ServiceSection />
          <TechnicalSection />
          <ProjectSection />
          <ContactSection />
        </div>
    </main>
  );
}
