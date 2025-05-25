'use client'
import Image from "next/image";
import {
    IconBrandLinkedin,
    IconBrandGithub,
    IconDownload,
    IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeSection() {
    return (
        <section
            id="home"
            className="scroll-mt-10 flex flex-col items-center min-h-screen py-8 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                }}
                className="mb-8 w-32 h-32 sm:w-40 sm:h-40 relative overflow-hidden rounded-full border-4 border-black shadow-lg"
            >
                <Image
                    src="/images/profile.jpg"
                    alt="profile"
                    width={320}
                    height={320}
                    className="w-full h-full border-4 border-black rounded-full"
                />
            </motion.div>
            <motion.div
                className="flex flex-col items-center mt-4 mb-8 text-center"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="text-2xl sm:text-4xl font-bold mb-2">
                    Hi, I'm Raihan Putra <span className="inline-block">👋</span>
                </div>
                <div className="text-xl sm:text-2xl font-semibold mb-1">
                    Web &amp; Mobile App Developer
                </div>
                <div className="text-xl sm:text-2xl font-semibold">
                    AI Enthusiast
                </div>
            </motion.div>
        </section >
    );
}
