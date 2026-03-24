import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const services = [
  { label: "Generator Filtering", href: "/services" },
  { label: "Generator Cleaning", href: "/services" },
  { label: "Oil Services", href: "/services" },
  { label: "Maintenance & Repair", href: "/services" },
  { label: "Power Consulting", href: "/services" },
  { label: "Community Projects", href: "/services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#f59e0b] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#1a1a2e]" />
              </div>
              <span className="text-white font-bold text-xl tracking-wide">
                SK <span className="text-[#f59e0b]">PROTECK</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Papua New Guinea&apos;s trusted partner for generator services, industrial power solutions, and community development.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#f59e0b] hover:text-[#1a1a2e] flex items-center justify-center text-gray-400 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#f59e0b] hover:text-[#1a1a2e] flex items-center justify-center text-gray-400 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#f59e0b] hover:text-[#1a1a2e] flex items-center justify-center text-gray-400 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#f59e0b] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-[#f59e0b] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-[#f59e0b] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">Port Moresby, Papua New Guinea</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <a href="mailto:info@skproteck.com.pg" className="text-sm text-gray-400 hover:text-[#f59e0b] transition-colors">
                  info@skproteck.com.pg
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <a href="tel:+675XXXXXXXX" className="text-sm text-gray-400 hover:text-[#f59e0b] transition-colors">
                  +675 XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} SK Proteck. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Powering Industry. Building Communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
