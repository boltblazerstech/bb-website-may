import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import bbFullLogo from '../assets/boltblazers_logo-full-removebg-preview.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.3; // 30% from the top of the screen
            let currentSection = '';

            for (const link of NAV_LINKS) {
                const section = document.getElementById(link.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // The active section is the last one whose top has passed the threshold line
                    if (rect.top <= threshold) {
                        currentSection = link.id;
                    }
                }
            }

            // Special case for bottom of page (Contact)
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
                currentSection = NAV_LINKS[NAV_LINKS.length - 1].id;
            }
            
            // Handle top of page (Hero)
            if (window.scrollY < 100) {
                currentSection = '';
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const top = section.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0B0F1A]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center group cursor-pointer"
                >
                    <img src={bbFullLogo} alt="BoltBlazers Logo" className="h-40 sm:h-50 md:h-60 w-auto group-hover:scale-105 transition-transform" />
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-9">
                    {NAV_LINKS.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative text-[15px] font-semibold transition-all duration-300 ${
                                activeSection === item.id ? 'text-blue-500' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {item.name}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeDot"
                                    className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                    <a 
                        href="https://wa.me/919528523430"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full text-[15px] font-bold transition-all shadow-lg shadow-[#25D366]/20 active:scale-95 ml-4 flex items-center gap-2.5"
                    >
                        <svg 
                            viewBox="0 0 24 24" 
                            className="w-5 h-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Chat with Us
                    </a>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2 text-gray-400 hover:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 right-0 bg-[#0B0F1A] border-b border-white/5 p-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {NAV_LINKS.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-lg font-semibold text-left transition-colors ${
                                        activeSection === item.id ? 'text-blue-500' : 'text-gray-400'
                                    }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                            <a 
                                href="https://wa.me/919528523430"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] text-white px-5 py-4 rounded-xl text-center font-bold shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2"
                            >
                                <svg 
                                    viewBox="0 0 24 24" 
                                    className="w-5 h-5 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                Chat with Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
