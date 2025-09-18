"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface WaveTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  waveType?: "sine" | "bounce" | "elastic"
  speed?: "slow" | "normal" | "fast"
  amplitude?: "low" | "medium" | "high"
  direction?: "horizontal" | "vertical"
  className?: string
}

const WaveText = React.forwardRef<HTMLSpanElement, WaveTextProps>(
  ({
    text,
    waveType = "sine",
    speed = "normal",
    amplitude = "medium",
    direction = "vertical",
    className,
    ...props
  }, ref) => {
    const speedValues = {
      slow: 3,
      normal: 2,
      fast: 1
    }

    const amplitudeValues = {
      low: 5,
      medium: 10,
      high: 15
    }

    const waveAnimations = {
      sine: "animate-bounce",
      bounce: "animate-pulse",
      elastic: "animate-ping"
    }

    return (
      <span
        ref={ref}
        className={cn(
          "inline-block",
          className
        )}
        {...props}
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={cn(
              "inline-block transition-all duration-300 ease-out",
              "hover:text-blue-500 hover:scale-110",
              direction === "vertical" && "animate-bounce",
              direction === "horizontal" && "animate-pulse"
            )}
            style={{
              animationDelay: `${index * 0.1 * speedValues[speed]}s`,
              animationDuration: `${speedValues[speed]}s`,
              transform: direction === "vertical"
                ? `translateY(${Math.sin(index * 0.5) * amplitudeValues[amplitude]}px)`
                : `translateX(${Math.sin(index * 0.5) * amplitudeValues[amplitude]}px)`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}

        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
      </span>
    )
  }
)

WaveText.displayName = "WaveText"

export { WaveText }