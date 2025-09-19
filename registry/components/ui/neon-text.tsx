"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface NeonTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  color?: "blue" | "green" | "pink" | "purple" | "red" | "yellow"
  intensity?: "low" | "medium" | "high"
  className?: string
}

const NeonText = React.forwardRef<HTMLSpanElement, NeonTextProps>(
  ({
    text,
    color = "blue",
    intensity = "medium",
    className,
    ...props
  }, ref) => {
    const colorClasses = {
      blue: {
        text: "text-blue-400",
        glow: "shadow-blue-500",
        border: "border-blue-400"
      },
      green: {
        text: "text-green-400",
        glow: "shadow-green-500",
        border: "border-green-400"
      },
      pink: {
        text: "text-pink-400",
        glow: "shadow-pink-500",
        border: "border-pink-400"
      },
      purple: {
        text: "text-purple-400",
        glow: "shadow-purple-500",
        border: "border-purple-400"
      },
      red: {
        text: "text-red-400",
        glow: "shadow-red-500",
        border: "border-red-400"
      },
      yellow: {
        text: "text-yellow-400",
        glow: "shadow-yellow-500",
        border: "border-yellow-400"
      }
    }

    const intensityValues = {
      low: { blur: "blur-sm", opacity: "opacity-60" },
      medium: { blur: "blur-md", opacity: "opacity-80" },
      high: { blur: "blur-lg", opacity: "opacity-100" }
    }

    const { text: textColor, glow } = colorClasses[color]
    const { blur, opacity } = intensityValues[intensity]

    return (
      <span
        ref={ref}
        className={cn(
          "relative inline-block font-bold",
          textColor,
          className
        )}
        style={{
          textShadow: `0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor`
        }}
        {...props}
      >
        {text}

        {/* Animated glow effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-lg animate-pulse",
            glow,
            blur,
            opacity
          )}
          style={{
            filter: `drop-shadow(0 0 10px currentColor)`,
            animationDuration: '2s'
          }}
        />

        {/* Flicker effect */}
        <div
          className="absolute inset-0 animate-pulse opacity-30"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
            animationDuration: '3s',
            animationDelay: '1s'
          }}
        />
      </span>
    )
  }
)

NeonText.displayName = "NeonText"

export { NeonText }