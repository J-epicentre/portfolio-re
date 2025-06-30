import { AboutSection } from "@/components/intro/about/about-section/about-section";
import { GroundSection } from "@/components/intro/about/ground-section/ground-section";
import { MemberSection } from "@/components/intro/about/member-section/member-section";
import { PortfolioListSection } from "@/components/intro/about/portfolio-list-section/portfolio-list-section";
import { ScrollAnimationSection } from "@/components/intro/about/scroll-animation-section/scroll-animation-section";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <main className="block w-full">
        <AboutSection />
        <MemberSection />
        <div 
          className="w-full h-[500px]"
        />
        <ScrollAnimationSection />
        <GroundSection />
        <PortfolioListSection />
      </main>
    </div>
  );
};

export default AboutPage;
