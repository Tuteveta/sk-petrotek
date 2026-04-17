import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    label: "Who We Are",
    title: "PNG's Industrial Power Partner",
    image: "https://images.unsplash.com/photo-1621905251189-08b45249be09?w=1200&q=80&fit=crop",
    href: "/about",
  },
  {
    label: "What We Do",
    title: "Generator Services & Maintenance",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80&fit=crop",
    href: "/services",
  },
  {
    label: "Our Impact",
    title: "Schools Built. Communities Served.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80&fit=crop",
    href: "/projects",
  },
];

export default function HighlightStrip() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[400px]">
      {cards.map((card, i) => (
        <Link
          key={card.label}
          href={card.href}
          className={`highlight-card relative overflow-hidden group h-[280px] md:h-full flex flex-col justify-end ${
            i < cards.length - 1 ? "border-r border-[#2c3235]/60" : ""
          }`}
        >
          {/* Background image */}
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {/* Gradient overlay — strong bottom, dissolve top */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-[#111217]/55 to-[#111217]/10 transition-opacity duration-300 group-hover:from-[#111217]/95" />

          {/* Left amber accent — appears on hover */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Content */}
          <div className="relative z-10 p-7 lg:p-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-5 bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-[10px] font-mono font-semibold uppercase tracking-[0.2em]">
                {card.label}
              </span>
            </div>
            <h3 className="text-white text-xl lg:text-2xl font-black leading-tight mb-5">
              {card.title}
            </h3>
            <div className="flex items-center gap-2 text-[#8e9aad] group-hover:text-[#f59e0b] transition-colors text-xs font-mono uppercase tracking-wider">
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
