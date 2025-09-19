"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface BounceTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  speed?: "slow" | "normal" | "fast"
  className?: string
}

const BounceText = React.forwardRef<HTMLSpanElement, BounceTextProps>(
  ({
    text,
    speed = "normal",
    className,
    ...props
  }, ref) => {
    const speedValues = {
      slow: 0.8,
      normal: 0.6,
      fast: 0.4
    }

    const animationDuration = speedValues[speed]

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
            className="inline-block animate-bounce"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: `${animationDuration}s`,
              animationTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    )
  }
)

BounceText.displayName = "BounceText"

export { BounceText }