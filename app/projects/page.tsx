import { MapPin, Calendar, Building2, CheckCircle, Users, Award } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";

const projects = [
  {
    id: "01",
    name: "Kerema Primary School",
    location: "Kerema, Eastern Gulf Province",
    year: "2024",
    scope: "8 Classrooms",
    status: "Completed",
    contract: "Open Member for Kerema",
    description: "Delivered a fully equipped 8-classroom primary school facility for the Kerema community. The project included classroom blocks, ablution facilities, a water supply system, and paved access pathways. Construction was completed within schedule under the Open Member for Kerema's education development initiative.",
    highlights: [
      "8 fully furnished classrooms",
      "Ablution blocks and water supply",
      "External paving and pathways",
      "Electrical installation throughout",
      "Completed on time and within budget",
    ],
  },
  {
    id: "02",
    name: "Malalaua Community School",
    location: "Malalaua, Eastern Gulf Province",
    year: "2024",
    scope: "6 Classrooms + Library",
    status: "Completed",
    contract: "Open Member for Kerema",
    description: "A community school featuring six modern classrooms and an integrated library wing — a first for the Malalaua district. The library provides a dedicated study and reading space, greatly enhancing educational outcomes. SK Proteck collaborated closely with local community leaders throughout the build.",
    highlights: [
      "6 modern classroom blocks",
      "Dedicated library wing",
      "Community consultation process",
      "Solar lighting integration",
      "Local materials and labour sourced",
    ],
  },
  {
    id: "03",
    name: "Kikori District School",
    location: "Kikori, Eastern Gulf Province",
    year: "2025",
    scope: "10 Classrooms + Admin Block",
    status: "Completed",
    contract: "Open Member for Kerema",
    description: "The largest of the three projects, the Kikori District School features ten classrooms and a full administrative block. Designed to serve the growing student population of the Kikori district, this facility sets a new benchmark for rural education infrastructure in Gulf Province.",
    highlights: [
      "10 large classroom blocks",
      "Full administration block",
      "Staff offices and meeting rooms",
      "Generator-backed power system",
      "Rainwater harvesting system",
    ],
  },
];

const metrics = [
  { label: "Total Projects", value: "3" },
  { label: "Classrooms Built", value: "24" },
  { label: "Province Served", value: "Gulf" },
  { label: "Delivery Rate", value: "100%" },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <section className="bg-[#1a1a1a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "Projects" }]} />
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Our Projects</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mt-2 mb-4">
              Building Futures <span className="text-[#dc2626]">in Gulf Province</span>
            </h1>
            <p className="text-white/60 text-sm leading-relaxed">
              Contracted by the Open Member for Kerema, SK Proteck has successfully delivered three school construction projects across Eastern Gulf Province.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-2xl font-black text-[#dc2626]">{m.value}</p>
                <p className="text-white/40 text-xs font-mono mt-1 uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Project Details</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Completed Projects</h2>
          </div>
          <div className="space-y-5">
            {projects.map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm transition-all" style={{ borderTop: "3px solid #dc2626" }}>
                <div className="flex flex-col lg:flex-row">
                  {/* Left panel */}
                  <div className="bg-[#f8fafc] lg:w-52 p-6 flex flex-col justify-between border-r border-gray-200">
                    <div>
                      <span className="text-5xl font-black text-gray-100 leading-none select-none">{project.id}</span>
                      <div className="flex items-center gap-1.5 mt-3 bg-[#dc2626]/10 border border-[#dc2626]/20 rounded-lg px-2 py-1 w-fit">
                        <CheckCircle className="w-3 h-3 text-[#dc2626]" />
                        <span className="text-xs text-[#dc2626] font-mono">{project.status}</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-start gap-2 text-xs text-gray-500">
                        <MapPin className="w-3 h-3 text-[#dc2626] mt-0.5 shrink-0" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3 text-[#dc2626] shrink-0" />
                        Completed {project.year}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Building2 className="w-3 h-3 text-[#dc2626] shrink-0" />
                        {project.scope}
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-500">
                        <Award className="w-3 h-3 text-[#dc2626] mt-0.5 shrink-0" />
                        {project.contract}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <h3 className="text-base font-bold text-[#1a1a2a] mb-3">{project.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>
                    <div>
                      <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Users className="w-3 h-3 text-[#dc2626]" />
                        Project Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
                            <CheckCircle className="w-3 h-3 text-[#dc2626] shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1a1a] rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-3">
              Empowering Communities Through Construction
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-sm leading-relaxed">
              Each school built represents hundreds of students gaining access to quality education in Papua New Guinea&apos;s Gulf Province — a direct result of SK Proteck&apos;s commitment to community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
