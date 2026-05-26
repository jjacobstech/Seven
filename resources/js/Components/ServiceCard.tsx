import type { LucideIcon } from 'lucide-react';
import type React from 'react';

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
    className = '',
}) => {
    return (
        <div
            className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a] p-8 transition-all duration-500 hover:border-yellow-400/30 ${className}`}
        >
            {/* Background Glow */}
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-yellow-400/10 blur-3xl transition-all duration-500 group-hover:bg-yellow-400/20" />

            {number && (
                <span className="mb-4 block font-serif text-4xl font-black uppercase text-white/10 transition-colors group-hover:text-yellow-400/20">
                    {number}
                </span>
            )}

            <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:bg-yellow-400 group-hover:text-black">
                    <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-4 flex items-baseline gap-2 text-xl font-bold text-white">
                    {title}
                    <span className="text-yellow-400">.</span>
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-white/50 transition-colors group-hover:text-white/70">
                    {description}
                </p>

                {points && (
                    <ul className="space-y-3">
                        {points.map((point) => (
                            <li
                                key={point}
                                className="flex items-center gap-2 text-xs text-white/40 transition-colors group-hover:text-white/60"
                            >
                                <div className="h-1 w-1 rounded-full bg-yellow-400" />
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
