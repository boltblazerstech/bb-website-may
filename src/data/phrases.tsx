import { Zap, Settings, DollarSign, ShieldCheck } from 'lucide-react';
import type { Phrase } from '../types';

export const PHRASES: Phrase[] = [
    { text: "Build Fast", icon: <Zap className="w-6 h-6" />,        color: "text-blue-500" },
    { text: "Customise Freely", icon: <Settings className="w-6 h-6" />,    color: "text-emerald-500" },
    { text: "Price Transparently", icon: <DollarSign className="w-6 h-6" />,  color: "text-amber-500" },
    { text: "Stay Beyond Launch", icon: <ShieldCheck className="w-6 h-6" />, color: "text-indigo-500" },
];
