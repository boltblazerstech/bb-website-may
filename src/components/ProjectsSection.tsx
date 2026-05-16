import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink, Lock } from 'lucide-react';
import { PROJECTS, getCategoryIcon } from '../data/projects';
import { PROJECT_FILTERS } from '../constants';
import type { ProjectFilter } from '../constants';
import TypewriterTitle from './TypewriterTitle';

// ─── 3D Tilt Card ──────────────────────────────────────────────────────────
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState({});

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;  // -1 to 1
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;  // -1 to 1
        setStyle({
            transform: `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) scale(1.02)`,
            transition: 'transform 0.1s ease',
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setStyle({
            transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
            transition: 'transform 0.4s ease',
        });
    }, []);

    return (
        <div
            ref={ref}
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
        >
            {children}
        </div>
    );
}

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
    const [isExpanded, setIsExpanded] = useState(false);

    const filteredProjects = PROJECTS.filter((project) => {
        if (activeFilter === 'All') return true;
        return project.categories.includes(activeFilter);
    });

    const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 12);

    const handleFilterChange = (filter: ProjectFilter) => {
        setActiveFilter(filter);
        setIsExpanded(false);
    };

    return (
        <section id="portfolio" className="py-24 px-6 bg-[#0F172A] border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="flex flex-col gap-4">
                        <TypewriterTitle text="Our Projects" className="text-3xl md:text-5xl font-bold tracking-tight" />
                        <p className="text-gray-500 max-w-2xl">
                            A curated selection of real-world systems engineered for scalability, reliability, and performance.
                        </p>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center gap-2 mb-12">
                    {PROJECT_FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleFilterChange(filter)}
                            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activeFilter === filter
                                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 auto-rows-fr"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, idx) => (
                            <motion.div
                                key={project.name}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                            >
                            <TiltCard
                                className="group relative bg-[#161B26] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-colors duration-300 flex flex-col h-full"
                            >
                                {/* Mockup Image */}
                                <div className="relative overflow-hidden bg-gray-900 aspect-[16/10]">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#161B26] via-transparent to-transparent" />

                                    {/* Category Badges */}
                                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                                        {project.categories.map((cat) => (
                                            <div key={cat} className="flex items-center gap-2 px-3 py-1.5 bg-[#0B0F1A]/80 backdrop-blur-md rounded-full border border-white/10 w-fit">
                                                {getCategoryIcon(cat)}
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">{cat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {project.type === 'private' && (
                                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 backdrop-blur-md rounded-full border border-amber-500/20 z-20">
                                            <Lock className="w-3 h-3 text-amber-500" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Private Platform</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow gap-4">
                                    <div className="flex justify-between items-start gap-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {project.name}
                                        </h3>
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack?.map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-white/5 rounded-md text-[10px] text-gray-400 border border-white/10 whitespace-nowrap">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-6 flex flex-wrap items-center gap-4">
                                        <button className="text-xs font-bold uppercase tracking-widest text-blue-500 flex items-center gap-2 group/btn">
                                            {project.type === 'private' ? 'Request Demo' : 'View Case Study'}
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center gap-1.5"
                                            >
                                                Visit Website
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Subtle Glow */}
                                <div className="absolute -inset-px bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                            </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Expand / Collapse Button */}
                {filteredProjects.length > 12 && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="group flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-bold transition-all active:scale-95"
                        >
                            {isExpanded ? 'Show Less' : 'View More Projects'}
                            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                <ArrowRight className="w-4 h-4 rotate-90" />
                            </motion.div>
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}
