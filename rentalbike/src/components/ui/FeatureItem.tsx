import { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureItem = ({ icon: Icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-dark" />
      </div>
      <h3 className="text-dark text-lg font-semibold ">
        {title}
      </h3>
      <p className="text-dark/80 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};
