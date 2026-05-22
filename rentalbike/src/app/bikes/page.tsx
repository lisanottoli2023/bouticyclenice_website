import { CategoryBanner } from "@/components/CategoryBikes/CategoryBanner";
import { CheckCircle } from "lucide-react";


const categories = [
  {
    title: "Vélos de Ville",
    subtitle: " Idéal pour les trajets quotidiens et les balades urbaines",
    badge: "À partir de 18€/jour",
    href: "/bikes/city",
    image: "/images/city-bike.jpg",
    imageAlt: "Vélo de Ville",
  },
  {
    title: "Vélos de Route",
    subtitle: "Conçus pour la performance et les longues distances sur route",
    badge: "À partir de 25€/jour",
    href: "/bikes/road",
    image: "/images/road-bike.jpg",
    imageAlt: "Vélo de Route",
  },
  {
    title: "VTT",
    subtitle: "Parfaits pour les aventures tout-terrain et les sentiers escarpés",
    badge: "À partir de 30€/jour",
    href: "/bikes/mountain",
    image: "/images/mountain-bike.jpg",
    imageAlt: "VTT",
  },
  {
    title: "Vélos Cargo",
    subtitle: "Idéal pour une balade en famille ou faire du shopping en ville",
    badge: "À partir de 35€/jour",
    href: "/bikes/cargo",
    image: "/images/cargo-bike.jpg",
    imageAlt: "Vélo Cargo",
  },
];

const includes = [
  'Casque & équipement de sécurité',
  'Antivol & kit de réparation',
  'Cartes d\'itinéraires secrets',
  'Assistance',
];

export default function BikesCategoryPage() {
  return (
    <main className="bg-dark min-h-screen">
    <div className="container mx-auto px-4 py-8">
      <div className="py-12 px-4 mb-8">
        <h1 className="text-white text-3xl font-bold">Explorez la ville à deux roues</h1>
    </div>
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <CategoryBanner key={category.href} {...category} />
        ))}
      </div>
      <section className=" relative bg-gradient-to-br from-zinc-800 to-zinc-800/90 overflow-hidden px-4 py-8 mt-8">
        <div className="w-64 h-64 right-1/4 top-0 absolute bg-yellow-300/10 rounded-full blur-3xl"/>
        <div className="w-64 h-64 left-1/4 top-0 absolute bg-yellow-300/5 rounded-full blur-3xl"/>
        <h2 className="text-white text-center text-lg font-semibold mb-4 ">Chaque location comprend</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {includes.map((item) => (
            <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-3 rounded-full">
              <CheckCircle className="w-5 h-5 text-bouticycle" />
              <span className="text-white text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>      
    </div>
    </main>
  );
}