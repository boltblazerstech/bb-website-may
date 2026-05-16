// ─── Theme / Design Tokens ────────────────────────────────────────────────────

export const BG_COLOR = '#0B0F1A';
export const CARD_BG_COLOR = '#161B26';

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
    { name: 'Services', id: 'services' },
    { name: 'Our Products', id: 'our-products' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Team', id: 'team' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
] as const;

export const SOCIAL_LINKS = ['Twitter', 'LinkedIn', 'GitHub'] as const;

// ─── Projects Filter Options ───────────────────────────────────────────────────

export const PROJECT_FILTERS = [
    'All',
    'Apps',
    'Websites & Stores',
    'CRM/ERP',
    'AI Agents & Chatbot',
] as const;

export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

// ─── Hero Phrase Cycling Interval (ms) ────────────────────────────────────────

export const PHRASE_INTERVAL_MS = 3000;
