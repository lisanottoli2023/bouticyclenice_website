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
    name: 'Vélos de Ville',
    images: ['/images/city-bike-1.jpg', '/images/city-bike-2.jpg', '/images/city-bike-3.jpg'],
    description: 'Conçu pour le rythme urbain.',
    characteristics: [
      {
        icon: Zap,
        title: 'Cadre Dynamique',
        description: 'Ultra léger, réactif et agile',
      },
      {
        icon: Gauge,
        title: 'Vitesses Fluides',
        description: 'Changement de vitesse sans effort en ville',
      },
      {
        icon: Package,
        title: 'Cargo',
        description: 'Panier avant pour vos essentiels du quotidien',
      },
    ],
  },
  {
    slug: 'road',
    name: 'Vélos de Route',
    images: ['/images/road-bike-1.jpg', '/images/road-bike-2.jpg', '/images/road-bike-3.jpg'],
    description: 'Conçu pour la vitesse et la performance.',
    characteristics: [
      {
        icon: Zap,
        title: 'Cadre en Carbone',
        description: 'Léger et rigide pour une efficacité maximale',
      },
      {
        icon: Gauge,
        title: 'Guidon Courbé',
        description: 'Plusieurs positions de mains pour le confort',
      },
      {
        icon: Mountain,
        title: 'Haute Vitesse',
        description: 'Conçu pour l\'endurance longue distance',
      },
    ],
  },
  {
    slug: 'mountain',
    name: 'VTT',
    images: ['/images/mountain-bike-1.jpg', '/images/mountain-bike-2.jpg', '/images/mountain-bike-3.jpg'],
    description: 'Conquérez tous les terrains avec confiance.',
    characteristics: [
      {
        icon: Mountain,
        title: 'Suspension Tout-Terrain',
        description: 'Absorbe les chocs sur les chemins rocailleux',
      },
      {
        icon: Zap,
        title: 'Pneus Crantés',
        description: 'Adhérence supérieure sur surfaces meubles',
      },
      {
        icon: Package,
        title: 'Construction Robuste',
        description: 'Conçu pour résister aux conditions difficiles',
      },
    ],
  },
  {
    slug: 'cargo',
    name: 'Vélos Cargo',
    images: ['/images/cargo-bike-1.jpg', '/images/cargo-bike-2.jpg', '/images/cargo-bike-3.jpg'],
    description: 'Transportez tout facilement et en toute stabilité.',
    characteristics: [
      {
        icon: Package,
        title: 'Grand Bac à Cargo',
        description: 'Transportez courses, colis ou enfants',
      },
      {
        icon: Gauge,
        title: 'Stabilité Avant Tout',
        description: 'Centre de gravité bas pour une manipulation sécurisée',
      },
      {
        icon: Zap,
        title: 'Freins Puissants',
        description: 'Freinage sûr même avec des charges lourdes',
      },
    ],
  },
];