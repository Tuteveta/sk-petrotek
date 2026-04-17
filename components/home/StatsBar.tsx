import { Award, Wrench, School, CheckCircle, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience", desc: "Serving PNG's industrial sector", trend: "+2 YoY" },
  { icon: Wrench, value: "200+", label: "Generators Serviced", desc: "Across all major brands", trend: "Multi-brand" },
  { icon: School, value: "3", label: "Schools Built", desc: "Eastern Gulf Province, PNG", trend: "Govt. contracted" },
  { icon: CheckCircle, value: "100%", label: "Project Delivery", desc: "On time, every time", trend: "Zero delays" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-200">

      {/* Editorial header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 flex items-baseline justify-between gap-4 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#f59e0b]" />
            <span className="text-[#f59e0b] text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">Performance</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a2a] tracking-tight">
            By The Numbers<span className="text-[#f59e0b]">.</span>
          </h2>
        </div>
        <span className="text-[#5a6374] text-xs font-mono shrink-0 hidden sm:block">FY 2026 · Updated Quarterly</span>
      </div>

      {/* Stats grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#2c3235]">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group px-8 py-10 hover:bg-gray-50 transition-colors hover:border-t-2 hover:border-t-[#f59e0b]"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center group-hover:bg-[#f59e0b]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#f59e0b]" />
                  </div>
                  <div className="flex items-center gap-1 text-[#73bf69]">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-[10px] font-mono">{stat.trend}</span>
                  </div>
                </div>
                <p className="text-4xl lg:text-5xl font-black text-[#1a1a2a] leading-none tabular-nums mb-2">{stat.value}</p>
                <p className="text-sm font-semibold text-[#8e9aad] mb-1">{stat.label}</p>
                <p className="text-xs text-[#5a6374] font-mono">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pb-4" />
    </section>
  );
}
