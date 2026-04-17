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

      const margin = { top: 20, right: 80, bottom: 50, left: 220 };
      const width = totalWidth - margin.left - margin.right;
      const height = 220 - margin.top - margin.bottom;

      // Clear previous
      d3.select(svgRef.current).selectAll("*").remove();

      const svg = d3
        .select(svgRef.current)
        .attr("width", totalWidth)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Scales
      const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);

      const yScale = d3
        .scaleBand()
        .domain(projects.map((d) => d.name))
        .range([0, height])
        .padding(0.35);

      // Background track bars
      svg
        .selectAll(".bar-bg")
        .data(projects)
        .enter()
        .append("rect")
        .attr("class", "bar-bg")
        .attr("x", 0)
        .attr("y", (d) => yScale(d.name) ?? 0)
        .attr("width", width)
        .attr("height", yScale.bandwidth())
        .attr("rx", 6)
        .attr("fill", "#f1f5f9");

      // Amber progress bars
      svg
        .selectAll(".bar")
        .data(projects)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("y", (d) => yScale(d.name) ?? 0)
        .attr("width", 0)
        .attr("height", yScale.bandwidth())
        .attr("rx", 6)
        .attr("fill", "#f59e0b")
        .transition()
        .duration(1000)
        .ease(d3.easeCubicOut)
        .attr("width", (d) => xScale(d.completion));

      // Percentage labels at end of bar
      svg
        .selectAll(".label-pct")
        .data(projects)
        .enter()
        .append("text")
        .attr("class", "label-pct")
        .attr("x", (d) => xScale(d.completion) + 8)
        .attr("y", (d) => (yScale(d.name) ?? 0) + yScale.bandwidth() / 2)
        .attr("dy", "0.35em")
        .attr("fill", "#1a1a2e")
        .attr("font-size", "13px")
        .attr("font-weight", "700")
        .text((d) => `${d.completion}%`);

      // Year labels inside bar
      svg
        .selectAll(".label-year")
        .data(projects)
        .enter()
        .append("text")
        .attr("class", "label-year")
        .attr("x", 10)
        .attr("y", (d) => (yScale(d.name) ?? 0) + yScale.bandwidth() / 2)
        .attr("dy", "0.35em")
        .attr("fill", "#1a1a2e")
        .attr("font-size", "11px")
        .attr("font-weight", "600")
        .text((d) => d.year);

      // Y-axis labels (project names)
      svg
        .selectAll(".y-label")
        .data(projects)
        .enter()
        .append("text")
        .attr("class", "y-label")
        .attr("x", -10)
        .attr("y", (d) => (yScale(d.name) ?? 0) + yScale.bandwidth() / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "end")
        .attr("fill", "#1a1a2e")
        .attr("font-size", "13px")
        .attr("font-weight", "600")
        .text((d) => d.name);

      // X-axis
      const xAxis = d3
        .axisBottom(xScale)
        .ticks(5)
        .tickFormat((d) => `${d}%`);

      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis)
        .call((g) => g.select(".domain").remove())
        .call((g) =>
          g.selectAll(".tick line").attr("stroke", "#e2e8f0").attr("y1", -height)
        )
        .call((g) =>
          g
            .selectAll(".tick text")
            .attr("fill", "#64748b")
            .attr("font-size", "11px")
        );

      // Title
      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom - 5)
        .attr("text-anchor", "middle")
        .attr("fill", "#94a3b8")
        .attr("font-size", "11px")
        .text("Project Completion (%)");
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
