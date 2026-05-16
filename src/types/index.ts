import type { ReactNode } from 'react';

export interface Phrase {
  text: string;
  icon: ReactNode;
  color: string;
}

export interface Service {
  title: string;
  keywords: string;
  icon: ReactNode;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  expertise: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  isFeatured?: boolean;
}

export interface Project {
  name: string;
  categories: string[];
  description: string;
  image: string;
  techStack: string[];
  isFeatured?: boolean;
  link?: string;
  type: 'public' | 'private';
}
