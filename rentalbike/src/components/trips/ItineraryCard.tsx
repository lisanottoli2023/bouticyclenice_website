import Image from "next/image";
import { MapPin, Clock, TrendingUp } from 'lucide-react';
import React from "react";

interface ItineraryCardProps {
  photo: string;
  imageAlt: string;
  title: string;
  description: string;
  distance: string;
  duration: string;
  difficulty: 'easy' | 'moderate' | 'hard';
  bulletPoints: string[];
}

const badgeColors = {
  easy: 'bg-green-500',
  moderate: 'bg-yellow-500',
  hard: 'bg-red-500'
}


export const ItineraryCard = ({ photo, imageAlt, title, description, distance, duration, difficulty, bulletPoints }: ItineraryCardProps) => {
  return (
    <article className="bg-white rounded-2xl outline outline-1 outline-gray-200 overflow-hidden flex flex-col">
      <div className="relative h-48">
        <Image src={photo} alt={imageAlt} fill className="object-cover" />
        <span className={`absolute top-3 right-3 text-xs font-semibold text-white px-2 py-1 rounded ${badgeColors[difficulty]}`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
        </div>
        <div className="p-6 flex flex-col gap-3">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <div className="flex gap-4">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {distance}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-gray-400" />
                    {duration}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </div>
            </div>
            <ul className="flex flex-col gap-1">
                {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-brand rounded-full flex-shrink-0" />
            {point}
        </li>
            ))}
        </ul>
        </div>
    </article>
  );
}


