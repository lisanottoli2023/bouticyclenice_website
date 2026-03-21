
import Image from "next/image";
import Link from "next/link";

interface CategoryBannerProps {
  title: string;
  subtitle : string;
  badge : string;
  href : string;
  image : string;
  imageAlt : string;
}


export const CategoryBanner = ({ title, subtitle, badge, href, image, imageAlt }: CategoryBannerProps) => {
  return (
    <Link href={href} className="block relative w-full h-48 rounded-lg overflow-hidden">
      <Image src={image} alt={imageAlt} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute inset-0 flex justify-between items-end p-6">
        <div>
          <h2 className="text-white text-xl font-semibold">{title}</h2>
          <p className="text-white/80 text-sm uppercase tracking-wider">{subtitle}</p>
        </div>
        <span className="bg-bouticycle text-dark text-sm font-medium px-3 py-1 rounded">
          {badge}
        </span>
      </div>
    </Link>
  );
};
