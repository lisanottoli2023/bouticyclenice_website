import { Zap, Gauge, Mountain, Package } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Characteristic {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BikeCategory {
  slug: 'city' | 'road' | 'mountain' | 'cargo';
  name: string;
  images: string[];
  description: string;
  characteristics: Characteristic[];
}

export const bikesData: BikeCategory[] = [
  {
    slug: 'city',
    name: 'City Bikes',
    images: ['/images/city-bike-1.jpg', '/images/city-bike-2.jpg', '/images/city-bike-3.jpg'],
    description: 'Engineered for the urban pulse.',
    characteristics: [
      {
        icon: Zap,
        title: 'Kinetic Frame',
        description: 'Ultra lightweight, responsive, and agile',
      },
      {
        icon: Gauge,
        title: 'Smooth Gears',
        description: 'Effortless shifting for city streets',
      },
      {
        icon: Package,
        title: 'Cargo Ready',
        description: 'Front basket for daily essentials',
      },
    ],
  },
  {
    slug: 'road',
    name: 'Road Bikes',
    images: ['/images/road-bike-1.jpg', '/images/road-bike-2.jpg', '/images/road-bike-3.jpg'],
    description: 'Engineered for speed and performance.',
    characteristics: [
      {
        icon: Zap,
        title: 'Carbon Frame',
        description: 'Lightweight and rigid for maximum efficiency',
      },
      {
        icon: Gauge,
        title: 'Drop Bars',
        description: 'Multiple hand positions for comfort',
      },
      {
        icon: Mountain,
        title: 'High Speed',
        description: 'Built for long-distance endurance',
      },
    ],
  },
  {
    slug: 'mountain',
    name: 'Mountain Bikes',
    images: ['/images/mountain-bike-1.jpg', '/images/mountain-bike-2.jpg', '/images/mountain-bike-3.jpg'],
    description: 'Conquer any terrain with confidence.',
    characteristics: [
      {
        icon: Mountain,
        title: 'All-Terrain Suspension',
        description: 'Absorbs shocks on rocky paths',
      },
      {
        icon: Zap,
        title: 'Knobby Tires',
        description: 'Superior grip on loose surfaces',
      },
      {
        icon: Package,
        title: 'Durable Build',
        description: 'Built to withstand tough conditions',
      },
    ],
  },
  {
    slug: 'cargo',
    name: 'Cargo Bikes',
    images: ['/images/cargo-bike-1.jpg', '/images/cargo-bike-2.jpg', '/images/cargo-bike-3.jpg'],
    description: 'Haul anything with ease and stability.',
    characteristics: [
      {
        icon: Package,
        title: 'Large Cargo Box',
        description: 'Transport groceries, packages, or kids',
      },
      {
        icon: Gauge,
        title: 'Stability First',
        description: 'Low center of gravity for safe handling',
      },
      {
        icon: Zap,
        title: 'Powerful Brakes',
        description: 'Stop safely with heavy loads',
      },
    ],
  },
];