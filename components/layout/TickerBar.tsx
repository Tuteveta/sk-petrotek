import { Circle } from "lucide-react";

const items = [
  { label: "Fleet Uptime", value: "98.3%" },
  { label: "Emergency Response", value: "< 4 hrs" },
  { label: "Jobs Completed", value: "187" },
  { label: "Operations", value: "24 / 7" },
  { label: "Client Retention", value: "96%" },
  { label: "Generators Serviced", value: "200+" },
  { label: "Project Delivery Rate", value: "100%" },
  { label: "Years in Service", value: "15+" },
  { label: "Schools Built", value: "3" },
  { label: "Province Served", value: "Gulf Province, PNG" },
];

function TickerItem({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-2 mx-8 whitespace-nowrap">
      <span className="text-[#5a6374] text-[10px] font-mono uppercase tracking-wider">{label}:</span>
      <span className="text-[#f59e0b] text-[10px] font-mono font-semibold">{value}</span>
    </span>
  );
}

export default function TickerBar() {
  return (
    <div className="bg-[#0d0f12] border-b border-[#2c3235] h-8 flex items-center overflow-hidden">
      {/* Left status label */}
      <div className="shrink-0 flex items-center gap-2 px-4 h-full border-r border-[#2c3235] bg-[#111217]">
        <Circle className="w-1.5 h-1.5 fill-[#73bf69] text-[#73bf69]" style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }} />
        <span className="text-[#73bf69] text-[10px] font-mono font-bold uppercase tracking-[0.15em] whitespace-nowrap">
          Live Status
        </span>
      </div>

      {/* Scrolling content */}
      <div className="flex-1 overflow-hidden">
        <div className="ticker-track">
          {/* First copy */}
          <span className="inline-flex items-center">
            {items.map((item) => (
              <TickerItem key={item.label + "a"} label={item.label} value={item.value} />
            ))}
            <span className="mx-8 text-[#2c3235] text-[10px]">|</span>
          </span>
          {/* Duplicate for seamless loop */}
          <span className="inline-flex items-center">
            {items.map((item) => (
              <TickerItem key={item.label + "b"} label={item.label} value={item.value} />
            ))}
            <span className="mx-8 text-[#2c3235] text-[10px]">|</span>
          </span>
        </div>
      </div>

      {/* Right location pin */}
      <div className="shrink-0 flex items-center gap-2 px-4 h-full border-l border-[#2c3235] bg-[#111217]">
        <span className="text-[#5a6374] text-[10px] font-mono whitespace-nowrap">PNG · Port Moresby</span>
      </div>
    </div>
  );
}
