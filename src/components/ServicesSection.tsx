import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import TypewriterTitle from './TypewriterTitle';

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 px-6 bg-[#0F172A] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-4 mb-16">
                    <TypewriterTitle text="Our Expertise" className="text-3xl md:text-5xl font-bold tracking-tight" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-[#161B26] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
                        >
                            {/* Tech Illustration */}
                            <div className="h-48 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#161B26] to-transparent z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 z-20 bg-[#0B0F1A]/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col gap-6">
                                <h3 className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <p className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                                        {service.keywords}
                                    </p>
                                </div>
                                <div className="pt-4 flex items-center gap-2 text-blue-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Subtle Glow */}
                            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
