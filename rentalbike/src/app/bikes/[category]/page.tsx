import { notFound } from 'next/navigation'
import Image from 'next/image'
import { bikesData } from '@/lib/bikesData'
import { FeatureItem } from '@/components/ui/FeatureItem'
import { Button } from '@/components/ui/Button'
import BikeCarousel from '@/components/bikes/BikeCarousel'
import { RESERVATION_URL } from '@/lib/constants'
import Link from 'next/link'               

interface BikesCategoryPageProps {
  params: Promise<{ category: string }>
}

export default async function BikesCategoryPage({ params }: BikesCategoryPageProps) {
  const { category } = await params
  const bike = bikesData.find((b) => b.slug === category)

  if (!bike) {
    notFound()
  }

 const { name, description, images, characteristics } = bike

  return (
    <main className="bg-white">
      {/* Section 1: Hero + Carousel */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-black text-6xl font-bold mb-6">EXPLORE</h2>
            <h1 className="text-4xl font-bold text-black border-b-4 border-bouticycle inline-block pb-2">
              Nos {name}
            </h1>
          </div>

          <div className="mb-8">
            <BikeCarousel images={images} />
          </div>

          <div className="flex justify-center">
            <Link href={RESERVATION_URL} target="_blank">
                <Button variant="filled">Réserver maintenant</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Characteristics */}
      <section className="bg-[#FAFAFB] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Title, Description, Features */}
            <div>
              <h2 className="text-black text-4xl font-bold mb-4">CARACTÉRISTIQUES</h2>
              <p className="text-black/80 text-lg leading-relaxed mb-8">
                {description}
              </p>

              <div className="space-y-6">
                {characteristics.map((char) => (
                  <FeatureItem
                    align="left"
                    key={char.title}
                    icon={char.icon}
                    title={char.title}
                    description={char.description}
                  />
                ))}
              </div>
            </div>

            {/* Right: Detail Photos */}
            <div className="space-y-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={images[0]}
                  alt={`${name} Detail 1`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={images[1] || images[0]}
                  alt={`${name} Detail 2`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}