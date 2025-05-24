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
            className="scroll-mt-10 mt-10 mb-20 max-w-[50rem] text-center mx-auto flex flex-col items-center"
        >
            <div>
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
                    <Image
                        src="/images/profile.jpg"
                        alt="profile"
                        width={320}
                        height={320}
                        className="w-full h-full border-4 border-black rounded-full"
                    />
                </motion.div>
            </div>

            <motion.div
                className="mb-8 mt-12 px-4 justify-center"
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


            {/* Social, Download CV, Hire Me */}
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
            >
                <a
                    href="https://www.linkedin.com/in/raihanputrad/"
                    target="_blank"
                    className="bg-[#0077b5] hover:bg-[#005983] text-white rounded-full p-3 transition focus:scale-110 hover:scale-110"
                    aria-label="LinkedIn"
                >
                    <IconBrandLinkedin size={22} />
                </a>
                <a
                    href="https://github.com/raiputradrmwn"
                    target="_blank"
                    className="bg-black hover:bg-neutral-800 text-white rounded-full p-3 transition focus:scale-110 hover:scale-110"
                    aria-label="GitHub"
                >
                    <IconBrandGithub size={22} />
                </a>
                <a
                    href="/CVATSRHN.pdf"
                    download
                    className="group bg-white px-6 py-3 flex items-center gap-2 rounded-full border border-black/10 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer text-black"
                >
                    Download CV
                    <IconDownload size={20} className="opacity-60 group-hover:translate-y-1 transition" />
                </a>
                <Link
                    href="#contact"
                    className="bg-red-700 hover:bg-red-800 text-white font-semibold rounded-full px-6 py-3 transition focus:scale-110 hover:scale-110 active:scale-105"
                >
                    Hire Me
                </Link>
            </motion.div>

            {/* Description */}
            <p className="text-center text-base sm:text-lg text-neutral-700 max-w-xl mt-8 mx-auto">
                Final-year Telecommunication Engineering student crafting digital experiences through modern web, mobile, and AI technologies.
            </p>
        </section >
    );
}
