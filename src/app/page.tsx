import SectionDivider from "@/components/section-div";
import CareerSection from "@/sections/CareerSection";
import HomeSection from "@/sections/HomeSection";
import SkillsSection from "@/sections/SkillsSection";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <HomeSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <CareerSection />
      <SectionDivider />
    </div>
  );
}
