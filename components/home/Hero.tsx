import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111217]">

      {/* Full-bleed background image */}
      <Image
        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85&fit=crop"
        alt="Industrial generator operations"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-[#111217]/72" />
      {/* Left-to-right gradient — text stays legible, right side shows photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111217]/95 via-[#111217]/60 to-[#111217]/20" />
      {/* Subtle Grafana grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Left amber accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f59e0b]" />

      {/* Ghost watermark word */}
      <div
        className="text-stroke-amber absolute bottom-0 left-0 leading-none select-none pointer-events-none whitespace-nowrap"
        style={{ fontSize: "22vw", opacity: 0.035 }}
        aria-hidden
      >
        PROTECK
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-28">
        <div className="max-w-3xl">

          {/* Overline */}
          <div className="animate-fade-up flex items-center gap-3 mb-8">
            <span className="text-[#f59e0b] text-[11px] font-mono font-semibold uppercase tracking-[0.25em]">
              Papua New Guinea&apos;s Industrial Power Experts
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay font-black tracking-tight leading-tight mb-8">
            <span className="block text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-[#d0d0d0]">Powering </span>
              <span className="text-[#f59e0b]">Industry.</span>
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-[#d0d0d0]">Building </span>
              <span className="text-[#f59e0b]">Communities.</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up-delay-2 text-[#8e9aad] text-lg sm:text-xl leading-relaxed max-w-xl mb-12">
            SK Proteck delivers world-class generator services, maintenance, and industrial power solutions across Papua New Guinea — while building schools in Gulf Province.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <button className="group inline-flex items-center gap-3 h-14 px-10 bg-[#f59e0b] text-[#111217] text-sm font-black uppercase tracking-[0.15em] hover:bg-[#d97706] transition-colors">
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </Link>
            <Link href="/projects">
              <button className="inline-flex items-center gap-3 h-14 px-10 border border-[#3d4450] text-[#8e9aad] text-sm font-semibold uppercase tracking-[0.15em] hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors">
                View Projects
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom metrics panel — Grafana style, pinned bottom-left */}
        <div className="absolute bottom-10 left-6 sm:left-10 lg:left-14">
          <div className="flex divide-x divide-[#2c3235] border border-[#2c3235] bg-[#111217]/80 backdrop-blur-sm">
            {[
              { value: "15+", label: "Years" },
              { value: "200+", label: "Generators" },
              { value: "3", label: "Schools" },
              { value: "100%", label: "Delivery" },
            ].map(({ value, label }) => (
              <div key={label} className="px-5 py-3 text-center">
                <p className="text-[#f59e0b] font-black text-xl leading-none tabular-nums">{value}</p>
                <p className="text-[#5a6374] text-[10px] font-mono uppercase tracking-wider mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live status chip — top right */}
      <div className="absolute top-6 right-6 sm:right-10 flex items-center gap-2 bg-[#1f2329]/80 backdrop-blur-sm border border-[#2c3235] px-3 py-2">
        <Circle className="w-1.5 h-1.5 fill-[#73bf69] text-[#73bf69]" style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }} />
        <span className="text-[#73bf69] text-[10px] font-mono font-semibold uppercase tracking-wider">
          LIVE — 24/7 Operations
        </span>
      </div>

      {/* Scroll indicator — right side */}
      <div className="absolute right-6 sm:right-10 bottom-10 flex flex-col items-center gap-2 hidden sm:flex">
        <span className="text-[#5a6374] text-[9px] font-mono uppercase tracking-[0.2em] [writing-mode:vertical-lr]">Scroll</span>
        <div className="relative w-px h-16 bg-[#2c3235] overflow-hidden">
          <div
            className="absolute w-full bg-[#f59e0b]"
            style={{
              height: "30%",
              animation: "scroll-dot 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
