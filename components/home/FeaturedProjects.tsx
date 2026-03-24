import Link from "next/link";
import { MapPin, Calendar, Building2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Kerema Primary School",
    location: "Eastern Gulf Province",
    year: "2024",
    scope: "8 Classrooms",
    description:
      "A fully equipped primary school providing modern educational facilities for the Kerema community, funded under the Open Member for Kerema initiative.",
    tag: "Completed",
  },
  {
    name: "Malalaua Community School",
    location: "Eastern Gulf Province",
    year: "2024",
    scope: "6 Classrooms + Library",
    description:
      "Built with an integrated library wing, this community school serves students from surrounding villages in the Malalaua district.",
    tag: "Completed",
  },
  {
    name: "Kikori District School",
    location: "Eastern Gulf Province",
    year: "2025",
    scope: "10 Classrooms + Admin Block",
    description:
      "The largest of the three projects, featuring a full administrative block and ten modern classrooms designed for the Kikori district's growing student population.",
    tag: "Completed",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">Featured Work</span>
            <h2 className="text-4xl font-black text-[#1a1a2e] mt-2 mb-3">
              Schools That Changed a Province
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Contracted by the Open Member for Kerema, SK Proteck successfully delivered three school projects in Eastern Gulf Province, PNG.
            </p>
          </div>
          <Link href="/projects" className="shrink-0">
            <Button variant="dark" size="lg" className="group">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="group relative bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Number accent */}
              <div className="absolute top-4 right-4 text-7xl font-black text-white/5 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Top amber stripe */}
              <div className="h-1.5 bg-[#f59e0b]" />

              <div className="p-6 pt-5">
                <Badge variant="default" className="mb-4 text-xs">
                  {project.tag}
                </Badge>

                <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5 text-[#f59e0b]" />
                    Completed {project.year}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Building2 className="w-3.5 h-3.5 text-[#f59e0b]" />
                    {project.scope}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
