"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface FadeInTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  stagger?: boolean
  className?: string
}

const FadeInText = React.forwardRef<HTMLSpanElement, FadeInTextProps>(
  ({
    text,
    direction = "up",
    delay = 0,
    duration = 0.6,
    stagger = false,
    className,
    ...props
  }, ref) => {
    const directionTransforms = {
      up: "translateY(20px)",
      down: "translateY(-20px)",
      left: "translateX(20px)",
      right: "translateX(-20px)",
      none: "translateY(0)"
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
        {stagger ? (
          text.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-fade-in"
              style={{
                animationDelay: `${delay + index * 0.1}s`,
                animationDuration: `${duration}s`,
                animationFillMode: 'forwards'
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))
        ) : (
          <span
            className="inline-block opacity-0 animate-fade-in"
            style={{
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              animationFillMode: 'forwards',
              transform: directionTransforms[direction]
            }}
          >
            {text}
          </span>
        )}
      </span>
    )
  }
)

FadeInText.displayName = "FadeInText"

export { FadeInText }