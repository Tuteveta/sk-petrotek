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
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5">
      <Link href="/" className="flex items-center gap-1 text-[#5a6374] hover:text-[#f59e0b] transition-colors text-xs font-mono">
        <Home size={11} />
        <span>Home</span>
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={11} className="text-[#3d4450]" />
          {crumb.href ? (
            <Link href={crumb.href} className="text-xs font-mono text-[#5a6374] hover:text-[#f59e0b] transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-xs font-mono text-[#f59e0b]">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
