import { ShieldCheck, Clock, Users, ThumbsUp, Quote } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Certified Technicians",
    desc: "All engineers professionally certified and trained to international generator service standards.",
    color: "#dc2626",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Support",
    desc: "Power failures don't keep business hours. Our rapid response team is available around the clock.",
    color: "#dc2626",
  },
  {
    icon: Users,
    title: "Government Trusted",
    desc: "Selected by the Open Member for Kerema for critical school construction in Gulf Province.",
    color: "#dc2626",
  },
  {
    icon: ThumbsUp,
    title: "Guaranteed Quality",
    desc: "Every project and service is backed by our quality guarantee and transparent reporting.",
    color: "#dc2626",
  },
];

const testimonials = [
  {
    quote: "SK Proteck delivered our Kerema Primary School on time and above expectations. Their professionalism was outstanding.",
    author: "Office of the Open Member for Kerema",
    role: "Gulf Province, Papua New Guinea",
    tag: "Construction Client",
    tagColor: "#dc2626",
  },
  {
    quote: "Our generator maintenance contract with SK Proteck has reduced downtime by over 80%. They are genuinely reliable.",
    author: "Industrial Client",
    role: "Port Moresby Operations",
    tag: "Maintenance Client",
    tagColor: "#dc2626",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white border-b border-gray-200">

      {/* Trust points */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="mb-7">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[#dc2626] text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">Why SK Proteck</span>
          </div>
          <h2 className="text-xl lg:text-2xl font-black text-[#1a1a2a] tracking-tight">
            Built on Trust &amp; <span className="text-[#dc2626]">Results</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white border border-gray-200 px-5 py-4 flex items-start gap-4"
                style={{ borderLeft: "3px solid #dc2626" }}
              >
                <Quote className="w-4 h-4 text-[#dc2626]/30 shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-gray-500 text-xs leading-relaxed italic mb-3">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[#1a1a2a] font-bold text-xs">{t.author}</p>
                      <p className="text-gray-400 text-[10px] font-mono">{t.role}</p>
                    </div>
                    <span
                      className="text-[9px] font-mono px-2 py-0.5 border whitespace-nowrap shrink-0"
                      style={{ color: t.tagColor, borderColor: `${t.tagColor}40`, backgroundColor: `${t.tagColor}10` }}
                    >
                      {t.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
