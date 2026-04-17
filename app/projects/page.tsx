import { MapPin, Calendar, Building2, CheckCircle, Users, Award } from "lucide-react";
import ProjectsChart from "@/components/projects/ProjectsChart";
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
    description: "The largest of the three projects, the Kikori District School features ten classrooms and a full administrative block. Designed to serve the growing student population of the Kikori district, this facility sets a new benchmark for rural education infrastructure in Gulf Province, Papua New Guinea.",
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
  { label: "Total Projects", value: "3", color: "#f59e0b" },
  { label: "Classrooms Built", value: "24", color: "#5794f2" },
  { label: "Province Served", value: "Gulf", color: "#73bf69" },
  { label: "Delivery Rate", value: "100%", color: "#73bf69" },
];

export default function ProjectsPage() {
  return (
    <div className="bg-[#111217]">

      {/* Page Hero */}
      <section className="bg-[#161719] border-b border-[#2c3235] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "Projects" }]} />
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-5 bg-[#73bf69]" />
              <span className="text-[#73bf69] text-xs font-mono uppercase tracking-widest">Our Projects</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#d0d0d0] leading-tight mb-5">
              Building Futures<br />
              <span className="text-[#f59e0b]">in Gulf Province</span>
            </h1>
            <p className="text-[#8e9aad] text-base leading-relaxed">
              Contracted by the Open Member for Kerema, SK Proteck has successfully delivered three school construction projects across Eastern Gulf Province — providing world-class educational facilities to PNG&apos;s regional communities.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {metrics.map((m) => (
              <div key={m.label} className="bg-[#1f2329] border border-[#2c3235] rounded-sm p-5">
                <p className="text-3xl font-black" style={{ color: m.color }}>{m.value}</p>
                <p className="text-[#5a6374] text-xs font-mono mt-1 uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chart */}
      <section className="py-14 border-b border-[#2c3235]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#f59e0b]" />
              <span className="text-[#8e9aad] text-xs font-mono uppercase tracking-widest">Project Completion Overview</span>
            </div>
            <p className="text-[#5a6374] text-xs font-mono">All three school projects achieved 100% completion</p>
          </div>
          <div className="bg-[#1f2329] border border-[#2c3235] rounded-sm p-5">
            <ProjectsChart />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-14 border-b border-[#2c3235]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-5 bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-xs font-mono uppercase tracking-widest">Project Details</span>
            </div>
            <h2 className="text-2xl font-bold text-[#d0d0d0]">Completed Projects</h2>
          </div>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="bg-[#1f2329] border border-[#2c3235] rounded-sm overflow-hidden" style={{ borderTop: "3px solid #f59e0b" }}>
                <div className="flex flex-col lg:flex-row">
                  {/* Left panel */}
                  <div className="bg-[#181b1f] lg:w-56 p-6 flex flex-col justify-between border-r border-[#2c3235]">
                    <div>
                      <span className="text-6xl font-black text-[#2c3235] leading-none select-none">{project.id}</span>
                      <div className="flex items-center gap-1.5 mt-3 bg-[#73bf69]/10 border border-[#73bf69]/30 rounded-sm px-2 py-1 w-fit">
                        <CheckCircle className="w-3 h-3 text-[#73bf69]" />
                        <span className="text-xs text-[#73bf69] font-mono">{project.status}</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="flex items-start gap-2 text-xs text-[#8e9aad]">
                        <MapPin className="w-3 h-3 text-[#f59e0b] mt-0.5 shrink-0" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#8e9aad]">
                        <Calendar className="w-3 h-3 text-[#f59e0b] shrink-0" />
                        Completed {project.year}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#8e9aad]">
                        <Building2 className="w-3 h-3 text-[#f59e0b] shrink-0" />
                        {project.scope}
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[#8e9aad]">
                        <Award className="w-3 h-3 text-[#f59e0b] mt-0.5 shrink-0" />
                        {project.contract}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <h3 className="text-lg font-bold text-[#d0d0d0] mb-3">{project.name}</h3>
                    <p className="text-[#8e9aad] text-sm leading-relaxed mb-5">{project.description}</p>
                    <div>
                      <h4 className="text-xs font-mono text-[#5a6374] uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Users className="w-3 h-3 text-[#f59e0b]" />
                        Project Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-[#8e9aad]">
                            <CheckCircle className="w-3 h-3 text-[#73bf69] shrink-0 mt-0.5" />
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
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1f2329] border border-[#2c3235] border-l-[#73bf69] rounded-sm p-8 text-center" style={{ borderLeft: "3px solid #73bf69" }}>
            <h2 className="text-2xl font-bold text-[#d0d0d0] mb-3">
              Empowering Communities Through Construction
            </h2>
            <p className="text-[#8e9aad] max-w-2xl mx-auto text-sm leading-relaxed">
              Each school built represents hundreds of students gaining access to quality education in Papua New Guinea&apos;s Gulf Province — a direct result of SK Proteck&apos;s commitment to community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
