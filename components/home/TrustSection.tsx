import Link from "next/link";
import { ShieldCheck, Clock, Users, ThumbsUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Certified Technicians",
    desc: "All our engineers are professionally certified and trained to international generator service standards.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Support",
    desc: "Power failures don't keep business hours. Our rapid response team is available around the clock.",
  },
  {
    icon: Users,
    title: "Government Trusted",
    desc: "Selected by the Open Member for Kerema for critical school construction in Gulf Province.",
  },
  {
    icon: ThumbsUp,
    title: "Guaranteed Quality",
    desc: "Every project and service is backed by our quality guarantee and transparent reporting.",
  },
];

const testimonials = [
  {
    quote: "SK Proteck delivered our Kerema Primary School on time and above expectations. Their professionalism was outstanding.",
    author: "Office of the Open Member for Kerema",
    role: "Gulf Province, Papua New Guinea",
  },
  {
    quote: "Our generator maintenance contract with SK Proteck has reduced downtime by over 80%. They are genuinely reliable.",
    author: "Industrial Client",
    role: "Port Moresby Operations",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Trust Us */}
        <div className="text-center mb-14">
          <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">Why SK Proteck</span>
          <h2 className="text-4xl font-black text-[#1a1a2e] mt-2 mb-4">Built on Trust & Results</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            For over 15 years, we&apos;ve built our reputation on reliability, craftsmanship, and community commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-11 h-11 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{point.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="bg-white rounded-2xl p-8 border border-gray-200 border-l-4 border-l-[#f59e0b]"
            >
              <p className="text-gray-700 text-base leading-relaxed italic mb-5">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <p className="text-[#1a1a2e] font-bold text-sm">{t.author}</p>
                <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#1a1a2e] rounded-2xl px-8 py-12 text-center">
          <h3 className="text-3xl font-black text-white mb-3">
            Ready to Power Your Business?
          </h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Contact SK Proteck today for a free consultation on generator services, maintenance contracts, or project partnerships.
          </p>
          <Link href="/contact">
            <Button size="xl" className="group font-bold">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
