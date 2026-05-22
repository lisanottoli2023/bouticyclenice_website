import TripCard from '@/components/ui/TripCard'
import { Button } from '@/components/ui/Button'

const cards =
[
{
    image: "/images/hidden-viewpoints.jpg",
    imageAlt: "Points de Vue Cachés",
    badge: "12 Spots Secrets",
    title: "Points de Vue Cachés",
    description: "Des panoramas loin des foules touristiques où les Niçois regardent le coucher de soleil sur la Méditerranée"
  },
  {
    image: "/images/sunset-rides.jpg",
    imageAlt: "Balades au Coucher du Soleil",
    badge: "18 Lieux Authentiques",
    title: "Cafés & Restaurants Authentiques",
    description: "Des adresses de quartier où mangent vraiment les Niçois — vraie socca, pissaladière fraîche, sans pièges à touristes"
  },
  {
    image: "/images/city-lights.jpg",
    imageAlt: "Lumières de la Ville",
    badge: "25+ Itinéraires",
    title: "Itinéraires Secrets Sélectionnés",
    description: "Ruelles tranquilles, chemins côtiers et routes panoramiques que seuls les locaux empruntent — cartographiés virage par virage"
  }
]



export const ExclusiveSection = () => {
    return (
         <section className="bg-dark py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center mb-4">
                    <span className="bg-bouticycle text-black rounded-full px-3 py-1 text-sm font-semibold">
                        INCLUS AVEC CHAQUE LOCATION
                    </span>
                </div>
                <p className="text-white text-center text-3xl font-bold mb-4">
                    Votre Accès Privilégié à la Vraie Côte d'Azur
                </p>
                <p className="text-white/80 text-center text-lg mb-12">
                    Nous ne louons pas seulement des vélos, nous vous ouvrons les portes des trésors cachés de Nice que seuls les locaux connaissent. Chaque location inclut nos guides insider soigneusement sélectionnés avec itinéraires secrets, points de vue et adresses authentiques.
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
                    Nos guides sont créés par des experts locaux et mis à jour régulièrement pour vous garantir les derniers bons plans.
                </p>
                <div className="flex justify-center">
                    <Button variant="filled" size="lg" withArrow>
                        Découvrir nos Itinéraires Secrets
                    </Button>
                </div>
            </div>
        </section>
    )
}
