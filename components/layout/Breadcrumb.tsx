import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6">
      <Link
        href="/"
        className="flex items-center gap-1 text-gray-400 hover:text-[#f59e0b] transition-colors text-sm"
      >
        <Home size={13} />
        <span>Home</span>
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={13} className="text-gray-600" />
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="text-sm text-gray-400 hover:text-[#f59e0b] transition-colors"
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="text-sm text-[#f59e0b] font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
