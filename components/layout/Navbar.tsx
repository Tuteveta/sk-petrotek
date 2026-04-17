"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import TickerBar from "@/components/layout/TickerBar";

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
      {/* Ticker */}
      <TickerBar />

      {/* Main nav */}
      <div className="bg-[#161719] border-b border-[#2c3235]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 bg-[#f59e0b] flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-[#111217]" />
              </div>
              <div className="leading-none">
                <div className="text-[#d0d0d0] font-black text-base tracking-[0.3em] uppercase leading-none">SK</div>
                <div className="text-[#f59e0b] font-black text-[10px] tracking-[0.3em] uppercase leading-none mt-0.5">PROTECK</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-[#2c3235] ml-2" />
              <span className="hidden sm:block text-[#5a6374] text-[10px] font-mono uppercase tracking-wider leading-tight max-w-[100px]">
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
                        ? "text-[#f59e0b] border-[#f59e0b]"
                        : "text-[#8e9aad] hover:text-[#d0d0d0] border-transparent hover:border-[#3d4450]"
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
                className="hidden xl:flex items-center gap-2 text-[#8e9aad] hover:text-[#f59e0b] transition-colors text-xs font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                +675 XXX XXXX
              </a>
              <div className="hidden xl:block w-px h-5 bg-[#2c3235]" />
              <Link href="/contact">
                <button className="h-9 px-6 text-xs font-bold uppercase tracking-[0.12em] bg-[#f59e0b] text-[#111217] hover:bg-[#d97706] transition-colors border-r-2 border-[#d97706]">
                  Get a Quote
                </button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[#8e9aad] hover:text-[#d0d0d0] transition-colors p-1"
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
        <div className="bg-[#111217] border-b border-[#2c3235]">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] border-b border-[#2c3235] transition-colors",
                  active
                    ? "text-[#f59e0b] bg-[#f59e0b]/5 border-l-2 border-l-[#f59e0b]"
                    : "text-[#8e9aad] hover:text-[#d0d0d0] hover:bg-[#1f2329]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="p-4">
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <button className="w-full h-10 text-xs font-bold uppercase tracking-[0.12em] bg-[#f59e0b] text-[#111217] hover:bg-[#d97706] transition-colors">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
