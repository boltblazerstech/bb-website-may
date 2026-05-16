import { motion } from 'motion/react';
import { TEAM } from '../data/team';
import TypewriterTitle from './TypewriterTitle';

export default function TeamSection() {
    return (
        <section id="team" className="py-24 px-6 bg-[#0B0F1A] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-6 mb-16">
                    <div className="flex flex-col gap-3">
                        <TypewriterTitle text="Leadership" className="text-3xl md:text-5xl font-bold tracking-tight" />
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '80px' }}
                            viewport={{ once: true }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="h-1 bg-blue-600 rounded-full" 
                        />
                    </div>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Meet the engineering minds behind BoltBlazers' most complex systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {TEAM.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-[#161B26] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div className="grid sm:grid-cols-5 h-full">
                                {/* Member Photo */}
                                <div className="sm:col-span-2 relative overflow-hidden h-64 sm:h-auto">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#161B26] hidden sm:block" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#161B26] via-transparent to-transparent sm:hidden" />
                                </div>

                                {/* Member Info */}
                                <div className="sm:col-span-3 p-8 flex flex-col justify-center gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                        <p className="text-blue-500 font-semibold text-sm tracking-wide uppercase">{member.role}</p>
                                    </div>
                                    <div className="h-px bg-white/10 w-12" />
                                    <div className="space-y-3">
                                        <p className="text-gray-300 font-medium text-sm">{member.experience}</p>
                                        <p className="text-gray-500 text-xs leading-relaxed tracking-wide">{member.expertise}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Subtle Glow */}
                            <div className="absolute -inset-px bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
