"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface FloatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "low" | "medium" | "high"
  children: React.ReactNode
}

const FloatingCard = React.forwardRef<HTMLDivElement, FloatingCardProps>(
  ({ className, intensity = "medium", children, ...props }, ref) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = React.useState(false)
    const cardRef = React.useRef<HTMLDivElement>(null)

    const intensityValues = {
      low: { rotate: 2, translate: 4, scale: 1.02 },
      medium: { rotate: 5, translate: 8, scale: 1.05 },
      high: { rotate: 8, translate: 12, scale: 1.08 }
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const x = (e.clientX - centerX) / (rect.width / 2)
      const y = (e.clientY - centerY) / (rect.height / 2)

      setMousePosition({ x, y })
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => {
      setIsHovered(false)
      setMousePosition({ x: 0, y: 0 })
    }

    const { rotate, translate, scale } = intensityValues[intensity]

    return (
      <div
        ref={ref}
        className={cn(
          "relative transform-gpu transition-all duration-300 ease-out",
          "hover:shadow-2xl hover:shadow-black/25",
          className
        )}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateY(${mousePosition.x * rotate}deg) rotateX(${-mousePosition.y * rotate}deg) translateZ(${translate}px) scale(${scale})`
            : "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-lg bg-background border shadow-lg"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm" />

          {/* Content */}
          <div className="relative z-10 p-6">
            {children}
          </div>

          {/* Floating particles effect */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-ping"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
)

FloatingCard.displayName = "FloatingCard"

export { FloatingCard }