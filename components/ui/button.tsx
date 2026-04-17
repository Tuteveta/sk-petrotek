import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f59e0b] disabled:pointer-events-none disabled:opacity-40 rounded-sm",
  {
    variants: {
      variant: {
        default:
          "bg-[#f59e0b] text-[#111217] hover:bg-[#d97706]",
        outline:
          "border border-[#f59e0b] text-[#f59e0b] bg-transparent hover:bg-[#f59e0b]/10",
        ghost:
          "text-[#8e9aad] hover:bg-[#2c3235] hover:text-[#d0d0d0]",
        dark:
          "bg-[#2c3235] text-[#d0d0d0] hover:bg-[#3d4450] border border-[#3d4450]",
        link: "text-[#f59e0b] underline-offset-4 hover:underline",
        danger:
          "bg-[#f2495c]/10 text-[#f2495c] border border-[#f2495c]/30 hover:bg-[#f2495c]/20",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-7 px-3 text-xs",
        lg: "h-10 px-6 text-sm",
        xl: "h-12 px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
