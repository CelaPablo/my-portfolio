"use client";

import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GithubIcon from '@/assets/icons/github.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'

export default function HeroSection() {
    return (
        <section id="main" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                        Building <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Production-Ready Digital</span> <br />
                        Experiences
                    </h1>

                    <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                        Full-stack developer creating scalable applications, interactive dashboards,
                        and Web3 systems designed for performance, usability, and real-world impact.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href='#projects'
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-medium shadow-lg hover:bg-blue-600 hover:shadow-blue-500/25 transition-all duration-300"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href='#contact'
                            className="px-6 py-3 rounded-full border border-slate-200 font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
                        >
                            Contact Me
                        </Link>
                    </div>
                    
                    <div className="flex">
                        <Link
                            target="_blank" rel="noopener noreferrer"
                            className="size-8 relative mx-2"
                            href="https://www.linkedin.com/in/pablo-cela-4a2219167/">
                            <Image src={LinkedinIcon}  alt="linkedin" fill  className="w-6 h-6" />
                        </Link>
                        <Link
                            target="_blank" rel="noopener noreferrer"
                            className="size-8 relative mx-1"
                            href="https://github.com/CelaPablo">
                            <Image src={GithubIcon}  alt="linkedin" fill  className="w-6 h-6" />
                        </Link>
                    </div>
                </motion.div>

                {/* Visual / card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 rounded-3xl shadow-2xl border border-slate-100 bg-black backdrop-blur-xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <p className="text-slate-400">// current focus</p>
                            <p className="text-purple-600">
                                const <span className="text-blue-600">developer</span> = {'{'}
                            </p>
                            <p className="pl-4 text-white">
                                name: <span className="text-green-600">"Cela Pablo"</span>,
                            </p>
                            <p className="pl-4 text-white">
                                stack: [<span className="text-green-600">"React"</span>, <span className="text-green-600">"Next.js"</span>, <span className="text-green-600">"Solidity"</span>],
                            </p>
                            <p className="pl-4 text-white">
                                passion: <span className="text-green-600">"building real products"</span>,
                            </p>
                            <p className="pl-4 text-white">
                                status: <span className="text-green-600">"available"</span>
                            </p>
                            <p className="text-purple-600">{'}'}</p>
                        </div>
                    </div>

                    <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 blur-3xl opacity-40 rounded-full transform translate-y-10 translate-x-10" />
                </motion.div>
            </div>
        </section>
    );
}
