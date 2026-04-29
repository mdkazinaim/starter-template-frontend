import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CliSection } from "@/components/sections/CliSection";
import { Features } from "@/components/sections/Features";
import { Architecture } from "@/components/sections/Architecture";
import { Workflow } from "@/components/sections/Workflow";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <div className="w-full bg-bg-primary-bg overflow-hidden selection:bg-text-brand-primary/30">
      <Navbar />

      <main className="relative w-full">
        {/* Ambient Background Effects - Global to main to cover all sections */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-text-brand-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] bg-text-brand-secondary/10 rounded-full blur-[150px]"></div>
          <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-tertiary/10 rounded-full blur-[100px]"></div>
        </div>

        <Hero />
        <CliSection id="cli" />
        <Features id="features" />
        <Workflow id="workflow" />
        <Architecture id="architecture" />
        <Cta id="cta" />
      </main>

      <Footer />
    </div>
  );
}
