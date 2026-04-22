import HomeHeroSlider from "../components/blocks/HomeHeroSlider";
import CTAQuick from "../components/blocks/CTAQuick";
import WhyChoose from "../components/blocks/WhyChoose";
import ServicesGrid from "../components/blocks/ServicesGrid";
import LatestPosts from "../components/blocks/LatestPosts";
import PartnersSection from "../components/blocks/PartnersSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeHeroSlider />
      <CTAQuick />
      <WhyChoose />
      <ServicesGrid />
      <LatestPosts />
      <PartnersSection />
    </div>
  );
}
