import { FeatureItem } from "@/components/ui/FeatureItem";
import { ShieldCheck, MapPin, Clock } from 'lucide-react';



export const FeatureSection = () => {
  return (
    <section className="w-full bg-[#FAFAFB] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience the Côte d'Azur</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem
            icon={MapPin}
            title="Strategic Locations"
            description="Located near the Promenade des Anglais, perfect starting point for all your adventures"
          />
          <FeatureItem
            icon={Clock}
            title="Flexible Rentals"
            description="Half day, daily, or weekly rentals available"
          />
          <FeatureItem
            icon={ShieldCheck}
            title="Premium Quality"
            description="Well-maintained bikes from leading brands. Safety equipment included"
          />
        </div>
      </div>
    </section>
  );
};