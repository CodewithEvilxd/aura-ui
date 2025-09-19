"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlitchTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  intensity?: "low" | "medium" | "high"
  speed?: "slow" | "normal" | "fast"
  className?: string
}

const GlitchText = React.forwardRef<HTMLSpanElement, GlitchTextProps>(
  ({
    text,
    intensity = "medium",
    speed = "normal",
    className,
    ...props
  }, ref) => {
    const intensityValues = {
      low: { skew: 1, translate: 2 },
      medium: { skew: 2, translate: 4 },
      high: { skew: 3, translate: 6 }
    }

    const speedValues = {
      slow: 0.8,
      normal: 0.5,
      fast: 0.3
    }

    const { skew, translate } = intensityValues[intensity]
    const animationDuration = speedValues[speed]

    return (
      <span
        ref={ref}
        className={cn(
          "relative inline-block",
          className
        )}
        {...props}
      >
        {/* Main text */}
        <span className="relative z-10">{text}</span>

        {/* Glitch layers */}
        <span
          className="absolute inset-0 text-red-500 opacity-80 animate-pulse"
          style={{
            transform: `skew(${skew}deg) translateX(${translate}px)`,
            animationDuration: `${animationDuration}s`,
            animationDelay: '0s'
          }}
        >
          {text}
        </span>

        <span
          className="absolute inset-0 text-blue-500 opacity-60 animate-pulse"
          style={{
            transform: `skew(-${skew}deg) translateX(-${translate}px)`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDuration * 0.3}s`
          }}
        >
          {text}
        </span>

        <span
          className="absolute inset-0 text-green-500 opacity-40 animate-pulse"
          style={{
            transform: `skew(${skew * 0.5}deg) translateY(${translate * 0.5}px)`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDuration * 0.6}s`
          }}
        >
          {text}
        </span>

        {/* Scan lines effect */}
        <div
          className="absolute inset-0 opacity-20 animate-pulse"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.1) 2px,
              rgba(255,255,255,0.1) 4px
            )`,
            animationDuration: `${animationDuration * 2}s`
          }}
        />
      </span>
    )
  }
)

GlitchText.displayName = "GlitchText"

export { GlitchText }