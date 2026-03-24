import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#f59e0b] text-[#1a1a2e]",
        secondary:
          "border-transparent bg-gray-100 text-gray-800",
        success:
          "border-transparent bg-green-100 text-green-800",
        destructive:
          "border-transparent bg-red-100 text-red-800",
        outline:
          "border-[#f59e0b] text-[#f59e0b] bg-transparent",
        dark:
          "border-transparent bg-[#1a1a2e] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
