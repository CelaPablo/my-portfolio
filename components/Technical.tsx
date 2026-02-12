'use client'

import { technicalSkills } from '@/lib/data'
import { motion } from "framer-motion";

const TechnicalSection = () => {
    return (
        <section className="py-20 px-6 bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Technical Capabilities</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        A curated toolkit covering Web, blockchain infrastructure, smart
                        contract development, and modern AI workflows — enabling
                        production-ready solutions.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {technicalSkills.map((group, i) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="rounded-2xl bg-white border shadow-sm p-6 hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {group.category}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-sm rounded-full bg-slate-900 text-white hover:bg-slate-600 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechnicalSection