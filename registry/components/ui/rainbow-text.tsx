"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface RainbowTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  speed?: "slow" | "normal" | "fast"
  className?: string
}

const RainbowText = React.forwardRef<HTMLSpanElement, RainbowTextProps>(
  ({
    text,
    speed = "normal",
    className,
    ...props
  }, ref) => {
    const speedValues = {
      slow: 3,
      normal: 2,
      fast: 1
    }

    return (
      <span
        ref={ref}
        className={cn(
          "inline-block",
          className
        )}
        style={{
          background: 'linear-gradient(45deg, #ef4444, #eab308, #22c55e, #3b82f6, #6366f1, #a855f7)',
          backgroundSize: '400% 400%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          animation: `rainbow ${speedValues[speed]}s ease-in-out infinite`,
          transform: 'translateZ(0)' // Force hardware acceleration
        }}
        {...props}
      >
        {text}
      </span>
    )
  }
)

RainbowText.displayName = "RainbowText"

export { RainbowText }