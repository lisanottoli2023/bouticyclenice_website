import Image from 'next/image'

interface TripCardProps {
  image: string
  imageAlt: string
  badge: string
  title: string
  description: string
}

export default function TripCard({
    image,
    imageAlt,
    badge,
    title,
    description,
}: TripCardProps) {
  return (
    <article className="flex flex-col bg-white/10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 overflow-hidden">
      <div className="relative h-48 w-full">
        <Image 
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
        <span className="absolute top-3 right-3 bg-brand text-black rounded-full px-3 py-1 text-sm font-semibold">
          {badge}
        </span>
      </div>
      <div className="p-6 flex flex-col gap-2">
        <h3 className="text-white text-base leading-6">
          {title}
        </h3>
        <p className="text-white/80 text-sm leading-5">
          {description}
        </p>
      </div>
    </article>
  )
}