import { cn } from "@/lib/utils"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Animation variant for the skeleton
   * @default "pulse"
   */
  variant?: "pulse" | "wave" | "none"
  /**
   * Speed of the animation
   * @default "normal"
   */
  speed?: "slow" | "normal" | "fast"
}

function Skeleton({
  className,
  variant = "pulse",
  speed = "normal",
  ...props
}: SkeletonProps) {
  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-pulse", // Can be enhanced with custom wave animation
    none: ""
  }

  const speedClasses = {
    slow: "[animation-duration:2s]",
    normal: "[animation-duration:1.5s]",
    fast: "[animation-duration:1s]"
  }

  return (
    <div
      className={cn(
        "rounded-md bg-muted",
        animationClasses[variant],
        speedClasses[speed],
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }