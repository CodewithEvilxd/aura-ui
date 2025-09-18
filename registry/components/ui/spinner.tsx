import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "rounded-full border-2",
  {
    variants: {
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        default: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12",
        "2xl": "h-16 w-16",
      },
      variant: {
        default: "border-gray-300 border-t-gray-600",
        primary: "border-primary/20 border-t-primary",
        secondary: "border-secondary/20 border-t-secondary",
        success: "border-green-200 border-t-green-600",
        warning: "border-yellow-200 border-t-yellow-600",
        error: "border-red-200 border-t-red-600",
        gradient: "border-transparent border-t-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
        dots: "border-none bg-transparent",
        pulse: "border-none bg-primary rounded-full",
      },
      speed: {
        slow: "[animation-duration:2s]",
        normal: "[animation-duration:1s]",
        fast: "[animation-duration:0.5s]",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
      speed: "normal",
    },
  }
)

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  showLabel?: boolean
  label?: string
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, variant, speed, showLabel, label, ...props }, ref) => {
    const isDots = variant === "dots"
    const isPulse = variant === "pulse"

    if (isDots) {
      return (
        <div ref={ref} className={cn("flex space-x-1", className)} {...props}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
          {showLabel && (
            <span className="ml-2 text-sm text-muted-foreground">
              {label || "Loading..."}
            </span>
          )}
        </div>
      )
    }

    if (isPulse) {
      return (
        <div ref={ref} className={cn("flex flex-col items-center space-y-2", className)} {...props}>
          <div
            className={cn(
              spinnerVariants({ size, variant: "pulse" }),
              "animate-pulse"
            )}
          />
          {showLabel && (
            <span className="text-sm text-muted-foreground">
              {label || "Loading..."}
            </span>
          )}
        </div>
      )
    }

    return (
      <div ref={ref} className={cn("flex flex-col items-center space-y-2", className)} {...props}>
        <div
          className={cn(
            "animate-spin",
            spinnerVariants({ size, variant, speed })
          )}
        />
        {showLabel && (
          <span className="text-sm text-muted-foreground">
            {label || "Loading..."}
          </span>
        )}
      </div>
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner, spinnerVariants }