import type { TeamMember } from '../types';

import harshImg from '../assets/harsh img cropped.jpg';
import shivanshuImg from '../assets/shivanshu gupta image.jpg';
import tanuImg from '../assets/tanu cropped.jpg';
import rahulImg from '../assets/rahul_ranjan.jfif';

export const TEAM: TeamMember[] = [
    {
        name: "Harsh Agrawal",
        role: "Frontend & Web Systems Specialist",
        experience: "IIT Dhanbad · 4+ Years",
        expertise: "Web Applications · Landing Platforms · UI Architecture · Performance Optimization",
        image: harshImg,
    },
    {
        name: "Shivanshu Gupta",
        role: "AI & Systems Architect",
        experience: "IIT Dhanbad · 7+ Years · Founder of 3 Startups",
        expertise: "AI Automation · Backend Architecture · Workflow Systems · Product Strategy",
        image: shivanshuImg,
    },
    {
        name: "Tanu Agrawal",
        role: "Cloud & Distributed Systems Architect",
        experience: "Ex-Amazon · Ex-Oracle · 8+ Years",
        expertise: "Cloud Infrastructure · Large-Scale Systems · Deployment · Performance Engineering",
        image: tanuImg,
    },
    {
        name: "Rahul Ranjan",
        role: "Business Systems & Operations Engineer",
        experience: "IIT Kharagpur · 5+ Years",
        expertise: "CRM · ERP · Internal Platforms · System Integration",
        image: rahulImg,
    },
];
