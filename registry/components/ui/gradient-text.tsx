"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  colors?: string[]
  direction?: "horizontal" | "vertical" | "diagonal"
  speed?: "slow" | "normal" | "fast"
  className?: string
}

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({
    text,
    colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"],
    direction = "horizontal",
    speed = "normal",
    className,
    ...props
  }, ref) => {
    const speedValues = {
      slow: 4,
      normal: 3,
      fast: 2
    }

    const directionClasses = {
      horizontal: "bg-gradient-to-r",
      vertical: "bg-gradient-to-b",
      diagonal: "bg-gradient-to-br"
    }

    const gradientColors = colors.join(", ")

    return (
      <span
        ref={ref}
        className={cn(
          "inline-block bg-clip-text text-transparent font-bold",
          directionClasses[direction],
          className
        )}
        style={{
          background: `linear-gradient(45deg, ${gradientColors})`,
          backgroundSize: '400% 400%',
          animation: `gradientShift ${speedValues[speed]}s ease infinite`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
        {...props}
      >
        {text}
      </span>
    )
  }
)

GradientText.displayName = "GradientText"

export { GradientText }