'use client'

import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

interface BikeCarouselProps {
  images: string[]
}

export default function BikeCarousel({ images }: BikeCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden rounded-lg">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full h-96"
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <a
            key={index}
            href="https://www.lokki.rent/loueur/bouticycle?verticalCategoryIds=6478b46dc8cb350024a332fa"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-bouticycle' : 'bg-dark'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}