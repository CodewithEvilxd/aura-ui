import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const progressVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-secondary",
  {
    variants: {
      size: {
        sm: "h-2",
        default: "h-4",
        lg: "h-6",
        xl: "h-8",
      },
      variant: {
        default: "",
        success: "",
        warning: "",
        error: "",
        gradient: "",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

const progressBarVariants = cva(
  "h-full transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        error: "bg-red-500",
        gradient: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value?: number
  max?: number
  showValue?: boolean
  animated?: boolean
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({
    className,
    value = 0,
    max = 100,
    size,
    variant,
    showValue = false,
    animated = true,
    ...props
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
      <div className="space-y-2">
        <div
          ref={ref}
          className={cn(progressVariants({ size, variant }), className)}
          {...props}
        >
          <div
            className={cn(
              progressBarVariants({ variant }),
              animated && "transition-all duration-300 ease-in-out"
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showValue && (
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{Math.round(percentage)}%</span>
            <span>{value}/{max}</span>
          </div>
        )}
      </div>
    )
  }
)
Progress.displayName = "Progress"

export { Progress, progressVariants, progressBarVariants }