import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TokenStats from "@/components/TokenStats";
import MiningStats from "@/components/MiningStats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TokenStats />
        <MiningStats />
      </main>

      <Footer />
    </>
  );
}
