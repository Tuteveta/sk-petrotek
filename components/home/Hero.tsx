"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#1a1a2e]">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e]/80 to-[#1a1a2e]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/40 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" />
            <span className="text-[#f59e0b] text-sm font-medium">Papua New Guinea&apos;s Industrial Power Experts</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Powering Industry.{" "}
            <span className="text-[#f59e0b]">Building</span>{" "}
            Communities.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
            SK Proteck delivers world-class generator services, maintenance, and industrial power solutions across Papua New Guinea — while giving back through landmark school construction projects in Gulf Province.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <Button size="xl" className="group font-bold">
                Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="xl" variant="outline" className="font-bold">
                View Projects
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap gap-6 items-center border-t border-white/10 pt-8">
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-[#f59e0b] rounded-full" />
              <div>
                <p className="text-white font-bold text-lg">15+</p>
                <p className="text-gray-400 text-xs">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-[#f59e0b] rounded-full" />
              <div>
                <p className="text-white font-bold text-lg">200+</p>
                <p className="text-gray-400 text-xs">Generators Serviced</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-[#f59e0b] rounded-full" />
              <div>
                <p className="text-white font-bold text-lg">3</p>
                <p className="text-gray-400 text-xs">Schools Built</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-[#f59e0b] rounded-full" />
              <div>
                <p className="text-white font-bold text-lg">100%</p>
                <p className="text-gray-400 text-xs">Delivery Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
