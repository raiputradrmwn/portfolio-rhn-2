// src/components/CareerCard.tsx
import Image from "next/image";

interface CareerCardProps {
  logo: string;
  company: string;
  position: string;
  type: string;
  period: string;
  description: string;
  isLast?: boolean; // opsional, untuk handling garis di wrapper nanti
}

export default function CareerCard({
  logo,
  company,
  position,
  type,
  period,
  description,
  isLast = false,
}: CareerCardProps) {
  return (
    <div className="flex gap-5 items-start relative mt-10">
      <div className="flex flex-col items-center">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full border-2 border-neutral-200 bg-white flex items-center justify-center overflow-hidden relative z-10">
            <Image
              src={logo}
              alt={company}
              width={48}
              height={48}
              className="object-contain w-10 h-10"
            />
          </div>
        </div>
        {!isLast && (
          <div className="w-px bg-gray-300 flex-1 mt-2"></div>
        )}
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
          <span className="font-semibold text-neutral-900">{company}</span>
          <span className="hidden sm:inline mx-2 text-gray-400">•</span>
          <span className="font-semibold text-neutral-700">{position}</span>
          <span className="sm:ml-3 text-gray-400">{type}</span>
        </div>
        <div className="text-sm text-gray-500 mb-1">{period}</div>
        <div className="text-base text-neutral-800">{description}</div>
      </div>
    </div>
  );
}
