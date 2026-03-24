import { Award, Wrench, School, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    desc: "Serving PNG's industrial sector",
  },
  {
    icon: Wrench,
    value: "200+",
    label: "Generators Serviced",
    desc: "Across all major brands",
  },
  {
    icon: School,
    value: "3",
    label: "Schools Built",
    desc: "Eastern Gulf Province, PNG",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Project Delivery",
    desc: "On time, every time",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <p className="text-4xl font-black text-[#1a1a2e]">{stat.value}</p>
                  <p className="text-base font-bold text-gray-800 mt-0.5">{stat.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
