import CareerCard from "@/components/career/CareerCard";
import { SectionHeading } from "@/components/Reveal";
import { careerList } from "@/lib/career-data";

export default function CareerSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeading title="Experience" note="Click a role to see the details" />
      <div className="relative">
        {/* garis timeline */}
        <span aria-hidden className="absolute bottom-4 left-[5px] top-4 w-px bg-border sm:left-[194px]" />
        <div className="flex flex-col gap-8">
          {careerList.map((item, idx) => (
            <CareerCard key={item.id} {...item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
