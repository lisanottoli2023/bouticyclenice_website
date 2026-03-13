import TripCard from '@/components/ui/TripCard'
import { Button } from '@/components/ui/Button'

const cards = 
[
{
    image: "/images/hidden-viewpoints.jpg",
    imageAlt: "Hidden Viewpoints",
    badge: "12 Secret Spots",
    title: "Hidden Viewpoints",
    description: "Panoramic spots away from tourist crowds where locals watch the sunset over the Mediterranean"
  },
  {
    image: "/images/sunset-rides.jpg",
    imageAlt: "Sunset Rides",
    badge: "18 Authentic Places",
    title: "Authentic Cafés & Restaurants",
    description: "Family-owned spots where locals actually eat—real socca, fresh pissaladière, not tourist traps"
  },
  {
    image: "/images/city-lights.jpg",
    imageAlt: "City Lights",
    badge: "25+ Routes",
    title: "Curated Secret Routes",
    description: "Quiet backstreets, coastal paths, and scenic routes only locals use—mapped turn-by-turn"
  }
]



export const ExclusiveSection = () => {
    return (
         <section className="bg-dark py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center mb-4">
                    <span className="bg-brand text-black rounded-full px-3 py-1 text-sm font-semibold">
                        EXCLUSIVE WITH EVERY RENTAL
                    </span>
                </div>
                <p className="text-white text-center text-3xl font-bold mb-4">
                    Your Secret Access to the Real Côte d'Azur
                </p>
                <p className="text-white/80 text-center text-lg mb-12">
                    We don't just rent bikes—we unlock the hidden treasures of Nice that only locals know about. Every rental includes our expertly curated insider guides with secret routes, viewpoints, and authentic spots.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {cards.map((card, index) => (
                        <TripCard
                            key={index}
                            image={card.image}
                            imageAlt={card.imageAlt}
                            badge={card.badge}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
                <p className="text-white/80 text-center text-sm mb-6">
                    Our guides are crafted by local experts and updated regularly to ensure you always have the latest insider tips.
                </p>
                <div className="flex justify-center">
                    <Button variant="filled" size="lg" withArrow>
                        Explore our Secret Routes
                    </Button>
                </div>
            </div>
        </section>
    )
}
