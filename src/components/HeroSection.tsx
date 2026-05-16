import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Cpu, BarChart3, Settings, DollarSign, ShieldCheck } from 'lucide-react';
import amazonLogo from '../assets/amazon.svg';
import oracleLogo from '../assets/oracle.svg';
import phonepeLogo from '../assets/phonepe.svg';
import microsoftLogo from '../assets/microsoft.svg';
import { PHRASES } from '../data/phrases';
import { PHRASE_INTERVAL_MS } from '../constants';

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % PHRASES.length);
        }, PHRASE_INTERVAL_MS);
        return () => clearInterval(interval);
    }, []);

    const borderColors = [
        'rgba(37, 99, 235, 0.3)',
        'rgba(16, 185, 129, 0.3)',
        'rgba(245, 158, 11, 0.3)',
        'rgba(99, 102, 241, 0.3)',
    ];

    return (
        <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto min-h-[calc(100vh-80px)] flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* ── Left Content ─────────────────────────────────── */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <span className="text-4xl md:text-6xl font-bold text-gray-600/40 select-none mb-2">We</span>

                            {/* Animated Rotating Phrase */}
                            <div className="relative h-[140px] md:h-[190px] overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ y: 40, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -40, opacity: 0 }}
                                        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                        className="absolute inset-0 flex items-center"
                                    >
                                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-tight">
                                            {PHRASES[activeIndex].text}
                                        </h1>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Credibility Block */}
                    <div className="flex flex-col gap-6 max-w-lg mt-4">
                        <div className="space-y-3">
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                More than a dozen IIT Engineers with Big-Tech experience at
                            </p>

                            {/* Brand Logos Row — native colors, Amazon gets subtle bg for dark-text legibility */}
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">

                                {/* Amazon: black SVG text needs a light tint to show on dark bg */}
                                <span className="inline-flex items-center bg-white rounded-lg px-2.5 py-1.5">
                                    <img
                                        src={amazonLogo}
                                        alt="Amazon"
                                        className="h-5 md:h-[22px] w-auto"
                                    />
                                </span>

                                {/* Oracle: increased height, red color is vivid on dark */}
                                <img
                                    src={oracleLogo}
                                    alt="Oracle"
                                    className="h-10 md:h-12 w-auto opacity-95"
                                />

                                {/* PhonePe: boosted brightness so purple is legible */}
                                <img
                                    src={phonepeLogo}
                                    alt="PhonePe"
                                    className="h-6 md:h-7 w-auto"
                                    style={{ filter: 'brightness(1.5) saturate(1.6)' }}
                                />

                                {/* Microsoft: native multicolor, no filter */}
                                <img
                                    src={microsoftLogo}
                                    alt="Microsoft"
                                    className="h-6 md:h-8 w-auto opacity-90"
                                />
                            </div>

                            <p className="text-gray-400 text-sm md:text-base">
                                — now building for you.
                            </p>

                            <div className="flex items-center gap-3 pt-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B0F1A] bg-gray-800 overflow-hidden">
                                            <img
                                                src={`https://picsum.photos/seed/user${i}/100/100`}
                                                alt="User"
                                                referrerPolicy="no-referrer"
                                                className="w-full h-full object-cover grayscale"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-400">
                                    <span className="text-white font-semibold">
                                        50+ startups </span> <span> till {
                                            new Date(new Date().getFullYear(), new Date().getMonth() - 1)
                                                .toLocaleString('default', { month: 'long', year: 'numeric' })
                                        }
                                    </span> scaled. 0 abandoned.
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <a 
                                href="https://calendly.com/boltblazers-tech/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-xl shadow-blue-600/25 active:scale-95 flex items-center gap-2"
                            >
                                Book a 15 min call
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <button 
                                onClick={() => {
                                    const section = document.getElementById('services');
                                    if (section) {
                                        const top = section.getBoundingClientRect().top + window.scrollY - 80;
                                        window.scrollTo({ top, behavior: 'smooth' });
                                    }
                                }}
                                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3.5 rounded-full text-sm font-bold transition-all active:scale-95"
                            >
                                Our Services
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Right Content — Dashboard Mockup ─────────────── */}
                {/* Dashboard Content Panels */}
                <div className="p-6 h-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="h-full flex flex-col justify-between"
                        >

                            {/* ───────────────────────────── */}
                            {/* Panel 0 — Build Fast */}
                            {/* ───────────────────────────── */}
                            {activeIndex === 0 && (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                                            Rapid Delivery
                                        </p>
                                        <h3 className="text-3xl font-bold text-blue-500">
                                            Delivered in 7 Days
                                        </h3>
                                        <p className="text-xs text-emerald-400 mt-1">
                                            Idea → Live Production
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        {["Discovery", "UI Design", "Development", "Testing", "Launch"].map(
                                            (step, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg"
                                                >
                                                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-black">
                                                        ✓
                                                    </div>
                                                    <span className="text-sm text-gray-200">{step}</span>
                                                </motion.div>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* ───────────────────────────── */}
                            {/* Panel 1 — Customise Freely */}
                            {/* ───────────────────────────── */}
                            {activeIndex === 1 && (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-emerald-400">
                                            Fully Modular System
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Drag • Drop • Scale Anytime
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { name: "CRM", style: "bg-blue-500/20 border-blue-500/40" },
                                            { name: "Payments", style: "bg-emerald-500/20 border-emerald-500/40" },
                                            { name: "Analytics", style: "bg-purple-500/20 border-purple-500/40" },
                                            { name: "Automation", style: "bg-amber-500/20 border-amber-500/40" },
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.05 }}
                                                className={`p-4 rounded-xl border ${item.style}`}
                                            >
                                                <p className="text-sm font-semibold text-white">
                                                    {item.name}
                                                </p>
                                                <p className="text-[10px] text-gray-400 mt-1">
                                                    Plug & Play Integration
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* ───────────────────────────── */}
                            {/* Panel 2 — Price Transparently */}
                            {/* ───────────────────────────── */}
                            {activeIndex === 2 && (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-amber-400">
                                            Transparent Pricing
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            Fixed scope. No hidden costs.
                                        </p>
                                    </div>

                                    <div className="space-y-4 text-sm">
                                        {[
                                            ["UI & Engineering", "₹85,000"],
                                            ["Infrastructure Setup", "₹12,000"],
                                            ["3 Months Support", "Included"],
                                        ].map((row, i) => (
                                            <div
                                                key={i}
                                                className="flex justify-between items-center border-b border-white/10 pb-2"
                                            >
                                                <span className="text-gray-400">{row[0]}</span>
                                                <span className="font-mono text-white">{row[1]}</span>
                                            </div>
                                        ))}

                                        <div className="flex justify-between items-center pt-4">
                                            <span className="font-bold text-white">Total</span>
                                            <span className="text-amber-500 font-bold text-lg">
                                                ₹97,000
                                            </span>
                                        </div>
                                    </div>

                                    <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-lg text-[11px] text-amber-200 text-center">
                                        Clear breakdown before we start. No surprises later.
                                    </div>
                                </div>
                            )}

                            {/* ───────────────────────────── */}
                            {/* Panel 3 — Stay Beyond Launch */}
                            {/* ───────────────────────────── */}
                            {activeIndex === 3 && (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-2xl font-bold text-indigo-400">
                                            Beyond Launch
                                        </h3>
                                        <div className="flex items-center gap-2 text-emerald-400 text-xs">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                            Live Monitoring
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl">
                                            <p className="text-xs text-gray-500 uppercase mb-1">
                                                Uptime
                                            </p>
                                            <p className="text-lg font-bold text-white">
                                                99.99%
                                            </p>
                                        </div>

                                        <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl">
                                            <p className="text-xs text-gray-500 uppercase mb-1">
                                                Support
                                            </p>
                                            <p className="text-lg font-bold text-white">
                                                24/7 Active
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-xs text-gray-400 text-center">
                                        Continuous updates • Security patches • Performance tuning
                                    </div>
                                </div>
                            )}

                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}
