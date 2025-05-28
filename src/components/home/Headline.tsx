import { motion } from "framer-motion";

export function Headline() {
    return (
        <motion.div
            className="flex flex-col items-center text-center gap-3 mb-6"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="mt-6 text-center">
                <h1 className="font-reguler text-xl sm:text-2xl mb-2">
                    Hi, I&apos;m Raihan Putra Darmawan<span className="inline-block">👋</span>
                </h1>
                <h2 className="font-reguler text-xl sm:text-2xl mb-2">
                    Web &amp; Mobile App Developer &middot; <br className="sm:hidden" />
                    AI Enthusiast
                </h2>
            </div>
        </motion.div>
    );
}
