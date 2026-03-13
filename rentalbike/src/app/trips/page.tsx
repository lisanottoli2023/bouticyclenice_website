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
    imageAlt: 'Scenic coastal route',
    title: 'Promenade des Anglais',
    description: 'Scenic coastal ride along the famous Promenade des Anglais with stunning Mediterranean views',
    distance: '25 km',
    duration: '2 hours',
    difficulty: 'easy',
    bulletPoints: [
      'Flat terrain with dedicated bike lanes',
      'Perfect for beginners and families',
      'Stops at local cafes and viewpoints',
    ],
  },
  {
    photo: '/images/trips/trip2.jpg',
    imageAlt: 'Historic city tour',
    title: 'Old Town Explorer',
    description: 'Discover the rich history and vibrant culture of the city on two wheels.',
    distance: '15 km',
    duration: '1.5 hours',
    difficulty: 'moderate',
    bulletPoints: [
      'Mix of flat and cobblestone streets',
      'Ideal for intermediate riders',
      'Guided tour with historical insights',
    ],
  },
  {
    photo: '/images/trips/trip3.jpg',
    imageAlt: 'Mountain trail adventure',
    title: 'Mountain Villefranche Bay Loop',
    description: 'Challenge yourself with thrilling mountain trails and breathtaking views.',
    distance: '40 km',
    duration: '4 hours',
    difficulty: 'hard',
    bulletPoints: [
      'Steep climbs and technical descents',
      'Recommended for experienced riders',
      'Includes a picnic stop with panoramic views',
    ],
  },
  {
    photo: '/images/trips/trip4.jpg',
    imageAlt: 'Countryside ride',
    title: 'Countryside Charm',
    description: 'Escape the city and explore the picturesque countryside with charming villages and vineyards.',
    distance: '30 km',
    duration: '3 hours',
    difficulty: 'moderate',
    bulletPoints: [
      'Rolling hills and scenic routes',
      'Suitable for intermediate riders',
      'Stops at local wineries and markets',
    ],
  },
  {
    photo: '/images/trips/trip5.jpg',
    imageAlt: 'Sunset beach ride',
    title: 'Sunset Beach Ride',
    description: 'Experience the magic of a sunset ride along the beach with stunning views and a relaxing atmosphere.',
    distance: '20 km',
    duration: '2 hours',
    difficulty: 'easy',
    bulletPoints: [
      'Flat terrain with ocean breeze',
      'Perfect for all skill levels',
      'Ideal for romantic rides or solo relaxation',
    ],
  },
  {
    photo: '/images/trips/trip6.jpg',
    imageAlt: 'Forest trail adventure',
    title: 'Forest Trail Adventure',
    description: 'Immerse yourself in nature with a thrilling ride through lush forest trails and hidden paths.',
    distance: '35 km',
    duration: '3.5 hours',
    difficulty: 'hard',
    bulletPoints: [
      'Technical trails with roots and rocks',
      'Recommended for experienced riders',
      'Includes a stop at a secluded waterfall',
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
          Explore Our Exclusive Trips
        </h2>
        <p>
          Discover curated routes showcasing the best of the French Riviera
        </p>

        <div className="mb-8 mt-6  flex flex-col sm:flex-row gap-4 justify-start">
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value as 'all' | Difficulty)}
            className="rounded-lg border border-black/20 bg-zinc-100 px-4 py-2"
            aria-label="Filter by difficulty"
          >
            <option value="all">All difficulties</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="hard">Hard</option>
          </select>

          <select
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            className="rounded-lg border border-black/20 bg-zinc-100 px-4 py-2"
            aria-label="Filter by duration"
          >
            <option value="all">All durations</option>
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