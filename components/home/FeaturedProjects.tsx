import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Building2, ArrowRight, CheckCircle } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "Kerema Primary School",
    location: "Kerema, Eastern Gulf Province",
    year: "2024",
    scope: "8 Classrooms",
    description: "A fully equipped primary school providing modern educational facilities for the Kerema community, funded under the Open Member for Kerema initiative. Delivered on schedule with ablution facilities, water supply, and electrical installation.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80&fit=crop",
    href: "/projects",
  },
  {
    id: "02",
    name: "Malalaua Community School",
    location: "Malalaua, Eastern Gulf Province",
    year: "2024",
    scope: "6 Classrooms + Library",
    description: "Built with an integrated library wing — a first for Malalaua district. Solar lighting, local materials, and community consultation defined this landmark school that serves students from surrounding villages.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80&fit=crop",
    href: "/projects",
  },
  {
    id: "03",
    name: "Kikori District School",
    location: "Kikori, Eastern Gulf Province",
    year: "2025",
    scope: "10 Classrooms + Admin Block",
    description: "The largest project in SK Proteck's history. Ten modern classrooms and a full administrative block — generator-backed power, rainwater harvesting, and a facility that sets a new standard for rural education in PNG.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&fit=crop",
    href: "/projects",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#f8fafc] border-b border-gray-200">

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#16a34a] text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">
                Featured Work
              </span>
            </div>
            <h2 className="text-xl lg:text-2xl font-black text-[#1a1a2a] tracking-tight">
              Schools That Changed <span className="text-[#f59e0b]">a Province.</span>
            </h2>
            <p className="text-gray-500 text-sm font-mono mt-2">
              Contracted by the Open Member for Kerema — Eastern Gulf Province, PNG
            </p>
          </div>
          <Link href="/projects" className="shrink-0">
            <button className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-[#16a34a] transition-colors">
              View all projects
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>

      {/* Alternating project rows */}
      {projects.map((project, i) => (
        <div
          key={project.id}
          className="border-t border-gray-200 grid grid-cols-1 lg:grid-cols-2 min-h-[480px]"
        >
          {/* Image column */}
          <div className={`relative overflow-hidden h-[300px] lg:h-auto ${i % 2 === 1 ? "lg:order-2" : ""}`}>
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20" />

            {/* Status chip over image */}
            <div className="absolute bottom-5 left-5 bg-[#111217]/85 backdrop-blur-sm border border-white/10 px-4 py-3">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-3 h-3 text-[#73bf69]" />
                <span className="text-[#73bf69] text-[10px] font-mono uppercase tracking-wider">Status: Completed</span>
              </div>
              <span className="text-[#f59e0b] text-[10px] font-mono">Year: {project.year}</span>
            </div>
          </div>

          {/* Text column */}
          <div className={`relative bg-white border-l border-gray-200 p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? "lg:border-l-0 lg:border-r border-r-gray-200" : ""}`}>
            {/* Ghost number */}
            <div
              className="absolute right-8 top-6 text-gray-100 font-black leading-none select-none pointer-events-none"
              style={{ fontSize: "clamp(80px, 10vw, 140px)" }}
              aria-hidden
            >
              {project.id}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-5 bg-[#16a34a]" />
                <span className="text-[#16a34a] text-[10px] font-mono uppercase tracking-[0.2em]">Community Project</span>
              </div>

              <h3 className="text-lg lg:text-xl font-black text-[#1a1a2a] tracking-tight leading-tight mb-4">
                {project.name}
              </h3>

              {/* Meta strip */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#f59e0b]" />
                  <span className="text-sm text-gray-600">{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#f59e0b]" />
                  <span className="text-sm text-gray-600">Completed {project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#f59e0b]" />
                  <span className="text-sm text-gray-600">{project.scope}</span>
                </div>
              </div>

              <p className="text-gray-500 text-base leading-relaxed max-w-md mb-8">
                {project.description}
              </p>

              {/* Status chip */}
              <div className="flex items-center gap-2 bg-[#16a34a]/10 border border-[#16a34a]/30 w-fit px-4 py-2 mb-8">
                <CheckCircle className="w-3.5 h-3.5 text-[#16a34a]" />
                <span className="text-xs font-mono text-[#16a34a] uppercase tracking-wider">Project Complete</span>
              </div>

              <Link href={project.href}>
                <button className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gray-400 hover:text-[#f59e0b] transition-colors">
                  View project details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
