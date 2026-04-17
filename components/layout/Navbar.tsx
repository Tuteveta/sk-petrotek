"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Main nav */}
      <div className="bg-[#1a1a1a] border-b border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 bg-[#dc2626] flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="leading-none">
                <div className="text-white font-black text-base tracking-[0.3em] uppercase leading-none">SK</div>
                <div className="text-[#dc2626] font-black text-[10px] tracking-[0.3em] uppercase leading-none mt-0.5">PROTECK</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-[#333333] ml-2" />
              <span className="hidden sm:block text-white/40 text-[10px] font-mono uppercase tracking-wider leading-tight max-w-[100px]">
                Industrial Power · PNG
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative flex items-center gap-1 px-4 h-16 text-xs font-semibold uppercase tracking-[0.12em] transition-colors border-b-2",
                      active
                        ? "text-[#dc2626] border-[#dc2626]"
                        : "text-white/50 hover:text-white border-transparent hover:border-white/20"
                    )}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-50" />}
                  </Link>
                );
              })}
            </nav>

            {/* CTA group */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+675XXXXXXXX"
                className="hidden xl:flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                +675 XXX XXXX
              </a>
              <div className="hidden xl:block w-px h-5 bg-[#333333]" />
              <Link href="/contact">
                <button className="h-9 px-6 text-xs font-bold uppercase tracking-[0.12em] bg-[#dc2626] text-white hover:bg-[#b91c1c] transition-colors">
                  Get a Quote
                </button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white/50 hover:text-white transition-colors p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-200",
        mobileOpen ? "max-h-96" : "max-h-0"
      )}>
        <div className="bg-[#1a1a1a] border-b border-[#333333]">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] border-b border-[#333333] transition-colors",
                  active
                    ? "text-[#dc2626] bg-[#dc2626]/5 border-l-2 border-l-[#dc2626]"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="p-4">
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <button className="w-full h-10 text-xs font-bold uppercase tracking-[0.12em] bg-[#dc2626] text-white hover:bg-[#b91c1c] transition-colors">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
