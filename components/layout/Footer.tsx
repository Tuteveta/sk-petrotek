import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Circle, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Generator Filtering",
  "Generator Cleaning",
  "Oil Services",
  "Maintenance & Repair",
  "Power Consulting",
  "Community Projects",
];

const projects = [
  { label: "Kerema Primary School", href: "/projects" },
  { label: "Malalaua Community School", href: "/projects" },
  { label: "Kikori District School", href: "/projects" },
];

const legalLinks = ["Privacy Policy", "Terms of Use", "IPA Registration"];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#333333]">

      {/* Pre-footer CTA band */}
      <div className="border-b border-[#333333] bg-[#161616]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[#5a6374] text-[10px] font-mono uppercase tracking-[0.2em] mb-2">Partner with PNG's industrial leader</p>
            <h3 className="text-2xl lg:text-3xl font-black text-[#d0d0d0] tracking-tight">
              Ready to work with SK Proteck?
            </h3>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 h-10 px-7 bg-[#dc2626] text-[#1a1a1a] text-xs font-black uppercase tracking-[0.15em] hover:bg-[#d97706] transition-colors">
                Get a Quote
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a href="tel:+675XXXXXXXX">
              <button className="inline-flex items-center gap-2 h-10 px-7 border border-[#333333] text-[#8e9aad] text-xs font-semibold uppercase tracking-[0.15em] hover:border-[#dc2626] hover:text-[#dc2626] transition-colors">
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid — 5 columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Column 1–2: Brand (spans 2 on lg) */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-[#dc2626] flex items-center justify-center shrink-0">
                <Zap className="w-4.5 h-4.5 text-[#1a1a1a]" />
              </div>
              <div className="leading-none">
                <div className="text-[#d0d0d0] font-black text-sm tracking-[0.3em] uppercase">SK</div>
                <div className="text-[#dc2626] font-black text-[9px] tracking-[0.3em] uppercase mt-0.5">PROTECK</div>
              </div>
            </Link>
            <p className="text-xs text-[#5a6374] leading-relaxed mb-5">
              Papua New Guinea&apos;s trusted partner for generator services, industrial power solutions, and community infrastructure development.
            </p>
            <div className="flex items-center gap-1.5 mb-5">
              <Circle className="w-1.5 h-1.5 fill-[#73bf69] text-[#73bf69]" />
              <span className="text-[#73bf69] text-[10px] font-mono">All services operational</span>
            </div>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a href="#" className="text-[#5a6374] hover:text-[#dc2626] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-[#5a6374] hover:text-[#dc2626] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="mailto:info@skproteck.com.pg" className="text-[#5a6374] hover:text-[#dc2626] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-[#dc2626] text-[10px] font-mono font-semibold uppercase tracking-[0.2em] mb-5 pb-2 border-b border-[#333333]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-xs text-[#5a6374] hover:text-[#dc2626] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-[#dc2626] text-[10px] font-mono font-semibold uppercase tracking-[0.2em] mb-5 pb-2 border-b border-[#333333]">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-xs text-[#5a6374] hover:text-[#dc2626] transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Projects */}
          <div>
            <h3 className="text-[#dc2626] text-[10px] font-mono font-semibold uppercase tracking-[0.2em] mb-5 pb-2 border-b border-[#333333]">
              Projects
            </h3>
            <ul className="space-y-2.5 mb-6">
              {projects.map((p) => (
                <li key={p.label}>
                  <Link href={p.href} className="text-xs text-[#5a6374] hover:text-[#dc2626] transition-colors leading-relaxed block">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="bg-[#73bf69]/5 border border-[#73bf69]/20 px-3 py-2">
              <p className="text-[#73bf69] text-[10px] font-mono">All projects completed ✓</p>
              <p className="text-[#5a6374] text-[10px] font-mono">Gulf Province, PNG</p>
            </div>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="text-[#dc2626] text-[10px] font-mono font-semibold uppercase tracking-[0.2em] mb-5 pb-2 border-b border-[#333333]">
              Contact
            </h3>
            <ul className="space-y-3.5 mb-5">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-3.5 h-3.5 text-[#dc2626] mt-0.5 shrink-0" />
                <span className="text-xs text-[#5a6374] leading-relaxed">Port Moresby, NCD, Papua New Guinea</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                <a href="mailto:info@skproteck.com.pg" className="text-xs text-[#5a6374] hover:text-[#dc2626] transition-colors">
                  info@skproteck.com.pg
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                <a href="tel:+675XXXXXXXX" className="text-xs text-[#5a6374] hover:text-[#dc2626] transition-colors">
                  +675 XXX XXXX
                </a>
              </li>
            </ul>
            <div className="border-l-2 border-[#dc2626] pl-3 py-1">
              <p className="text-[#dc2626] text-[10px] font-mono font-semibold">24/7 Emergency Line</p>
              <p className="text-[#5a6374] text-[10px] font-mono">Generator failure? Call now.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#5a6374] font-mono">
            &copy; {new Date().getFullYear()} SK Proteck Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((l, i) => (
              <span key={l} className="flex items-center gap-4">
                <span className="text-[10px] text-[#5a6374] hover:text-[#8e9aad] font-mono cursor-pointer transition-colors">{l}</span>
                {i < legalLinks.length - 1 && <span className="text-[#333333] text-xs">·</span>}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-[#5a6374] font-mono hidden md:block">
            Powering Industry. Building Communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
