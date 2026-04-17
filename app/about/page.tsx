import { Target, Eye, Heart, Shield, Zap, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "@/components/layout/Breadcrumb";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We operate with full transparency and hold ourselves to the highest professional standards in every engagement.",
  },
  {
    icon: Zap,
    title: "Excellence",
    desc: "Every generator we service, every structure we build — delivered with precision and uncompromising quality.",
  },
  {
    icon: Heart,
    title: "Community",
    desc: "We believe business success should translate into community development. Our school projects are a direct expression of this belief.",
  },
  {
    icon: TrendingUp,
    title: "Reliability",
    desc: "Industrial operations depend on uptime. We ensure your power systems — and our commitments — never fail.",
  },
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

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc]">
      {/* Hero */}
      <section className="bg-[#1a1a2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb crumbs={[{ label: "About" }]} />
            <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">About SK Proteck</span>
            <h1 className="text-5xl font-black text-white mt-3 mb-6">
              15 Years of Power. A Legacy of Community.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in Port Moresby, SK Proteck has grown from a specialist generator servicing firm into Papua New Guinea&apos;s most trusted industrial power and community development partner. Our work spans remote industrial sites to rural school buildings.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-l-4 border-[#f59e0b] pl-8">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-[#f59e0b]" />
                <h2 className="text-2xl font-black text-[#1a1a2e]">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To deliver world-class generator services and industrial power solutions across Papua New Guinea, while actively investing in the communities that sustain us.
              </p>
            </div>
            <div className="border-l-4 border-[#1a1a2e] pl-8">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-[#1a1a2e]" />
                <h2 className="text-2xl font-black text-[#1a1a2e]">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the most trusted industrial services provider in the Pacific — recognised not just for technical excellence, but for the schools built, communities powered, and lives changed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">Our Journey</span>
            <h2 className="text-4xl font-black text-[#1a1a2e] mt-2">Company Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row gap-4 items-start md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-xl p-5 border border-gray-200 inline-block w-full md:max-w-sm">
                      <p className="text-sm text-gray-600">{m.event}</p>
                    </div>
                  </div>
                  <div className="shrink-0 w-16 h-16 bg-[#f59e0b] rounded-full flex items-center justify-center z-10 border-2 border-[#d97706]">
                    <span className="text-[#1a1a2e] font-black text-xs text-center leading-tight">{m.year}</span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-4xl font-black text-[#1a1a2e] mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title}>
                  <CardContent className="pt-6 pb-6">
                    <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#f59e0b]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">The People</span>
            <h2 className="text-4xl font-black text-[#1a1a2e] mt-2">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <div className="w-20 h-20 rounded-full bg-[#1a1a2e] flex items-center justify-center mx-auto mb-4 text-[#f59e0b] font-black text-xl">
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#1a1a2e] text-base">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">Credentials</span>
          <h2 className="text-4xl font-black text-white mt-2 mb-10">Certifications & Partnerships</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: "ISO 9001 Compliant", sub: "Quality Management" },
              { icon: Shield, label: "PNG IPA Registered", sub: "Business Registration" },
              { icon: Users, label: "Govt. Contractor", sub: "Kerema District" },
              { icon: Zap, label: "Generator Certified", sub: "Multi-Brand Expertise" },
            ].map((cert) => {
              const Icon = cert.icon;
              return (
                <div key={cert.label} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <Icon className="w-8 h-8 text-[#f59e0b] mx-auto mb-3" />
                  <p className="text-white font-bold text-sm">{cert.label}</p>
                  <p className="text-gray-400 text-xs mt-1">{cert.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
