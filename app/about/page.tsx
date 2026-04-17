import { Target, Eye, Heart, Shield, Zap, Users, Award, TrendingUp } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";

const values = [
  { icon: Shield, title: "Integrity", desc: "Full transparency and the highest professional standards in every engagement.", color: "#f59e0b" },
  { icon: Zap, title: "Excellence", desc: "Every generator serviced, every structure built — delivered with precision and uncompromising quality.", color: "#5794f2" },
  { icon: Heart, title: "Community", desc: "Business success should translate into community development. Our school projects are a direct expression of this.", color: "#f2495c" },
  { icon: TrendingUp, title: "Reliability", desc: "Industrial operations depend on uptime. We ensure your power systems — and our commitments — never fail.", color: "#73bf69" },
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
    <div className="bg-[#111217]">

      {/* Page Hero */}
      <section className="bg-[#161719] border-b border-[#2c3235] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "About" }]} />
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-5 bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-xs font-mono uppercase tracking-widest">About SK Proteck</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#d0d0d0] leading-tight mb-5">
              15 Years of Power.<br />
              <span className="text-[#f59e0b]">A Legacy of Community.</span>
            </h1>
            <p className="text-[#8e9aad] text-base leading-relaxed">
              Founded in Port Moresby, SK Proteck has grown from a specialist generator servicing firm into Papua New Guinea&apos;s most trusted industrial power and community development partner. Our work spans remote industrial sites to rural school buildings.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 border-b border-[#2c3235]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1f2329] border border-[#2c3235] border-l-[#f59e0b] rounded-sm p-8" style={{ borderLeft: "3px solid #f59e0b" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-sm flex items-center justify-center">
                  <Target className="w-4 h-4 text-[#f59e0b]" />
                </div>
                <h2 className="text-base font-bold text-[#d0d0d0] uppercase tracking-wider">Our Mission</h2>
              </div>
              <p className="text-[#8e9aad] leading-relaxed text-sm">
                To deliver world-class generator services and industrial power solutions across Papua New Guinea, while actively investing in the communities that sustain us.
              </p>
            </div>
            <div className="bg-[#1f2329] border border-[#2c3235] border-l-[#5794f2] rounded-sm p-8" style={{ borderLeft: "3px solid #5794f2" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#5794f2]/10 border border-[#5794f2]/30 rounded-sm flex items-center justify-center">
                  <Eye className="w-4 h-4 text-[#5794f2]" />
                </div>
                <h2 className="text-base font-bold text-[#d0d0d0] uppercase tracking-wider">Our Vision</h2>
              </div>
              <p className="text-[#8e9aad] leading-relaxed text-sm">
                To be the most trusted industrial services provider in the Pacific — recognised not just for technical excellence, but for the schools built, communities powered, and lives changed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 border-b border-[#2c3235]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-5 bg-[#5794f2]" />
              <span className="text-[#5794f2] text-xs font-mono uppercase tracking-widest">Our Journey</span>
            </div>
            <h2 className="text-2xl font-bold text-[#d0d0d0]">Company Milestones</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2c3235] md:left-1/2" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                    <div className="bg-[#1f2329] border border-[#2c3235] rounded-sm px-4 py-3 inline-block w-full md:max-w-sm">
                      <p className="text-[#8e9aad] text-xs">{m.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:static md:shrink-0 w-8 h-8 bg-[#f59e0b] rounded-sm flex items-center justify-center z-10 border border-[#d97706]">
                    <span className="text-[#111217] font-black text-[9px] text-center leading-tight">{m.year}</span>
                  </div>
                  <div className="hidden md:flex flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 border-b border-[#2c3235]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-5 bg-[#73bf69]" />
              <span className="text-[#73bf69] text-xs font-mono uppercase tracking-widest">What Drives Us</span>
            </div>
            <h2 className="text-2xl font-bold text-[#d0d0d0]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-[#1f2329] border border-[#2c3235] rounded-sm p-5 hover:border-[#3d4450] transition-colors"
                  style={{ borderTop: `3px solid ${v.color}` }}
                >
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mb-4" style={{ backgroundColor: `${v.color}15`, border: `1px solid ${v.color}30` }}>
                    <Icon className="w-4 h-4" style={{ color: v.color }} />
                  </div>
                  <h3 className="text-sm font-bold text-[#d0d0d0] mb-2">{v.title}</h3>
                  <p className="text-xs text-[#5a6374] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 border-b border-[#2c3235]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-5 bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-xs font-mono uppercase tracking-widest">The People</span>
            </div>
            <h2 className="text-2xl font-bold text-[#d0d0d0]">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member) => (
              <div key={member.name} className="bg-[#1f2329] border border-[#2c3235] rounded-sm p-6 text-center hover:border-[#3d4450] transition-colors">
                <div className="w-14 h-14 rounded-sm bg-[#111217] border border-[#2c3235] flex items-center justify-center mx-auto mb-4 text-[#f59e0b] font-black text-base">
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#d0d0d0] text-sm">{member.name}</h3>
                <p className="text-xs text-[#5a6374] font-mono mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-5 bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-xs font-mono uppercase tracking-widest">Credentials</span>
            </div>
            <h2 className="text-2xl font-bold text-[#d0d0d0]">Certifications & Partnerships</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certs.map((cert) => {
              const Icon = cert.icon;
              return (
                <div key={cert.label} className="bg-[#1f2329] border border-[#2c3235] rounded-sm p-5 text-center hover:border-[#f59e0b]/40 transition-colors">
                  <div className="w-10 h-10 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-sm flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[#f59e0b]" />
                  </div>
                  <p className="text-[#d0d0d0] font-semibold text-xs">{cert.label}</p>
                  <p className="text-[#5a6374] text-xs font-mono mt-1">{cert.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
