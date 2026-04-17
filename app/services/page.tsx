import { Filter, Droplets, Wrench, BarChart2, School, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";

const services = [
  {
    icon: Filter,
    title: "Generator Filtering",
    tag: "Core Service",
    description: "Contaminated fuel and air are the leading causes of generator failure. Our comprehensive filtration services protect your investment and extend equipment life.",
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
    description: "A clean generator runs cooler, more efficiently, and lasts longer. Our deep-clean protocols remove carbon buildup, corrosion, and debris from all major components.",
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
    description: "Engine lubrication is critical to generator longevity. SK Proteck provides full oil lifecycle management — from analysis to change to optimized lubrication schedules.",
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
    description: "From scheduled preventive maintenance to emergency breakdown repair, our certified technicians keep your generators running when you need them most.",
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
    description: "Make informed decisions about your power infrastructure. SK Proteck's engineering team provides energy audits, capacity planning, and regulatory compliance guidance.",
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
    description: "SK Proteck is a registered government contractor with a proven track record in community infrastructure. Our school projects in Gulf Province stand as testament to our construction capability.",
    features: [
      "School and educational facility construction",
      "Government contract execution",
      "Community consultation and engagement",
      "Sustainable material sourcing",
      "Handover and defects liability management",
    ],
  },
];

const steps = [
  { step: "01", title: "Enquiry", desc: "Contact us via phone, email, or our website form." },
  { step: "02", title: "Assessment", desc: "We visit your site and assess your generator and power needs." },
  { step: "03", title: "Proposal", desc: "You receive a detailed scope and fixed price quotation." },
  { step: "04", title: "Delivery", desc: "Our team executes — on time, with full reporting." },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <section className="bg-[#1a1a1a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "Services" }]} />
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Service Catalogue</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mt-2 mb-4">
              Complete Industrial <span className="text-[#dc2626]">Power Services</span>
            </h1>
            <p className="text-white/60 text-sm leading-relaxed">
              SK Proteck provides end-to-end generator and industrial power services, backed by 15+ years of field experience across Papua New Guinea.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-white border border-gray-200 rounded-xl hover:border-[#dc2626]/30 hover:shadow-sm transition-all overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#dc2626]/10 border border-[#dc2626]/20">
                        <Icon className="w-4 h-4 text-[#dc2626]" />
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-[#dc2626]/30 bg-[#dc2626]/5 text-[#dc2626]">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#1a1a2a] mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-1.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-gray-500">
                          <CheckCircle className="w-3 h-3 text-[#dc2626] shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-8 border-b border-gray-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">How We Work</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Our Service Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={step.step} className="relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-all">
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 z-10" />
                )}
                <div className="text-4xl font-black text-[#dc2626]/15 mb-3 font-mono">{step.step}</div>
                <h3 className="font-bold text-[#1a1a2a] text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1a1a] rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Get Started</span>
              <h2 className="text-xl font-bold text-white mt-1 mb-1">Need a Service? Let&apos;s Talk.</h2>
              <p className="text-white/50 text-sm">Request a free site assessment or quote from our engineering team today.</p>
            </div>
            <Link href="/contact" className="shrink-0">
              <button className="group inline-flex items-center gap-2 h-10 px-6 bg-[#dc2626] text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-[#b91c1c] transition-colors">
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
