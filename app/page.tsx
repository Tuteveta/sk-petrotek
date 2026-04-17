import Hero from "@/components/home/Hero";
import HighlightStrip from "@/components/home/HighlightStrip";
import StatsBar from "@/components/home/StatsBar";
import LiveMetrics from "@/components/home/LiveMetrics";
import ServicesOverview from "@/components/home/ServicesOverview";
import NewsSection from "@/components/home/NewsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TrustSection from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HighlightStrip />
      <StatsBar />
      <LiveMetrics />
      <ServicesOverview />
      <NewsSection />
      <FeaturedProjects />
      <TrustSection />
    </>
  );
}
