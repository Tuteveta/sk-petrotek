import Link from "next/link";
import { ShieldCheck, Clock, Users, ThumbsUp, ArrowRight, Quote } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Certified Technicians",
    desc: "All engineers professionally certified and trained to international generator service standards.",
    color: "#f59e0b",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Support",
    desc: "Power failures don't keep business hours. Our rapid response team is available around the clock.",
    color: "#1D4ED8",
  },
  {
    icon: Users,
    title: "Government Trusted",
    desc: "Selected by the Open Member for Kerema for critical school construction in Gulf Province.",
    color: "#16a34a",
  },
  {
    icon: ThumbsUp,
    title: "Guaranteed Quality",
    desc: "Every project and service is backed by our quality guarantee and transparent reporting.",
    color: "#f59e0b",
  },
];

const testimonials = [
  {
    quote: "SK Proteck delivered our Kerema Primary School on time and above expectations. Their professionalism was outstanding.",
    author: "Office of the Open Member for Kerema",
    role: "Gulf Province, Papua New Guinea",
    tag: "Construction Client",
    tagColor: "#16a34a",
  },
  {
    quote: "Our generator maintenance contract with SK Proteck has reduced downtime by over 80%. They are genuinely reliable.",
    author: "Industrial Client",
    role: "Port Moresby Operations",
    tag: "Maintenance Client",
    tagColor: "#1D4ED8",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white border-b border-gray-200">

      {/* Trust points */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[#1D4ED8] text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">Why SK Proteck</span>
          </div>
          <h2 className="text-xl lg:text-2xl font-black text-[#1a1a2a] tracking-tight">
            Built on Trust &amp; <span className="text-[#f59e0b]">Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-[#f8fafc] border border-gray-200 p-8 hover:border-gray-300 transition-colors"
                style={{ borderTop: `3px solid ${point.color}` }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6 border-2"
                  style={{ backgroundColor: `${point.color}12`, borderColor: `${point.color}40` }}
                >
                  <Icon className="w-5 h-5" style={{ color: point.color }} />
                </div>
                <h3 className="text-sm font-bold text-[#1a1a2a] mb-2">{point.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white border border-gray-200 p-10"
                style={{ borderLeft: "3px solid #f59e0b" }}
              >
                <Quote className="w-8 h-8 text-[#f59e0b]/30 mb-5" />
                <p className="text-gray-500 text-base leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[#1a1a2a] font-bold text-sm">{t.author}</p>
                    <p className="text-gray-400 text-xs font-mono mt-0.5">{t.role}</p>
                  </div>
                  <span
                    className="text-[9px] font-mono px-2 py-1 border whitespace-nowrap"
                    style={{ color: t.tagColor, borderColor: `${t.tagColor}40`, backgroundColor: `${t.tagColor}10` }}
                  >
                    {t.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-bleed amber CTA */}
      <div className="bg-[#f59e0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#111217]/40" />
              <span className="text-[#111217]/60 text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">Get Started</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-black text-[#111217] tracking-tight leading-tight">
              Ready to Power Your Business?
            </h3>
            <p className="text-[#111217]/70 text-sm leading-relaxed mt-3">
              Contact SK Proteck today for a free consultation on generator services, maintenance contracts, or project partnerships.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact">
              <button className="group inline-flex items-center gap-3 h-14 px-10 bg-[#111217] text-[#f59e0b] text-sm font-black uppercase tracking-[0.15em] hover:bg-[#1f2329] transition-colors">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </Link>
            <Link href="/services">
              <button className="inline-flex items-center gap-3 h-14 px-10 border-2 border-[#111217]/30 text-[#111217] text-sm font-semibold uppercase tracking-[0.15em] hover:border-[#111217] transition-colors">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
