import { Wrench, School, CheckCircle, ArrowRight, HardHat, Layers } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";

const services = [
  {
    icon: HardHat,
    title: "Civil Construction",
    tag: "Core Service",
    description: "Full-scope civil construction from site preparation to structural completion. We deliver quality builds on time and within budget across Papua New Guinea.",
    features: [
      "Site clearing and preparation",
      "Foundation and footing works",
      "Structural block and masonry",
      "Roofing and cladding",
      "External paving and pathways",
    ],
  },
  {
    icon: Layers,
    title: "Facilities & Infrastructure",
    tag: "Core Service",
    description: "End-to-end delivery of essential community facilities including water supply, sanitation, electrical systems, and access infrastructure.",
    features: [
      "Water supply and reticulation",
      "Ablution and sanitation facilities",
      "Electrical and solar installation",
      "Rainwater harvesting systems",
      "Site access and drainage works",
    ],
  },
  {
    icon: Wrench,
    title: "Project Management",
    tag: "Full Service",
    description: "Dedicated project management from scoping through to handover. We ensure every build is delivered on schedule, within budget, and to specification.",
    features: [
      "Scope and feasibility assessment",
      "Programme scheduling and reporting",
      "Quality assurance and inspections",
      "Stakeholder and community engagement",
      "Defects liability and handover management",
    ],
  },
  {
    icon: School,
    title: "Community Projects",
    tag: "Govt. Contracted",
    description: "SK Petroteck is a registered government contractor with a proven track record in community infrastructure. Our school projects in Gulf Province stand as testament to our capability.",
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
  { step: "02", title: "Assessment", desc: "We visit your site and assess your construction and infrastructure needs." },
  { step: "03", title: "Proposal", desc: "You receive a detailed scope and fixed price quotation." },
  { step: "04", title: "Delivery", desc: "Our team executes — on time, with full reporting." },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <section className="bg-[#0f172a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "Services" }]} />
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Service Catalogue</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mt-2 mb-4">
              Construction & <span className="text-[#dc2626]">Infrastructure Services</span>
            </h1>
            <p className="text-white/60 text-sm leading-relaxed">
              SK Petroteck Limited provides end-to-end construction and infrastructure services, backed by 15+ years of experience delivering community projects across Papua New Guinea.
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
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#dc2626]/10 border border-[#dc2626]/20">
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

    </div>
  );
}
