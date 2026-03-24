import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TrustSection from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <FeaturedProjects />
      <TrustSection />
    </>
  );
}
