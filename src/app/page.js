import ExperienceAccordion from "@/components/portfolio/ExperienceAccordion";
import PortfolioSections from "@/components/portfolio/PortfolioSections";
import SectionDock from "@/components/portfolio/SectionDock";
import SiteHeader from "@/components/portfolio/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <PortfolioSections experience={<ExperienceAccordion />} />
      </main>
      <SectionDock />
    </>
  );
}
