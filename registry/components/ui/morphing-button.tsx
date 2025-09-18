"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface MorphingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "circle" | "square" | "diamond" | "star"
  morphOnHover?: boolean
  children: React.ReactNode
}

const MorphingButton = React.forwardRef<HTMLButtonElement, MorphingButtonProps>(
  ({
    className,
    variant = "circle",
    morphOnHover = true,
    children,
    ...props
  }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)

    const morphStyles = {
      circle: {
        normal: "rounded-lg",
        hover: morphOnHover ? "rounded-full scale-110" : "rounded-lg"
      },
      square: {
        normal: "rounded-none",
        hover: morphOnHover ? "rounded-lg rotate-3 scale-105" : "rounded-none"
      },
      diamond: {
        normal: "rounded-lg",
        hover: morphOnHover ? "rounded-none rotate-45 scale-110" : "rounded-lg"
      },
      star: {
        normal: "rounded-lg",
        hover: morphOnHover ? "rounded-none scale-110" : "rounded-lg"
      }
    }

    const starPoints = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"

    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-all duration-500 ease-out",
          "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
          "text-white font-medium px-6 py-3",
          "shadow-lg hover:shadow-xl",
          "transform-gpu",
          morphStyles[variant].normal,
          isHovered && morphStyles[variant].hover,
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-500" />

        {/* Morphing shape overlay */}
        {variant === "star" && isHovered && morphOnHover && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-white animate-spin"
              style={{ animationDuration: '3s' }}
            >
              <path fill="currentColor" d={starPoints} />
            </svg>
          </div>
        )}

        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-inherit overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <span className={cn(
          "relative z-10 transition-all duration-300",
          isHovered && morphOnHover && "scale-110"
        )}>
          {children}
        </span>

        {/* Floating particles */}
        {isHovered && morphOnHover && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-60"
                style={{
                  left: `${15 + (i % 4) * 20}%`,
                  top: `${20 + Math.floor(i / 4) * 30}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        )}

        {/* Glow effect */}
        <div className={cn(
          "absolute inset-0 rounded-inherit opacity-0 transition-opacity duration-500",
          "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-lg",
          isHovered && "opacity-50"
        )} />
      </button>
    )
  }
)

MorphingButton.displayName = "MorphingButton"

export { MorphingButton }