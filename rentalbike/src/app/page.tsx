import { Hero } from "@/components/home/Hero"
import ExclusiveSection from "@/components/home/ExclusiveSection"
import { FeatureSection } from "@/components/home/FeatureSection"
import { VisitUsSection } from "@/components/home/VisitUsSection"

export default function Home() {
  return (
    <main>
      <Hero />
      <ExclusiveSection />
      <FeatureSection />
      <VisitUsSection />
    </main>
  )
}

