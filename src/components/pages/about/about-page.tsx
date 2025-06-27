import { AboutSection } from "@/components/intro/about/about-section/about-section";
import { GroundSection } from "@/components/intro/about/ground-section/ground-section";
import { MemberSection } from "@/components/intro/about/member-section/member-section";
import { PortfolioListSection } from "@/components/intro/about/portfolio-list-section/portfolio-list-section";
import { ScrollAnimationSection } from "@/components/intro/about/scroll-animation-section/scroll-animation-section";

const AboutPage = () => {
  return (
    <main>
      <AboutSection />
      <MemberSection />
      <div 
        className="w-full h-[500px]"
      />
      <ScrollAnimationSection />
      <GroundSection />
      <PortfolioListSection />
    </main>
  );
};

export default AboutPage;
