"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  frontContent: React.ReactNode
  backContent: React.ReactNode
  flipDirection?: "horizontal" | "vertical"
  flipOnHover?: boolean
  flipOnClick?: boolean
  autoFlip?: boolean
  autoFlipDelay?: number
}

const FlipCard = React.forwardRef<HTMLDivElement, FlipCardProps>(
  ({
    className,
    frontContent,
    backContent,
    flipDirection = "horizontal",
    flipOnHover = true,
    flipOnClick = false,
    autoFlip = false,
    autoFlipDelay = 3000,
    ...props
  }, ref) => {
    const [isFlipped, setIsFlipped] = React.useState(false)
    const [isHovered, setIsHovered] = React.useState(false)

    React.useEffect(() => {
      if (autoFlip) {
        const interval = setInterval(() => {
          setIsFlipped(prev => !prev)
        }, autoFlipDelay)
        return () => clearInterval(interval)
      }
    }, [autoFlip, autoFlipDelay])

    const handleClick = () => {
      if (flipOnClick) {
        setIsFlipped(!isFlipped)
      }
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
      if (flipOnHover) {
        setIsFlipped(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      if (flipOnHover) {
        setIsFlipped(false)
      }
    }

    const flipClass = flipDirection === "horizontal"
      ? (isFlipped ? "rotate-y-180" : "")
      : (isFlipped ? "rotate-x-180" : "")

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-64 h-80 cursor-pointer transform-gpu",
          "perspective-1000",
          className
        )}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div
          className={cn(
            "relative w-full h-full transition-transform duration-700 ease-out",
            "transform-style-preserve-3d",
            flipClass
          )}
        >
          {/* Front Side */}
          <div
            className={cn(
              "absolute inset-0 w-full h-full backface-hidden",
              "bg-gradient-to-br from-blue-500 to-purple-600",
              "rounded-lg shadow-lg",
              "flex items-center justify-center",
              "border border-white/20"
            )}
          >
            <div className="text-white text-center p-6">
              {frontContent}
            </div>

            {/* Animated border */}
            <div className={cn(
              "absolute inset-0 rounded-lg",
              "bg-gradient-to-r from-transparent via-white/20 to-transparent",
              "opacity-0 transition-opacity duration-500",
              isHovered && "opacity-100 animate-pulse"
            )} />
          </div>

          {/* Back Side */}
          <div
            className={cn(
              "absolute inset-0 w-full h-full backface-hidden rotate-y-180",
              flipDirection === "vertical" && "rotate-x-180",
              "bg-gradient-to-br from-purple-600 to-pink-600",
              "rounded-lg shadow-lg",
              "flex items-center justify-center",
              "border border-white/20"
            )}
          >
            <div className="text-white text-center p-6">
              {backContent}
            </div>

            {/* Animated border */}
            <div className={cn(
              "absolute inset-0 rounded-lg",
              "bg-gradient-to-r from-transparent via-white/20 to-transparent",
              "opacity-0 transition-opacity duration-500",
              isHovered && "opacity-100 animate-pulse"
            )} />
          </div>
        </div>

        {/* Floating particles effect */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-60"
                style={{
                  left: `${10 + (i % 4) * 25}%`,
                  top: `${15 + Math.floor(i / 4) * 20}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        )}

        {/* Glow effect */}
        <div className={cn(
          "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500",
          "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl -z-10",
          isHovered && "opacity-30"
        )} />
      </div>
    )
  }
)

FlipCard.displayName = "FlipCard"

export { FlipCard }