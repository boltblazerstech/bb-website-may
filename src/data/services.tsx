import { Code2, Layout, Cpu, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import type { Service } from '../types';
import DashboardImg from '../assets/dashboard2.jpg'
import EcommerceImg from "../assets/ecommerce.jpg"
import AiImg from "../assets/aichatbot.jpg"
import AppImg from "../assets/app.png"
import MaintenanceImg from "../assets/maintenance.jpg"
import GrowthImg from "../assets/client_images/digitalmarketing.webp"
export const SERVICES: Service[] = [
    {
        title: "Custom Software",
        keywords: "CRM · ERP · Internal Platforms · Dashboards",
        icon: <Code2 className="w-5 h-5 text-blue-500" />,
        image: DashboardImg,
    },
    {
        title: "Mobile & Web Apps",
        keywords: "Android · iOS · Progressive Web Apps",
        icon: <Layout className="w-5 h-5 text-emerald-500" />,
        image: AppImg,
    },
    {
        title: "AI & Automation",
        keywords: "WhatsApp Automation · Chatbots · AI Agents",
        icon: <Cpu className="w-5 h-5 text-purple-500" />,
        image: AiImg,
    },
    {
        title: "Websites & Online Stores",
        keywords: "Business Websites · E-commerce · Landing Pages",
        icon: <Zap className="w-5 h-5 text-amber-500" />,
        image: EcommerceImg,
    },
    {
        title: "Hosting & Support",
        keywords: "Deployment · Infrastructure · Maintenance · 24/7 Monitoring",
        icon: <ShieldCheck className="w-5 h-5 text-indigo-500" />,
        image: MaintenanceImg,
    },
    {
        title: "Growth & Marketing",
        keywords: "SEO · Paid Ads · Social Media · Conversion Optimization",
        icon: <TrendingUp className="w-5 h-5 text-rose-500" />,
        image: GrowthImg,
    },
];
