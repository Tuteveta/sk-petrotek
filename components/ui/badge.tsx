import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-sm border px-2 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-[#f59e0b]/40 bg-[#f59e0b]/10 text-[#f59e0b]",
        secondary:
          "border-[#2c3235] bg-[#2c3235] text-[#8e9aad]",
        success:
          "border-[#73bf69]/40 bg-[#73bf69]/10 text-[#73bf69]",
        destructive:
          "border-[#f2495c]/40 bg-[#f2495c]/10 text-[#f2495c]",
        outline:
          "border-[#f59e0b] text-[#f59e0b] bg-transparent",
        dark:
          "border-[#3d4450] bg-[#1f2329] text-[#d0d0d0]",
        blue:
          "border-[#5794f2]/40 bg-[#5794f2]/10 text-[#5794f2]",
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
