"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface LiquidTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  intensity?: "low" | "medium" | "high"
  speed?: "slow" | "normal" | "fast"
  className?: string
}

const LiquidText = React.forwardRef<HTMLSpanElement, LiquidTextProps>(
  ({
    text,
    intensity = "medium",
    speed = "normal",
    className,
    ...props
  }, ref) => {
    const intensityValues = {
      low: { amplitude: 2, frequency: 0.5 },
      medium: { amplitude: 4, frequency: 1 },
      high: { amplitude: 6, frequency: 1.5 }
    }

    const speedValues = {
      slow: 4,
      normal: 3,
      fast: 2
    }

    const { amplitude, frequency } = intensityValues[intensity]
    const animationDuration = speedValues[speed]

    return (
      <span
        ref={ref}
        className={cn(
          "inline-block relative overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Liquid effect background */}
        <div
          className="absolute inset-0 opacity-20 animate-pulse"
          style={{
            background: `linear-gradient(45deg,
              rgba(59, 130, 246, 0.3),
              rgba(147, 51, 234, 0.3),
              rgba(236, 72, 153, 0.3),
              rgba(59, 130, 246, 0.3))`,
            backgroundSize: '400% 400%',
            animation: `liquidFlow ${animationDuration}s ease-in-out infinite`
          }}
        />

        {/* Text with liquid distortion */}
        <span className="relative z-10">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block animate-pulse"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${animationDuration}s`,
                transform: `translateY(${Math.sin(index * frequency) * amplitude}px)`
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>

        {/* Liquid droplets effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </span>
    )
  }
)

LiquidText.displayName = "LiquidText"

export { LiquidText }