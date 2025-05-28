'use client';
import CareerCard from "@/components/career/CareerCard";
import { careerList } from "@/lib/career-data";


export default function CareerSection() {
    return (
        <section id="career" className="py-16 mb-28 sm:mb-0 scroll-mt-[150rem]">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
            <div className="flex flex-col gap-7 max-w-3xl mx-auto">
                {careerList.map((item, idx) => (
                    <CareerCard
                        key={item.id}
                        {...item}
                        isLast={idx === careerList.length - 1} // biar garis vertikal gak muncul di item terakhir
                    />
                ))}
            </div>
        </section>
    );
}
