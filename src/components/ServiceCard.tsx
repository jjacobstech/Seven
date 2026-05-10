import type { LucideIcon } from "lucide-react";
import type React from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  points?: string[];
  number?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  points,
  number,
  className = "",
}) => {
  return (
    <div
      className={`group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-yellow-400/30 transition-all duration-500 overflow-hidden ${className}`}
    >
      {/* Background Glow */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-all duration-500" />

      {number && (
        <span className="text-4xl font-black text-white/10 group-hover:text-yellow-400/20 transition-colors uppercase font-serif mb-4 block">
          {number}
        </span>
      )}

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-500">
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white mb-4 flex items-baseline gap-2">
          {title}
          <span className="text-yellow-400">.</span>
        </h3>

        <p className="text-white/50 text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
          {description}
        </p>

        {points && (
          <ul className="space-y-3">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-xs text-white/40 group-hover:text-white/60 transition-colors"
              >
                <div className="w-1 h-1 rounded-full bg-yellow-400" />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
