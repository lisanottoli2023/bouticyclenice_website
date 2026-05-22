import { FeatureItem } from "@/components/ui/FeatureItem";
import { ShieldCheck, MapPin, Clock } from 'lucide-react';



export const FeatureSection = () => {
  return (
    <section className="w-full bg-[#FAFAFB] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Vivez la Côte d'Azur</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem
            align='center'
            icon={MapPin}
            title="Emplacements Stratégiques"
            description="Situé près de la Promenade des Anglais, point de départ idéal pour toutes vos aventures"
          />
          <FeatureItem
            align='center'
            icon={Clock}
            title="Locations Flexibles"
            description="Location à la demi-journée, à la journée ou à la semaine disponible"
          />
          <FeatureItem
            align='center'
            icon={ShieldCheck}
            title="Qualité Premium"
            description="Vélos bien entretenus de grandes marques. Équipement de sécurité inclus"
          />
        </div>
      </div>
    </section>
  );
};