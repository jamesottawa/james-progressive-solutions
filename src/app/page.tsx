import { Header } from "@/components/layout/Header";
import { Hero, HeroMobile } from "@/components/hero/Hero";
import { ProjectGrid } from "@/components/home/ProjectGrid";
import { Testimonial } from "@/components/home/Testimonial";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col pb-12 lg:pb-0">
        <Hero />
        <HeroMobile />
        <ProjectGrid />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
