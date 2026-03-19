import { CategoryBanner } from "@/components/CategoryBikes/CategoryBanner";
import { CheckCircle } from "lucide-react";


const categories = [
  {
    title: "City Bikes",
    subtitle: "PERFECT FOR URBAN COMMUTE",
    badge: "From €18/day",
    href: "/bikes/city",
    image: "/images/city-bike.jpg",
    imageAlt: "City Bike",
  },
  {
    title: "Road Bikes",
    subtitle: "ENGINEERED FOR SPEED",
    badge: "From €25/day",
    href: "/bikes/road",
    image: "/images/road-bike.jpg",
    imageAlt: "Road Bike",
  },
  {
    title: "Mountain Bikes",
    subtitle: "OFF-ROAD ADVENTURE",
    badge: "From €30/day",
    href: "/bikes/mountain",
    image: "/images/mountain-bike.jpg",
    imageAlt: "Mountain Bike",
  },
  {
    title: "Cargo Bikes",
    subtitle: "HAUL ANYTHING WITH EASE",
    badge: "From €35/day",
    href: "/bikes/cargo",
    image: "/images/cargo-bike.jpg",
    imageAlt: "Cargo Bike",
  },
];

const includes = [
  'Helmet & safety gear',
  'Lock & repair kit',
  'Secret route maps',
  '24/7 assistance',
];

export default function BikesCategoryPage() {
  return (
    <main className="bg-dark min-h-screen">
    <div className="container mx-auto px-4 py-8">
      <div className="py-12 px-4 mb-8">
        <h1 className="text-white text-3xl font-bold">Explore the city on two wheels</h1>
    </div>
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <CategoryBanner key={category.href} {...category} />
        ))}
      </div>
      <section className=" relative bg-gradient-to-br from-zinc-800 to-zinc-800/90 overflow-hidden px-4 py-8 mt-8">
        <div className="w-64 h-64 right-1/4 top-0 absolute bg-yellow-300/10 rounded-full blur-3xl"/>
        <div className="w-64 h-64 left-1/4 top-0 absolute bg-yellow-300/5 rounded-full blur-3xl"/>
        <h2 className="text-white text-center text-lg font-semibold mb-4 ">Every rental includes</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {includes.map((item) => (
            <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-3 rounded-full">
              <CheckCircle className="w-5 h-5 text-brand" />
              <span className="text-white text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>      
    </div>
    </main>
  );
}