import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ValuesSection from "@/components/ValuesSection";
import BiomeSection from "@/components/BiomeSection";
import ProjectContextSection from "@/components/ProjectContextSection";
import MethodologySection from "@/components/MethodologySection";
import ResearchMethodologySection from "@/components/ResearchMethodologySection";
import MonitoringAreasSection from "@/components/MonitoringAreasSection";
import SpeciesGrid from "@/components/SpeciesGrid";
import RecentObservations from "@/components/RecentObservations";
import MapSection from "@/components/MapSection";
import TeamSection from "@/components/TeamSection";
import SocialIntegrationSection from "@/components/SocialIntegrationSection";
import DataDownloadSection from "@/components/DataDownloadSection";
import AnimationEffectsSection from "@/components/AnimationEffectsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimationEffectsSection />
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <div id="biome-section">
          <BiomeSection />
        </div>
        <div id="project-context">
          <ProjectContextSection />
        </div>
        <ValuesSection />
        <div id="research-methodology">
          <ResearchMethodologySection />
        </div>
        <MethodologySection />
        <MonitoringAreasSection />
        <SpeciesGrid />
        <RecentObservations />
        <MapSection id="map-section" />
        <div id="team-section">
          <TeamSection />
        </div>
        <div id="social-section">
          <SocialIntegrationSection />
        </div>
        <div id="data-section">
          <DataDownloadSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
