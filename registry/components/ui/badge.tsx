import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer shadow-sm hover:shadow-md active:scale-95",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 shadow-primary/20",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-secondary/20",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 shadow-destructive/20",
        outline: "text-foreground border-border hover:bg-accent hover:text-accent-foreground shadow-border/20",
        success:
          "border-transparent bg-green-500 text-white hover:bg-green-600 shadow-green-500/20",
        warning:
          "border-transparent bg-yellow-500 text-white hover:bg-yellow-600 shadow-yellow-500/20",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        default: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  onClick?: () => void
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
  dot?: boolean
  animation?: "none" | "pulse" | "bounce" | "ping"
}

function Badge({
  className,
  variant,
  size,
  onClick,
  dismissible,
  onDismiss,
  icon,
  dot,
  animation = "none",
  children,
  ...props
}: BadgeProps) {
  const [isVisible, setIsVisible] = React.useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.()
  }

  const animationClasses = {
    none: "",
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    ping: "animate-ping"
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        badgeVariants({ variant, size }),
        animationClasses[animation],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {dot && (
        <div className="w-2 h-2 rounded-full bg-current mr-1.5 animate-pulse" />
      )}
      {icon && <span className="mr-1">{icon}</span>}
      {children}
      {dismissible && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleDismiss()
          }}
          className="ml-1.5 hover:bg-black/10 rounded-full p-0.5 transition-colors"
          aria-label="Dismiss"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  )
}

export { Badge, badgeVariants }