import { LucideIcon } from 'lucide-react';

const alignClasses = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  align: 'left' | 'center'; // Add align prop type
}

export const FeatureItem = ({ icon: Icon, title, description, align }: FeatureItemProps) => {
  return (
    <div className={`flex flex-col ${alignClasses[align]} gap-3`}>
      <div className="w-16 h-16 bg-bouticycle rounded-full flex items-center justify-center">
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
