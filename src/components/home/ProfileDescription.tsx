// components/profile/ProfileDescription.tsx
import { motion } from "framer-motion";

export function ProfileDescription() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
        >
            <p className="mt-8 sm:text-sm md:text-md lg:text-lg text-center max-w-3xl mx-auto text-neutral-800 font-normal leading-relaxed mb-24">
                Final-year Telecommunication Engineering student with a strong passion for crafting innovative digital experiences. Skilled in modern web and mobile application development, as well as artificial intelligence technologies. Committed to leveraging cutting-edge tools and methodologies to solve real-world problems, optimize user engagement, and deliver scalable solutions in a fast-paced technological landscape.
            </p>

        </motion.div>
    );
}
