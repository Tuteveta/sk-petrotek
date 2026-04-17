"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface ProjectData {
  name: string;
  completion: number;
  classrooms: number;
  year: string;
}

const projects: ProjectData[] = [
  { name: "Kerema Primary School", completion: 100, classrooms: 8, year: "2024" },
  { name: "Malalaua Community School", completion: 100, classrooms: 6, year: "2024" },
  { name: "Kikori District School", completion: 100, classrooms: 10, year: "2025" },
];

export default function ProjectsChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const drawChart = () => {
      if (!containerRef.current || !svgRef.current) return;
      const container = containerRef.current;
      const totalWidth = container.clientWidth || 600;

      const margin = { top: 16, right: 80, bottom: 40, left: 220 };
      const width = totalWidth - margin.left - margin.right;
      const height = 200 - margin.top - margin.bottom;

      d3.select(svgRef.current).selectAll("*").remove();

      const svg = d3
        .select(svgRef.current)
        .attr("width", totalWidth)
        .attr("height", height + margin.top + margin.bottom)
        .style("background", "transparent")
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
      const yScale = d3.scaleBand()
        .domain(projects.map((d) => d.name))
        .range([0, height])
        .padding(0.4);

      // Grid lines
      svg.selectAll(".grid-v")
        .data([25, 50, 75, 100])
        .enter().append("line")
        .attr("x1", d => xScale(d)).attr("x2", d => xScale(d))
        .attr("y1", 0).attr("y2", height)
        .attr("stroke", "#2c3235").attr("stroke-width", 1).attr("stroke-dasharray", "3,3");

      // Track bars (background)
      svg.selectAll(".bar-bg")
        .data(projects).enter().append("rect")
        .attr("x", 0).attr("y", (d) => yScale(d.name) ?? 0)
        .attr("width", width).attr("height", yScale.bandwidth())
        .attr("rx", 2).attr("fill", "#2c3235");

      // Amber fill bars
      svg.selectAll(".bar")
        .data(projects).enter().append("rect")
        .attr("x", 0).attr("y", (d) => yScale(d.name) ?? 0)
        .attr("width", 0).attr("height", yScale.bandwidth())
        .attr("rx", 2).attr("fill", "#f59e0b")
        .transition().duration(1000).ease(d3.easeCubicOut)
        .attr("width", (d) => xScale(d.completion));

      // Percentage label
      svg.selectAll(".label-pct")
        .data(projects).enter().append("text")
        .attr("x", (d) => xScale(d.completion) + 8)
        .attr("y", (d) => (yScale(d.name) ?? 0) + yScale.bandwidth() / 2)
        .attr("dy", "0.35em")
        .attr("fill", "#f59e0b").attr("font-size", "12px").attr("font-weight", "700").attr("font-family", "monospace")
        .text((d) => `${d.completion}%`);

      // Year label inside bar
      svg.selectAll(".label-year")
        .data(projects).enter().append("text")
        .attr("x", 8)
        .attr("y", (d) => (yScale(d.name) ?? 0) + yScale.bandwidth() / 2)
        .attr("dy", "0.35em")
        .attr("fill", "#111217").attr("font-size", "10px").attr("font-weight", "600").attr("font-family", "monospace")
        .text((d) => d.year);

      // Y-axis labels
      svg.selectAll(".y-label")
        .data(projects).enter().append("text")
        .attr("x", -10).attr("y", (d) => (yScale(d.name) ?? 0) + yScale.bandwidth() / 2)
        .attr("dy", "0.35em").attr("text-anchor", "end")
        .attr("fill", "#8e9aad").attr("font-size", "12px").attr("font-weight", "500")
        .text((d) => d.name);

      // X-axis
      svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale).ticks(5).tickFormat((d) => `${d}%`))
        .call((g) => g.select(".domain").attr("stroke", "#2c3235"))
        .call((g) => g.selectAll(".tick line").attr("stroke", "#2c3235"))
        .call((g) => g.selectAll(".tick text").attr("fill", "#5a6374").attr("font-size", "11px").attr("font-family", "monospace"));
    };

    drawChart();
    const observer = new ResizeObserver(() => drawChart());
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <svg ref={svgRef} className="w-full" />
    </div>
  );
}
