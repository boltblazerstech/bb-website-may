import { motion } from 'motion/react';
import { Zap, Linkedin } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import TypewriterTitle from './TypewriterTitle';

export default function TestimonialsSection() {
    const featured = testimonials.filter((t) => t.id === 1);
    const grid = testimonials.filter((t) => t.id !== 1);

    return (
        <section id="testimonials" className="py-24 px-6 bg-[#0F172A] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-4 mb-16">
                    <TypewriterTitle text="Client Results" className="text-3xl md:text-5xl font-bold tracking-tight" />
                </div>

                {/* Featured Testimonial */}
                <div className="mb-12">
                    {featured.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative p-10 md:p-16 bg-[#161B26] border border-white/5 rounded-3xl overflow-hidden group"
                        >
                            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
                                <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-3xl overflow-hidden flex-shrink-0 border border-white/10 shadow-2xl">
                                    {testimonial.photo ? (
                                        <img
                                            src={testimonial.photo}
                                            alt={testimonial.name}
                                            referrerPolicy="no-referrer"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div 
                                            className="w-full h-full flex items-center justify-center text-6xl md:text-8xl font-bold"
                                            style={{ backgroundColor: testimonial.avatarBg, color: testimonial.avatarColor }}
                                        >
                                            {testimonial.avatar}
                                        </div>
                                    )}
                                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs md:text-sm px-3 py-2 rounded-xl border border-white/10 text-center font-medium">
                                        {testimonial.projectTag}
                                    </div>
                                </div>
                                <div className="max-w-3xl">
                                    <p className="text-xl md:text-3xl font-medium text-white leading-relaxed md:leading-tight mb-8 italic">
                                        "{testimonial.testimonial}"
                                    </p>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <p className="text-2xl font-bold text-white">{testimonial.name}</p>
                                            <p className="text-blue-400 font-medium text-lg">{testimonial.designation}</p>
                                            <p className="text-gray-400 mt-1">{testimonial.company} • {testimonial.location}</p>
                                        </div>
                                        {testimonial.linkedIn && (
                                            <a 
                                                href={testimonial.linkedIn}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 rounded-full text-white text-sm transition-colors w-fit"
                                            >
                                                <Linkedin className="w-4 h-4 text-[#0A66C2]" /> LinkedIn Profile
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                <Zap className="w-64 h-64 text-blue-500" />
                            </div>
                            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Grid Testimonials */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {grid.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -4 }}
                            className="break-inside-avoid bg-[#161B26] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group relative flex flex-col h-full"
                        >
                            <div className="flex items-start gap-5 mb-6">
                                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 shadow-lg">
                                    {testimonial.photo ? (
                                        <img
                                            src={testimonial.photo}
                                            alt={testimonial.name}
                                            referrerPolicy="no-referrer"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div 
                                            className="w-full h-full flex items-center justify-center text-2xl font-bold"
                                            style={{ backgroundColor: testimonial.avatarBg, color: testimonial.avatarColor }}
                                        >
                                            {testimonial.avatar}
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <p className="text-white font-bold text-lg">{testimonial.name}</p>
                                    <p className="text-blue-400 text-sm font-medium leading-tight my-1">{testimonial.designation}</p>
                                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                                </div>
                            </div>
                            
                            <div className="mb-6 inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
                                {testimonial.projectTag}
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed italic flex-1">"{testimonial.testimonial}"</p>
                            
                            {testimonial.linkedIn && (
                                <a 
                                    href={testimonial.linkedIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5 w-fit group/link"
                                >
                                    <Linkedin className="w-4 h-4 text-[#0A66C2]" /> LinkedIn <span className="opacity-50 group-hover/link:opacity-100 transition-opacity ml-0.5">↗</span>
                                </a>
                            )}
                            
                            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
