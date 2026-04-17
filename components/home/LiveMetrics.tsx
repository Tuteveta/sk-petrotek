"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Circle } from "lucide-react";

interface DataPoint {
  month: string;
  uptime: number;
  jobs: number;
}

const data: DataPoint[] = [
  { month: "Jul", uptime: 97, jobs: 14 },
  { month: "Aug", uptime: 99, jobs: 18 },
  { month: "Sep", uptime: 96, jobs: 12 },
  { month: "Oct", uptime: 98, jobs: 20 },
  { month: "Nov", uptime: 100, jobs: 22 },
  { month: "Dec", uptime: 99, jobs: 17 },
  { month: "Jan", uptime: 97, jobs: 15 },
  { month: "Feb", uptime: 98, jobs: 21 },
  { month: "Mar", uptime: 100, jobs: 25 },
  { month: "Apr", uptime: 99, jobs: 23 },
];

function UptimeChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const draw = () => {
      if (!svgRef.current || !containerRef.current) return;
      const W = containerRef.current.clientWidth || 400;
      const H = 160;
      const m = { top: 10, right: 16, bottom: 28, left: 40 };
      const w = W - m.left - m.right;
      const h = H - m.top - m.bottom;

      d3.select(svgRef.current).selectAll("*").remove();
      const svg = d3.select(svgRef.current)
        .attr("width", W).attr("height", H)
        .append("g").attr("transform", `translate(${m.left},${m.top})`);

      const x = d3.scalePoint().domain(data.map(d => d.month)).range([0, w]);
      const y = d3.scaleLinear().domain([90, 101]).range([h, 0]);

      // Grid lines
      svg.selectAll(".grid-h")
        .data([92, 94, 96, 98, 100])
        .enter().append("line")
        .attr("x1", 0).attr("x2", w)
        .attr("y1", d => y(d)).attr("y2", d => y(d))
        .attr("stroke", "#e5e7eb").attr("stroke-width", 1);

      // Area
      const area = d3.area<DataPoint>()
        .x(d => x(d.month) ?? 0)
        .y0(h).y1(d => y(d.uptime))
        .curve(d3.curveCatmullRom);

      svg.append("defs").append("linearGradient")
        .attr("id", "uptimeGrad").attr("x1", "0").attr("y1", "0").attr("x2", "0").attr("y2", "1")
        .selectAll("stop")
        .data([
          { offset: "0%", color: "#f59e0b", opacity: 0.2 },
          { offset: "100%", color: "#f59e0b", opacity: 0.02 },
        ])
        .enter().append("stop")
        .attr("offset", d => d.offset)
        .attr("stop-color", d => d.color)
        .attr("stop-opacity", d => d.opacity);

      svg.append("path").datum(data)
        .attr("fill", "url(#uptimeGrad)").attr("d", area);

      // Line
      const line = d3.line<DataPoint>()
        .x(d => x(d.month) ?? 0).y(d => y(d.uptime))
        .curve(d3.curveCatmullRom);

      svg.append("path").datum(data)
        .attr("fill", "none").attr("stroke", "#f59e0b")
        .attr("stroke-width", 2).attr("d", line);

      // Dots
      svg.selectAll(".dot").data(data).enter().append("circle")
        .attr("cx", d => x(d.month) ?? 0).attr("cy", d => y(d.uptime))
        .attr("r", 3).attr("fill", "#f59e0b").attr("stroke", "#ffffff").attr("stroke-width", 1.5);

      // X axis
      svg.append("g").attr("transform", `translate(0,${h})`).call(
        d3.axisBottom(x).tickSize(0)
      ).call(g => {
        g.select(".domain").attr("stroke", "#e5e7eb");
        g.selectAll("text").attr("fill", "#9ca3af").attr("font-size", "11px").attr("dy", "1em");
      });

      // Y axis
      svg.append("g").call(
        d3.axisLeft(y).ticks(3).tickFormat(d => `${d}%`)
      ).call(g => {
        g.select(".domain").remove();
        g.selectAll(".tick line").remove();
        g.selectAll("text").attr("fill", "#9ca3af").attr("font-size", "11px");
      });
    };

    draw();
    const obs = new ResizeObserver(draw);
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return <div ref={containerRef} className="w-full"><svg ref={svgRef} className="w-full" /></div>;
}

function JobsChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const draw = () => {
      if (!svgRef.current || !containerRef.current) return;
      const W = containerRef.current.clientWidth || 400;
      const H = 160;
      const m = { top: 10, right: 16, bottom: 28, left: 40 };
      const w = W - m.left - m.right;
      const h = H - m.top - m.bottom;

      d3.select(svgRef.current).selectAll("*").remove();
      const svg = d3.select(svgRef.current)
        .attr("width", W).attr("height", H)
        .append("g").attr("transform", `translate(${m.left},${m.top})`);

      const x = d3.scaleBand().domain(data.map(d => d.month)).range([0, w]).padding(0.35);
      const y = d3.scaleLinear().domain([0, 30]).range([h, 0]);

      // Grid
      svg.selectAll(".grid-h")
        .data([10, 20, 30])
        .enter().append("line")
        .attr("x1", 0).attr("x2", w)
        .attr("y1", d => y(d)).attr("y2", d => y(d))
        .attr("stroke", "#e5e7eb").attr("stroke-width", 1);

      // Bars
      svg.selectAll(".bar").data(data).enter().append("rect")
        .attr("x", d => x(d.month) ?? 0).attr("y", h)
        .attr("width", x.bandwidth()).attr("height", 0)
        .attr("fill", "#1D4ED8").attr("rx", 2)
        .transition().duration(800).ease(d3.easeCubicOut)
        .attr("y", d => y(d.jobs)).attr("height", d => h - y(d.jobs));

      // X axis
      svg.append("g").attr("transform", `translate(0,${h})`).call(
        d3.axisBottom(x).tickSize(0)
      ).call(g => {
        g.select(".domain").attr("stroke", "#e5e7eb");
        g.selectAll("text").attr("fill", "#9ca3af").attr("font-size", "11px").attr("dy", "1em");
      });

      // Y axis
      svg.append("g").call(
        d3.axisLeft(y).ticks(3)
      ).call(g => {
        g.select(".domain").remove();
        g.selectAll(".tick line").remove();
        g.selectAll("text").attr("fill", "#9ca3af").attr("font-size", "11px");
      });
    };

    draw();
    const obs = new ResizeObserver(draw);
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return <div ref={containerRef} className="w-full"><svg ref={svgRef} className="w-full" /></div>;
}

export default function LiveMetrics() {
  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Circle className="w-1.5 h-1.5 fill-[#73bf69] text-[#73bf69] animate-pulse" />
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">Live Operations Dashboard</span>
            </div>
            <h2 className="text-2xl font-bold text-[#1a1a2a]">Service Performance Overview</h2>
          </div>
          <span className="text-gray-400 text-xs font-mono hidden sm:block">Jul 2025 – Apr 2026</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Uptime panel */}
          <div className="bg-white border border-gray-200 rounded-sm">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#f59e0b]" />
                <span className="text-gray-500 text-xs font-mono">Generator Fleet Uptime (%)</span>
              </div>
              <span className="text-[#16a34a] text-xs font-mono font-semibold">AVG 98.3%</span>
            </div>
            <div className="p-5">
              <UptimeChart />
            </div>
          </div>

          {/* Jobs panel */}
          <div className="bg-white border border-gray-200 rounded-sm">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#1D4ED8]" />
                <span className="text-gray-500 text-xs font-mono">Service Jobs Completed</span>
              </div>
              <span className="text-[#1D4ED8] text-xs font-mono font-semibold">187 TOTAL</span>
            </div>
            <div className="p-5">
              <JobsChart />
            </div>
          </div>
        </div>

        {/* Quick stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {[
            { label: "Avg Response Time", value: "< 4 hrs", color: "#16a34a" },
            { label: "Emergency Callouts", value: "24/7", color: "#f59e0b" },
            { label: "Client Retention", value: "96%", color: "#1D4ED8" },
            { label: "Preventive vs Reactive", value: "78 / 22%", color: "#6b7280" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-sm px-4 py-4">
              <p className="text-xs text-gray-400 font-mono mb-1.5 uppercase tracking-wider">{s.label}</p>
              <p className="text-xl font-bold" style={{ color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
