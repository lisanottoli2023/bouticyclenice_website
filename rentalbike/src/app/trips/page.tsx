'use client'

import { useMemo, useState } from 'react'
import { AccessGate } from '@/components/trips/AccessGate'
import { ItineraryCard } from '@/components/trips/ItineraryCard'

type Difficulty = 'easy' | 'moderate' | 'hard'

interface TripData {
  photo: string
  imageAlt: string
  title: string
  description: string
  distance: string
  duration: string
  difficulty: Difficulty
  bulletPoints: string[]
}

const tripsData: TripData[] = [
  {
    photo: '/images/trips/trip1.jpg',
    imageAlt: 'Balade côtière panoramique',
    title: 'Promenade des Anglais',
    description: 'Balade côtière longeant la célèbre Promenade des Anglais avec de superbes vues sur la Méditerranée',
    distance: '25 km',
    duration: '2 heures',
    difficulty: 'easy',
    bulletPoints: [
      'Terrain plat avec pistes cyclables dédiées',
      'Parfait pour les débutants et les familles',
      'Arrêts dans des cafés locaux et aux points de vue',
    ],
  },
  {
    photo: '/images/trips/trip2.jpg',
    imageAlt: 'Visite historique de la ville',
    title: 'Exploration du Vieux-Nice',
    description: 'Découvrez la riche histoire et la culture vibrante de la ville à deux roues.',
    distance: '15 km',
    duration: '1h30',
    difficulty: 'moderate',
    bulletPoints: [
      'Mélange de rues plates et pavées',
      'Idéal pour les cyclistes intermédiaires',
      'Visite guidée avec anecdotes historiques',
    ],
  },
  {
    photo: '/images/trips/trip3.jpg',
    imageAlt: 'Aventure en montagne',
    title: 'Boucle Montagne & Baie de Villefranche',
    description: 'Relevez le défi avec des sentiers de montagne palpitants et des vues à couper le souffle.',
    distance: '40 km',
    duration: '4 heures',
    difficulty: 'hard',
    bulletPoints: [
      'Montées raides et descentes techniques',
      'Recommandé pour les cyclistes expérimentés',
      'Inclut un arrêt pique-nique avec vue panoramique',
    ],
  },
  {
    photo: '/images/trips/trip4.jpg',
    imageAlt: 'Balade à la campagne',
    title: 'Charme de la Campagne',
    description: 'Quittez la ville et explorez la campagne pittoresque avec ses villages charmants et ses vignobles.',
    distance: '30 km',
    duration: '3 heures',
    difficulty: 'moderate',
    bulletPoints: [
      'Collines vallonnées et routes panoramiques',
      'Adapté aux cyclistes intermédiaires',
      'Arrêts dans des caves locales et marchés',
    ],
  },
  {
    photo: '/images/trips/trip5.jpg',
    imageAlt: 'Balade au coucher du soleil',
    title: 'Balade au Coucher du Soleil',
    description: 'Vivez la magie d\'une balade au coucher du soleil le long de la plage avec des vues splendides et une atmosphère apaisante.',
    distance: '20 km',
    duration: '2 heures',
    difficulty: 'easy',
    bulletPoints: [
      'Terrain plat avec brise marine',
      'Parfait pour tous les niveaux',
      'Idéal pour les sorties romantiques ou la détente en solo',
    ],
  },
  {
    photo: '/images/trips/trip6.jpg',
    imageAlt: 'Aventure en forêt',
    title: 'Aventure en Forêt',
    description: 'Plongez dans la nature avec une balade palpitante à travers des sentiers forestiers luxuriants et des chemins cachés.',
    distance: '35 km',
    duration: '3h30',
    difficulty: 'hard',
    bulletPoints: [
      'Sentiers techniques avec racines et rochers',
      'Recommandé pour les cyclistes expérimentés',
      'Inclut un arrêt à une cascade isolée',
    ],
  },
]

export default function TripsPage() {
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | Difficulty>('all')
  const [durationFilter, setDurationFilter] = useState<'all' | string>('all')

  const durationOptions = useMemo(
    () => Array.from(new Set(tripsData.map((trip) => trip.duration))),
    []
  )

  const filteredTrips = useMemo(() => {
    return tripsData.filter((trip) => {
      const difficultyMatch =
        difficultyFilter === 'all' || trip.difficulty === difficultyFilter

      const durationMatch =
        durationFilter === 'all' || trip.duration === durationFilter

      return difficultyMatch && durationMatch
    })
  }, [difficultyFilter, durationFilter])

  return (
    <AccessGate>
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-left mb-8">
          Découvrez Nos Balades Exclusives
        </h2>
        <p>
          Des itinéraires sélectionnés mettant en valeur le meilleur de la Côte d'Azur
        </p>

        <div className="mb-8 mt-6  flex flex-col sm:flex-row gap-4 justify-start">
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value as 'all' | Difficulty)}
            className="rounded-lg border border-black/20 bg-zinc-100 px-4 py-2"
            aria-label="Filtrer par difficulté"
          >
            <option value="all">Toutes les difficultés</option>
            <option value="easy">Facile</option>
            <option value="moderate">Modéré</option>
            <option value="hard">Difficile</option>
          </select>

          <select
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            className="rounded-lg border border-black/20 bg-zinc-100 px-4 py-2"
            aria-label="Filtrer par durée"
          >
            <option value="all">Toutes les durées</option>
            {durationOptions.map((duration) => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTrips.map((trip, index) => (
            <ItineraryCard key={index} {...trip} />
          ))}
        </div>
      </section>
    </AccessGate>
  )
}