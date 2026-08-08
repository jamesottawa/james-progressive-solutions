import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { StatsRow } from "@/components/home/StatsRow";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col pb-12 lg:pb-0">
        <Hero />
        <div className="hidden lg:block [@media(max-height:750px)]:lg:hidden">
          <StatsRow />
        </div>
      </main>
    </>
  );
}
