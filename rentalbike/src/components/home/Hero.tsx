import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from 'next/link'

export const Hero = () => {
    return (
        <section className="relative w-full h-[500px] md:h-[651px]">
            <Image
                src="/images/Nice.png"
                alt="Hero Image"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                <h1 className="text-center text-white text-4xl md:text-7xl font-normal leading-tight md:leading-[72px] mb-4">
                    Explore Nice by Bike
                </h1>
                <p className="text-center text-white/90 text-lg md:text-2xl font-normal leading-relaxed md:leading-8 mb-8 max-w-3xl">
                    Discover the French Riviera at your own pace with our premium bike rentals
                </p>
                <div className="flex gap-4">
                    <Link href="/bikes"><Button variant="filled" withArrow>Browse Bikes</Button></Link>
                    <Link href="/trips"><Button variant="ghost">View Trips</Button></Link>
                </div>
            </div>
        </section>
    );
};