import HeroSection from "@/components/sections/HeroSection";
import MainSection from "@/components/sections/MainSection";
import Navbar from "@/components/sections/Navbar";
import SecondarySection from "@/components/sections/SecondarySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MainSection />
      <SecondarySection />
    </>
  );
}
