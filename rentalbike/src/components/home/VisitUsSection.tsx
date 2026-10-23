import Image from 'next/image'
import { MapPin, Clock, Phone } from 'lucide-react'
import { PHONE_NUMBER, ADDRESS_LINE1, ADDRESS_LINE2, OPENING_HOURS, OPENING_HOURS_DETAIL } from '@/lib/constants'
import { InfoCard } from '@/components/ui/InfoCard'
import shopImage from '@/images/bouticycle-nice.jpg'

export const VisitUsSection = () => {
  return (
    <section className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-3xl font-bold text-center mb-12">Nous rendre visite</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-96">
            <Image
              src={shopImage}
              alt="Bouticycle Nice Shop"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <InfoCard
              icon={MapPin}
              title="Adresse"
              content={
                <>
                  {ADDRESS_LINE1}<br />
                  {ADDRESS_LINE2}
                </>
              }
            />
            <InfoCard
              icon={Clock}
              title="Horaires d'ouverture"
              content={
                <>
                  {OPENING_HOURS}<br />
                  {OPENING_HOURS_DETAIL}
                </>
              }
            />
            <InfoCard
              icon={Phone}
              title="Contact"
              content={PHONE_NUMBER}
            />
          </div>
        </div>
      </div>
    </section>
  )
}