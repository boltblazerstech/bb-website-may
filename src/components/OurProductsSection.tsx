import { ExternalLink, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';
import imgScrapdms from '../assets/project_images/scrapdms.webp';
import TypewriterTitle from './TypewriterTitle';

// Placeholders for LeadCure and ClientNest until actual images are provided
const imgLeadcure = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200'; 
const imgClientnest = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200';

const OUR_PRODUCTS = [
  {
    name: "LeadCure",
    tagline: "AI-powered patient conversion system built for modern clinics.",
    description: "LeadCure instantly responds to enquiries, automates follow-ups, books appointments, and reduces no-shows — all through WhatsApp.",
    techStack: ["Next.js", "Node.js", "WhatsApp API", "OpenAI", "PostgreSQL", "AWS"],
    image: imgLeadcure,
    link: "https://leadcure.co",
  },
  {
    name: "ClientNest",
    tagline: "A premium white-label client portal designed for Australian buyer's agents.",
    description: "ClientNest centralises property updates, documents, timelines, and communication into one branded experience clients actually love using.",
    techStack: ["React", "Next.js", "Supabase", "Tailwind CSS", "Node.js", "Vercel"],
    image: imgClientnest,
    link: "https://clientnest.boltblazers.com",
    demo: "https://clientnest-demo.boltblazers.com/",
  },
  {
    name: "ScrapDMS",
    tagline: "Cloud-based GST compliance and document management platform for the scrap and recycling industry.",
    description: "ScrapDMS simplifies invoice processing, e-way bills, vendor verification, and compliance workflows with secure real-time tracking.",
    techStack: ["React", "Express.js", "MySQL", "GST APIs", "AWS", "Docker"],
    image: imgScrapdms,
    link: "https://scrapdms.com",
  }
];

export default function OurProductsSection() {
    return (
        <section id="our-products" className="py-24 px-6 bg-[#0B0F1A]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-6 mb-20">
                    <div className="flex flex-col gap-3">
                        <TypewriterTitle text="Our Own SaaS products" className="text-4xl md:text-5xl font-bold tracking-tight text-white" />
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '80px' }}
                            viewport={{ once: true }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="h-1 bg-blue-600 rounded-full" 
                        />
                    </div>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Beyond client services, we actively develop and scale our own successful SaaS products.
                    </p>
                </div>

                <div className="flex flex-col gap-24">
                    {OUR_PRODUCTS.map((product) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                        >
                            {/* Left Side: Image */}
                            <div className="w-full lg:w-1/2 relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/5">
                                <div className="aspect-[16/10] bg-gray-900 w-full relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent opacity-50" />
                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.name}</h3>
                                    <p className="text-xl text-blue-400 font-medium mb-4">{product.tagline}</p>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        {product.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {product.techStack.map(tech => (
                                            <span key={tech} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm font-medium text-gray-300 border border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-4">
                                    {product.link && (
                                        <a href={product.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-colors shadow-lg shadow-blue-600/20">
                                            Visit {product.name}
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                    {product.demo && (
                                        <a href={product.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold transition-colors border border-white/10">
                                            <PlayCircle className="w-4 h-4" />
                                            View Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
