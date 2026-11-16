import AboutSection from "@/sections/AboutSection";
import CareerSection from "@/sections/CareerSection";
import ContactSection from "@/sections/ContactSection";
import EducationSection from "@/sections/EducationSection";
import HomeSection from "@/sections/HomeSection";
import SkillsSection from "@/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <CareerSection />
      {/* <ProjectsSection /> disembunyikan dulu, tinggal aktifkan lagi */}
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
