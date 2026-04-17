import { Target, Eye, Heart, Shield, Zap, Users, Award, TrendingUp } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";

const values = [
  { icon: Shield, title: "Integrity", desc: "Full transparency and the highest professional standards in every engagement." },
  { icon: Zap, title: "Excellence", desc: "Every generator serviced, every structure built — delivered with precision and uncompromising quality." },
  { icon: Heart, title: "Community", desc: "Business success should translate into community development. Our school projects are a direct expression of this." },
  { icon: TrendingUp, title: "Reliability", desc: "Industrial operations depend on uptime. We ensure your power systems — and our commitments — never fail." },
];

const team = [
  { name: "Samuel K.", role: "Founder & CEO", initials: "SK" },
  { name: "Peter Oma", role: "Chief Engineer", initials: "PO" },
  { name: "Ruth Kini", role: "Project Manager", initials: "RK" },
  { name: "James Tari", role: "Lead Technician", initials: "JT" },
];

const milestones = [
  { year: "2009", event: "SK Proteck founded in Port Moresby, PNG" },
  { year: "2012", event: "First major industrial generator contract secured" },
  { year: "2015", event: "Expanded service fleet to serve nationwide clients" },
  { year: "2020", event: "Awarded government infrastructure contracts" },
  { year: "2023", event: "Contracted by Open Member for Kerema — school projects begin" },
  { year: "2025", event: "Third school project completed in Kikori District" },
];

const certs = [
  { icon: Award, label: "ISO 9001 Compliant", sub: "Quality Management" },
  { icon: Shield, label: "PNG IPA Registered", sub: "Business Registration" },
  { icon: Users, label: "Govt. Contractor", sub: "Kerema District" },
  { icon: Zap, label: "Generator Certified", sub: "Multi-Brand Expertise" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <section className="bg-[#1a1a1a] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "About" }]} />
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">About SK Proteck</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mt-2 mb-4">
              15 Years of Power. <span className="text-[#dc2626]">A Legacy of Community.</span>
            </h1>
            <p className="text-white/60 text-sm leading-relaxed">
              Founded in Port Moresby, SK Proteck has grown from a specialist generator servicing firm into Papua New Guinea&apos;s most trusted industrial power and community development partner.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-xl p-7" style={{ borderLeft: "3px solid #dc2626" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#dc2626]/10 border border-[#dc2626]/20 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-[#dc2626]" />
                </div>
                <h2 className="text-sm font-bold text-[#1a1a2a] uppercase tracking-wider">Our Mission</h2>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm">
                To deliver world-class generator services and industrial power solutions across Papua New Guinea, while actively investing in the communities that sustain us.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-7" style={{ borderLeft: "3px solid #1a1a1a" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#1a1a1a]/10 border border-[#1a1a1a]/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-4 h-4 text-[#1a1a1a]" />
                </div>
                <h2 className="text-sm font-bold text-[#1a1a2a] uppercase tracking-wider">Our Vision</h2>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm">
                To be the most trusted industrial services provider in the Pacific — recognised not just for technical excellence, but for the schools built, communities powered, and lives changed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 border-b border-gray-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Our Journey</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Company Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 md:left-1/2" />
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                    <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 inline-block w-full md:max-w-sm">
                      <p className="text-gray-500 text-xs">{m.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:static md:shrink-0 w-8 h-8 bg-[#dc2626] rounded-lg flex items-center justify-center z-10">
                    <span className="text-white font-black text-[9px] text-center leading-tight">{m.year}</span>
                  </div>
                  <div className="hidden md:flex flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#dc2626]/30 hover:shadow-sm transition-all"
                  style={{ borderTop: "3px solid #dc2626" }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 bg-[#dc2626]/10 border border-[#dc2626]/20">
                    <Icon className="w-4 h-4 text-[#dc2626]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1a1a2a] mb-2">{v.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 border-b border-gray-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">The People</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member) => (
              <div key={member.name} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-[#dc2626]/30 hover:shadow-sm transition-all">
                <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center mx-auto mb-4 text-[#dc2626] font-black text-base">
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#1a1a2a] text-sm">{member.name}</h3>
                <p className="text-xs text-gray-400 font-mono mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[#dc2626] text-xs font-mono uppercase tracking-widest">Credentials</span>
            <h2 className="text-xl font-bold text-[#1a1a2a] mt-1">Certifications & Partnerships</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certs.map((cert) => {
              const Icon = cert.icon;
              return (
                <div key={cert.label} className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:border-[#dc2626]/30 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 bg-[#dc2626]/10 border border-[#dc2626]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[#dc2626]" />
                  </div>
                  <p className="text-[#1a1a2a] font-semibold text-xs">{cert.label}</p>
                  <p className="text-gray-400 text-xs font-mono mt-1">{cert.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
