import NavBar from "@/components/common/NavBar";
import CardTradeInSection from "@/components/sections/CardTradeInSection";
import CarouselSection from "@/components/sections/CarouselSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import IpadAirpodSection from "@/components/sections/IpadAirpodSection";
import IPhone15ProSection from "@/components/sections/IPhone15ProSection";
import IPhone15Section from "@/components/sections/IPhone15Section";
import WatchMacSection from "@/components/sections/WatchMacSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mt-[3.1rem] lg:mt-0">
        <HeroSection />
        <IPhone15ProSection />
        <IPhone15Section />
        <WatchMacSection />
        <IpadAirpodSection />
        <CardTradeInSection />
        <CarouselSection />
        <FooterSection />
      </div>
    </main>
  );
}
