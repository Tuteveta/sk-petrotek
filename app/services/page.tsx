import { Filter, Droplets, Wrench, BarChart2, School, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/layout/Breadcrumb";

const services = [
  {
    icon: Filter,
    title: "Generator Filtering",
    tag: "Core Service",
    tagVariant: "default" as const,
    description:
      "Contaminated fuel and air are the leading causes of generator failure. Our comprehensive filtration services protect your investment and extend equipment life.",
    features: [
      "Primary & secondary fuel filter replacement",
      "High-performance air filtration systems",
      "Fuel polishing and contamination removal",
      "Custom filtration schedules by load profile",
      "Filter condition monitoring and reporting",
    ],
  },
  {
    icon: Droplets,
    title: "Generator Cleaning",
    tag: "Core Service",
    tagVariant: "default" as const,
    description:
      "A clean generator runs cooler, more efficiently, and lasts longer. Our deep-clean protocols remove carbon buildup, corrosion, and debris from all major components.",
    features: [
      "Full engine and alternator deep clean",
      "Corrosion treatment and protection coating",
      "Cooling system flush and antifreeze service",
      "Enclosure and panel cleaning",
      "Post-clean inspection and report",
    ],
  },
  {
    icon: Droplets,
    title: "Oil Services",
    tag: "Core Service",
    tagVariant: "default" as const,
    description:
      "Engine lubrication is critical to generator longevity. SK Proteck provides full oil lifecycle management — from analysis to change to optimized lubrication schedules.",
    features: [
      "Oil sampling and laboratory analysis",
      "Full oil and filter change service",
      "Lubrication management programs",
      "Coolant and hydraulic fluid service",
      "Oil consumption monitoring",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    tag: "24/7 Available",
    tagVariant: "success" as const,
    description:
      "From scheduled preventive maintenance to emergency breakdown repair, our certified technicians keep your generators running when you need them most.",
    features: [
      "Scheduled preventive maintenance contracts",
      "Emergency callout and repair — 24/7",
      "Full load bank testing and commissioning",
      "Governor, AVR, and control panel repair",
      "Exhaust, cooling, and fuel system repair",
    ],
  },
  {
    icon: BarChart2,
    title: "Power Consulting",
    tag: "Advisory",
    tagVariant: "secondary" as const,
    description:
      "Make informed decisions about your power infrastructure. SK Proteck's engineering team provides energy audits, capacity planning, and regulatory compliance guidance.",
    features: [
      "Site energy audit and assessment",
      "Generator sizing and capacity planning",
      "Fuel consumption optimization",
      "PNG regulatory compliance review",
      "Power system design recommendations",
    ],
  },
  {
    icon: School,
    title: "Community Projects",
    tag: "Govt. Contracted",
    tagVariant: "dark" as const,
    description:
      "SK Proteck is a registered government contractor with a proven track record in community infrastructure. Our school projects in Gulf Province stand as testament to our construction capability.",
    features: [
      "School and educational facility construction",
      "Government contract execution",
      "Community consultation and engagement",
      "Sustainable material sourcing",
      "Handover and defects liability management",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f8fafc]">
      {/* Page Hero */}
      <section className="bg-[#1a1a2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "Services" }]} />
            <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">What We Offer</span>
            <h1 className="text-5xl font-black text-white mt-3 mb-6">
              Complete Industrial Power Services
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              SK Proteck provides end-to-end generator and industrial power services, backed by 15+ years of field experience across Papua New Guinea.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="group overflow-hidden">
                  {/* Top accent bar */}
                  <div className="h-1 bg-[#f59e0b]" />
                  <CardContent className="pt-6 pb-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#1a1a2e] rounded-xl flex items-center justify-center group-hover:bg-[#f59e0b] transition-colors">
                        <Icon className="w-6 h-6 text-[#f59e0b] group-hover:text-[#1a1a2e] transition-colors" />
                      </div>
                      <Badge variant={service.tagVariant}>{service.tag}</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                    <ul className="space-y-2.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">How We Work</span>
            <h2 className="text-4xl font-black text-[#1a1a2e] mt-2 mb-4">Our Service Process</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Simple, transparent, and professional — from first call to final report.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Enquiry", desc: "Contact us via phone, email, or our website form." },
              { step: "02", title: "Assessment", desc: "We visit your site and assess your generator and power needs." },
              { step: "03", title: "Proposal", desc: "You receive a detailed scope and fixed price quotation." },
              { step: "04", title: "Delivery", desc: "Our team executes — on time, with full reporting." },
            ].map((step) => (
              <div key={step.step} className="relative text-center p-6 bg-[#f8fafc] rounded-xl border border-gray-100">
                <div className="text-5xl font-black text-[#f59e0b]/20 mb-2">{step.step}</div>
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Need a Service? Let&apos;s Talk.</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Request a free site assessment or quote from our engineering team today.</p>
          <Link href="/contact">
            <Button size="xl" className="group font-bold">
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
