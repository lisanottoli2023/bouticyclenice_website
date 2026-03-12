import { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react'

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  content: ReactNode;
}

export const InfoCard = ({ icon: Icon, title, content }: InfoCardProps) => {
  return (
    <div className="bg-white/10 rounded-xl p-4 flex gap-4 items-center">
      <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-dark" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-white text-base font-semibold">
          {title}
        </h3>
        <div className="text-white/80 text-sm">
          {content}
        </div>
      </div>
    </div>
  );
};