// components/profile/ProfileDescription.tsx
import { motion } from "framer-motion";

export function ProfileDescription() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
        >
            <p className="mt-8 sm:text-sm md:text-md lg:text-lg text-center max-w-3xl mx-auto text-neutral-800 font-normal leading-relaxed mb-16">
                Telecommunication Engineering graduate crafting digital experiences through modern web, mobile, and AI technologies. A tech enthusiast, a problem solver, and a lifelong learner.
            </p>
        </motion.div>
    );
}
