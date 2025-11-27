import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function ProfileActions() {
    return (
        <motion.div
            className="flex flex-wrap justify-center items-center gap-4 mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
        >
            <Link
                href="https://www.linkedin.com/in/raihanputrad/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
                <FaLinkedin size={38} />
            </Link>
            <Link
                href="https://github.com/raiputradrmwn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors duration-200"
            >
                <FaGithub size={38} />
            </Link>
        </motion.div>
    );
}
