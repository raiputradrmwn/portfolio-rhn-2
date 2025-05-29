
import Image from "next/image";
import { motion } from "framer-motion";

export function ProfileImage() {
  return (
    <div className="relative inline-block">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.1,
          duration: 0.7,
        }}
      >
        <div className="w-full h-full sm:w-[220px] sm:h-[220px] md: w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full border-4 border-white shadow-xl flex items-center justify-center bg-white">
          <Image
            src="/images/profile.jpg"
            alt="Raihan Putra's Profile Picture"
            width={220}
            height={220}
            className="w-full h-full rounded-full object-cover"
            priority
          />
        </div>
      <div className="absolute top-40 right-[-30px] bg-white rounded-md px-2 shadow-lg flex items-center gap-2 text-sm font-medium">
        <span>Its me Raput</span>
        <span className="text-2xl">👋</span>
      </div>
      </motion.div>
    </div>
  );
}
