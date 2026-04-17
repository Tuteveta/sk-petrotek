"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80&fit=crop",
    badge: "Papua New Guinea's Industrial Power Experts",
    headline: (
      <>
        Powering Industry.{" "}
        <span className="text-[#f59e0b]">Building</span>{" "}
        Communities.
      </>
    ),
    subtext:
      "SK Petrotek delivers world-class generator services, maintenance, and industrial power solutions across Papua New Guinea — while giving back through landmark school construction projects in Gulf Province.",
    primaryCta: { label: "Our Services", href: "/services" },
    secondaryCta: { label: "View Projects", href: "/projects" },
  },
  {
    image: "https://images.unsplash.com/photo-1621905251189-08b45249be09?w=1600&q=80&fit=crop",
    badge: "Generator Services & Maintenance",
    headline: (
      <>
        Expert Generator{" "}
        <span className="text-[#f59e0b]">Servicing</span>{" "}
        Nationwide.
      </>
    ),
    subtext:
      "From routine preventive maintenance to full overhauls, our certified technicians keep your generators running at peak performance — minimising downtime and protecting your operations across PNG.",
    primaryCta: { label: "Generator Services", href: "/services" },
    secondaryCta: { label: "Get a Quote", href: "/contact" },
  },
  {
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80&fit=crop",
    badge: "Industrial Power & Infrastructure",
    headline: (
      <>
        Industrial Power{" "}
        <span className="text-[#f59e0b]">Solutions</span>{" "}
        You Can Trust.
      </>
    ),
    subtext:
      "Supplying, installing, and maintaining industrial power infrastructure for resource projects, commercial facilities, and remote sites throughout Papua New Guinea.",
    primaryCta: { label: "Our Capabilities", href: "/services" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80&fit=crop",
    badge: "Community & School Construction — Gulf Province",
    headline: (
      <>
        Building Schools.{" "}
        <span className="text-[#f59e0b]">Transforming</span>{" "}
        Lives.
      </>
    ),
    subtext:
      "Beyond industry, SK Petrotek invests in the future of Papua New Guinea — constructing quality school facilities in Gulf Province to give the next generation the foundation they deserve.",
    primaryCta: { label: "Our Projects", href: "/projects" },
    secondaryCta: { label: "Learn More", href: "/about" },
  },
];

const AUTOPLAY_DELAY = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent((index + slides.length) % slides.length);
      setTimeout(() => setAnimating(false), 500);
    },
    [animating]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative flex items-center overflow-hidden bg-[#1a1a2e] min-h-[85vh]">

      {/* Background images — crossfade between slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay so text stays legible */}
      <div className="absolute inset-0 bg-[#1a1a2e]/75" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Slide content */}
        <div
          key={current}
          className="max-w-4xl transition-opacity duration-500"
          style={{ opacity: animating ? 0 : 1 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/40 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" />
            <span className="text-[#f59e0b] text-sm font-medium">{slide.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            {slide.headline}
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
            {slide.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={slide.primaryCta.href}>
              <Button size="xl" className="group font-bold">
                {slide.primaryCta.label}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href={slide.secondaryCta.href}>
              <Button size="xl" variant="outline" className="font-bold">
                {slide.secondaryCta.label}
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap gap-6 items-center border-t border-white/10 pt-8">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "200+", label: "Generators Serviced" },
            { value: "3", label: "Schools Built" },
            { value: "100%", label: "Delivery Rate" },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-1 h-8 bg-[#f59e0b] rounded-full" />
              <div>
                <p className="text-white font-bold text-lg">{value}</p>
                <p className="text-gray-400 text-xs">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <div className="mt-8 flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === current ? "#f59e0b" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next slide"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors"
          >
            <ChevronRight size={18} />
          </button>

          {/* Progress bar */}
          <div className="flex-1 max-w-xs h-px bg-white/10 rounded-full overflow-hidden">
            <div
              key={current}
              className="h-full bg-[#f59e0b] rounded-full"
              style={{
                animation: `heroProgress ${AUTOPLAY_DELAY}ms linear forwards`,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}
