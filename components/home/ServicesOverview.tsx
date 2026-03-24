import Link from "next/link";
import { Settings, Wrench, School, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Settings,
    title: "Generator Services",
    description:
      "Comprehensive generator filtering, cleaning, and oil services to keep your power systems running at peak efficiency. We handle all brands and capacities.",
    features: ["Filter Replacement", "Fuel Filtration", "Oil Analysis & Change", "Lubrication Management"],
    href: "/services",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description:
      "Scheduled preventive maintenance programs and emergency repair services. Our certified technicians ensure minimal downtime for your operations.",
    features: ["Scheduled Maintenance", "Emergency Repair 24/7", "Load Testing", "Corrosion Protection"],
    href: "/services",
  },
  {
    icon: School,
    title: "Community Projects",
    description:
      "Proud contractors for the Open Member for Kerema, SK Proteck has successfully completed three school construction projects in Eastern Gulf Province.",
    features: ["School Construction", "Infrastructure Build", "Gulf Province Focus", "Govt. Contracted"],
    href: "/projects",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl font-black text-[#1a1a2e] mt-2 mb-4">
            End-to-End Power Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From generator servicing to community infrastructure, SK Proteck delivers reliable, professional results across Papua New Guinea.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="group hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-[#f59e0b] overflow-hidden">
                <CardContent className="pt-6 pb-8 px-6">
                  <div className="w-12 h-12 bg-[#1a1a2e] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#f59e0b] transition-colors">
                    <Icon className="w-6 h-6 text-[#f59e0b] group-hover:text-[#1a1a2e] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button variant="outline" size="sm" className="group/btn">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
