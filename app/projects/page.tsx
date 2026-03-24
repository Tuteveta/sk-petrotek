import { MapPin, Calendar, Building2, CheckCircle, Users, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ProjectsChart from "@/components/projects/ProjectsChart";

const projects = [
  {
    id: "01",
    name: "Kerema Primary School",
    location: "Kerema, Eastern Gulf Province",
    year: "2024",
    scope: "8 Classrooms",
    status: "Completed",
    contract: "Open Member for Kerema",
    description:
      "Delivered a fully equipped 8-classroom primary school facility for the Kerema community. The project included classroom blocks, ablution facilities, a water supply system, and paved access pathways. Construction was completed within schedule under the Open Member for Kerema&apos;s education development initiative.",
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
    description:
      "A community school featuring six modern classrooms and an integrated library wing — a first for the Malalaua district. The library provides a dedicated study and reading space, greatly enhancing educational outcomes. SK Proteck collaborated closely with local community leaders throughout the build.",
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
    description:
      "The largest of the three projects, the Kikori District School features ten classrooms and a full administrative block. Designed to serve the growing student population of the Kikori district, this facility sets a new benchmark for rural education infrastructure in Gulf Province, Papua New Guinea.",
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
    <div className="bg-[#f8fafc]">
      {/* Hero */}
      <section className="bg-[#1a1a2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">Our Projects</span>
            <h1 className="text-5xl font-black text-white mt-3 mb-6">
              Building Futures in Gulf Province
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Contracted by the Open Member for Kerema, SK Proteck has successfully delivered three school construction projects across Eastern Gulf Province — providing world-class educational facilities to PNG&apos;s regional communities.
            </p>
          </div>
          {/* Quick metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <p className="text-4xl font-black text-[#f59e0b]">{m.value}</p>
                <p className="text-gray-300 text-sm mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D3 Chart */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">At a Glance</span>
            <h2 className="text-3xl font-black text-[#1a1a2e] mt-2 mb-2">Project Completion Overview</h2>
            <p className="text-gray-500 text-sm">All three school projects achieved 100% completion</p>
          </div>
          <div className="bg-[#f8fafc] rounded-2xl border border-gray-200 p-6">
            <ProjectsChart />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Left accent + number */}
                  <div className="bg-[#1a1a2e] lg:w-64 p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-7xl font-black text-[#f59e0b]/20 leading-none">{project.id}</span>
                      <Badge variant="default" className="mt-4 block w-fit">{project.status}</Badge>
                    </div>
                    <div className="mt-8 space-y-3">
                      <div className="flex items-start gap-2 text-gray-400 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-[#f59e0b] mt-0.5 shrink-0" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Calendar className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                        Completed {project.year}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Building2 className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                        {project.scope}
                      </div>
                      <div className="flex items-start gap-2 text-gray-400 text-xs">
                        <Award className="w-3.5 h-3.5 text-[#f59e0b] mt-0.5 shrink-0" />
                        {project.contract}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="flex-1 p-8">
                    <h3 className="text-2xl font-black text-[#1a1a2e] mb-3">{project.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                    <div>
                      <h4 className="text-sm font-bold text-[#1a1a2e] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#f59e0b]" />
                        Project Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Empowering Communities Through Construction
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-2">
            Each school built represents hundreds of students gaining access to quality education in Papua New Guinea&apos;s Gulf Province — a direct result of SK Proteck&apos;s commitment to community.
          </p>
        </div>
      </section>
    </div>
  );
}
