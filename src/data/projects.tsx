import { Globe, Smartphone, Database, Bot, Layout } from 'lucide-react';
import type { Project } from '../types';

import imgScrapli from '../assets/project_images/scrapli.webp';
import imgBuyersmatchCp from '../assets/project_images/buyersmatch-cp.webp';
import imgBuyersmatch from '../assets/project_images/buyersmatch.webp';
import imgDonationmeter from '../assets/project_images/donationmeter.webp';
import imgGandharva from '../assets/project_images/gandharva.webp';
import imgGrc from '../assets/project_images/grc.webp';
import imgJiwanshaadi from '../assets/project_images/jiwanshaadi.webp';
import imgKolarindia from '../assets/project_images/kolarindia.webp';
import imgMy1hour from '../assets/project_images/my1hour.webp';
import imgTutorpoint from '../assets/project_images/tutorpoint.webp';
import imgUrdoer from '../assets/project_images/urdoer.webp';
import imgVegverse from '../assets/project_images/vegverse.webp';
import imgVinayakhealthcare from '../assets/project_images/vinayakhealthcare.webp';
import imgAuctiondate from '../assets/project_images/auctiondate.webp';
import imgChargemod from '../assets/project_images/chargemod.webp';
import imgScrapdms from '../assets/project_images/scrapdms.webp';

const imgLeadcure = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200';

export const PROJECTS: Project[] = [
    {
        name: "Scrapli",
        categories: ["Apps"],
        techStack: ["React", "Node.js", "Python"],
        description: "High-performance data extraction and automation engine.",
        image: imgScrapli,
        isFeatured: true,
        link: "https://scrapli.com",
        type: "public",
    },
    {
        name: "GRC",
        categories: ["CRM/ERP", "AI Agents & Chatbot"],
        techStack: ["React", "Spring Boot", "PostgreSQL"],
        description: "Comprehensive Governance, Risk, and Compliance management system.",
        image: imgGrc,
        isFeatured: true,
        type: "private",
    },
    {
        name: "BuyersMatch",
        categories: ["Websites & Stores"],
        techStack: ["Next.js", "Tailwind CSS"],
        description: "Real estate matching engine for connecting buyers and agents.",
        image: imgBuyersmatch,
        isFeatured: true,
        link: "https://buyersmatch.com.au",
        type: "public",
    },
    {
        name: "BuyersMatch Portal",
        categories: ["CRM/ERP", "AI Agents & Chatbot"],
        techStack: ["React", "Node.js", "MongoDB"],
        description: "Secure client portal for real estate transaction management.",
        image: imgBuyersmatchCp,
        isFeatured: false,
        type: "private",
    },
    {
        name: "Vegverse",
        categories: ["Apps"],
        techStack: ["React Native", "Firebase"],
        description: "Community-driven vegetarian lifestyle application.",
        image: imgVegverse,
        isFeatured: false,
        type: "public",
    },
    {
        name: "Urdoer",
        categories: ["Apps"],
        techStack: ["Flutter", "Node.js"],
        description: "Task management and productivity suite for professionals.",
        image: imgUrdoer,
        isFeatured: false,
        type: "public",
    },
    {
        name: "TutorPoint",
        categories: ["CRM/ERP"],
        techStack: ["React", "Express", "PostgreSQL"],
        description: "Educational management and student tracking system.",
        image: imgTutorpoint,
        isFeatured: false,
        link: "https://tutorpoint.in",
        type: "public",
    },
    {
        name: "Gandharva School",
        categories: ["CRM/ERP"],
        techStack: ["PHP", "MySQL"],
        description: "Music school operations and student portal.",
        image: imgGandharva,
        isFeatured: false,
        link: "https://gandharvaschoolofmusic.com",
        type: "public",
    },
    {
        name: "Vinayak Health Care",
        categories: ["Websites & Stores"],
        techStack: ["WordPress", "PHP"],
        description: "Modern healthcare service and informational platform.",
        image: imgVinayakhealthcare,
        isFeatured: false,
        type: "public",
    },
    {
        name: "My1Hour",
        categories: ["Websites & Stores"],
        techStack: ["React", "Node.js"],
        description: "On-demand service booking platform.",
        image: imgMy1hour,
        isFeatured: false,
        link: "https://my1hour.com",
        type: "public",
    },
    {
        name: "DonationMeter",
        categories: ["CRM/ERP"],
        techStack: ["Vue.js", "Laravel"],
        description: "Real-time donation tracking and management system.",
        image: imgDonationmeter,
        isFeatured: false,
        type: "private",
    },
    {
        name: "JiwanShaadi",
        categories: ["Apps"],
        techStack: ["React Native", "Node.js"],
        description: "Matrimonial app for connecting individuals looking for marriage.",
        image: imgJiwanshaadi,
        isFeatured: false,
        type: "public",
    },
    {
        name: "Kolar India",
        categories: ["Websites & Stores"],
        techStack: ["Shopify", "Liquid"],
        description: "E-commerce platform for Kolar India products.",
        image: imgKolarindia,
        isFeatured: false,
        type: "public",
    },
    {
        name: "AuctionDate",
        categories: ["Apps", "AI Agents & Chatbot"],
        techStack: ["React", "Firebase"],
        description: "Live auction and bidding platform.",
        image: imgAuctiondate,
        isFeatured: false,
        type: "public",
    },
    {
        name: "chargeMOD",
        categories: ["Apps"],
        techStack: ["Flutter", "Node.js", "MongoDB"],
        description: "EV charging infrastructure management and user application.",
        image: imgChargemod,
        isFeatured: false,
        link: "https://chargemod.com",
        type: "public",
    },
    {
        name: "LeadCure",
        categories: ["AI Agents & Chatbot", "Apps"],
        techStack: ["Next.js", "Node.js", "WhatsApp API", "OpenAI"],
        description: "AI-powered patient conversion system built for modern clinics.",
        image: imgLeadcure,
        isFeatured: true,
        link: "https://leadcure.co",
        type: "public",
    },
    {
        name: "ScrapDMS",
        categories: ["CRM/ERP", "AI Agents & Chatbot"],
        techStack: ["React", "Express.js", "MySQL", "AWS"],
        description: "Cloud-based GST compliance and document management platform.",
        image: imgScrapdms,
        isFeatured: true,
        link: "https://scrapdms.com",
        type: "public",
    }
];

export function getCategoryIcon(category: string) {
    switch (category) {
        case 'Apps': return <Smartphone className="w-3 h-3" />;
        case 'Websites & Stores': return <Globe className="w-3 h-3" />;
        case 'CRM/ERP': return <Database className="w-3 h-3" />;
        case 'AI Agents & Chatbot': return <Bot className="w-3 h-3" />;
        default: return <Layout className="w-3 h-3" />;
    }
}
