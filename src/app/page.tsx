import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ClaritySpotlight } from "@/components/home/ClaritySpotlight";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col pb-12 lg:pb-0">
        <Hero />
        <AboutSection />
        <FeaturedWork />
        <ClaritySpotlight />
      </main>
      <Footer />
    </>
  );
}
