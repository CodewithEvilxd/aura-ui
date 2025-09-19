"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ShimmerTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  speed?: "slow" | "normal" | "fast"
  className?: string
}

const ShimmerText = React.forwardRef<HTMLSpanElement, ShimmerTextProps>(
  ({
    text,
    speed = "normal",
    className,
    ...props
  }, ref) => {
    const speedValues = {
      slow: 3,
      normal: 2,
      fast: 1.5
    }

    return (
      <span
        ref={ref}
        className={cn(
          "relative inline-block overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Main text */}
        <span className="relative z-10 bg-gradient-to-r from-gray-900 via-gray-100 to-gray-900 bg-clip-text text-transparent">
          {text}
        </span>

        {/* Shimmer effect */}
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse opacity-60"
          style={{
            backgroundSize: '200% 100%',
            animation: `shimmer ${speedValues[speed]}s ease-in-out infinite`,
            transform: 'translateX(-100%)'
          }}
        />

        {/* Subtle glow effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm opacity-30"
          style={{
            backgroundSize: '200% 100%',
            animation: `shimmer ${speedValues[speed]}s ease-in-out infinite`,
            transform: 'translateX(-100%)'
          }}
        />
      </span>
    )
  }
)

ShimmerText.displayName = "ShimmerText"

export { ShimmerText }