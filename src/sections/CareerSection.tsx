'use client';
import CareerCard from "@/components/career/CareerCard";
import { careerList } from "@/lib/career-data";
import { motion } from "framer-motion";


export default function CareerSection() {
    return (
        <section id="career" className="py-16 mb-28 sm:mb-0 scroll-mt-[150rem]">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
            >
                <h2 className="text-2xl font-bold  text-center">Experience</h2>
                <div className="flex flex-col gap-7 max-w-3xl mx-auto">
                    {careerList.map((item, idx) => (
                        <CareerCard
                            key={item.id}
                            {...item}
                            isLast={idx === careerList.length - 1} // biar garis vertikal gak muncul di item terakhir
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
