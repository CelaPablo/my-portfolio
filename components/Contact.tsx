"use client";

import Link from "next/link";
import Image from 'next/image';
import GithubIcon from '@/assets/icons/github.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 px-6 bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Let’s Work Together
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Have a project in mind or need help building something? Reach out
                        — I’m available for freelance work, collaborations, and Web3
                        development.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="space-y-3">
                            <h3 className="font-semibold text-lg text-black">Direct Contact</h3>

                            <a
                                href="mailto:pablooandress9@gmail.com"
                                className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition"
                            >
                                <Mail className="w-5 h-5" />
                                pablooandress9@gmail.com
                            </a>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-semibold text-lg text-black">Find me online</h3>

                            <div className="flex gap-4">

                                <Link
                                    target="_blank" rel="noopener noreferrer"
                                    className="size-8 relative mx-2"
                                    href="https://www.linkedin.com/in/pablo-cela-4a2219167/">
                                    <Image src={LinkedinIcon} alt="linkedin" fill className="w-6 h-6" />
                                </Link>
                                <Link
                                    target="_blank" rel="noopener noreferrer"
                                    className="size-8 relative mx-1"
                                    href="https://github.com/CelaPablo">
                                    <Image src={GithubIcon} alt="linkedin" fill className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
