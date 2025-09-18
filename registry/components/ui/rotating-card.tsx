"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface RotatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  frontContent: React.ReactNode
  backContent?: React.ReactNode
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
  topContent?: React.ReactNode
  bottomContent?: React.ReactNode
  autoRotate?: boolean
  rotateSpeed?: "slow" | "normal" | "fast"
  size?: "sm" | "md" | "lg"
}

const RotatingCard = React.forwardRef<HTMLDivElement, RotatingCardProps>(
  ({
    className,
    frontContent,
    backContent,
    leftContent,
    rightContent,
    topContent,
    bottomContent,
    autoRotate = true,
    rotateSpeed = "normal",
    size = "md",
    ...props
  }, ref) => {
    const [rotation, setRotation] = React.useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = React.useState(false)
    const cardRef = React.useRef<HTMLDivElement>(null)

    const sizeValues = {
      sm: "w-32 h-32",
      md: "w-48 h-48",
      lg: "w-64 h-64"
    }

    const speedValues = {
      slow: 20,
      normal: 10,
      fast: 5
    }

    React.useEffect(() => {
      if (!autoRotate || !isHovered) return

      const interval = setInterval(() => {
        setRotation(prev => ({
          x: prev.x + 0.5,
          y: prev.y + 0.5
        }))
      }, speedValues[rotateSpeed])

      return () => clearInterval(interval)
    }, [autoRotate, isHovered, rotateSpeed])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const x = (e.clientY - centerY) / 10
      const y = (e.clientX - centerX) / 10

      setRotation({ x, y })
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => {
      setIsHovered(false)
      setRotation({ x: 0, y: 0 })
    }

    const faces = [
      { content: frontContent, transform: "translateZ(6rem)" },
      { content: backContent, transform: "translateZ(-6rem) rotateY(180deg)" },
      { content: rightContent, transform: "rotateY(90deg) translateZ(6rem)" },
      { content: leftContent, transform: "rotateY(-90deg) translateZ(6rem)" },
      { content: topContent, transform: "rotateX(90deg) translateZ(6rem)" },
      { content: bottomContent, transform: "rotateX(-90deg) translateZ(6rem)" }
    ].filter(face => face.content)

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex items-center justify-center",
          sizeValues[size],
          className
        )}
        style={{ perspective: "1000px" }}
        {...props}
      >
        <div
          ref={cardRef}
          className={cn(
            "relative transform-gpu transition-transform duration-300 ease-out",
            "preserve-3d cursor-pointer"
          )}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {faces.map((face, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
                "border border-white/20 rounded-lg shadow-lg",
                "backface-hidden"
              )}
              style={{
                transform: face.transform,
              }}
            >
              <div className="text-white text-center p-4">
                {face.content}
              </div>

              {/* Animated border */}
              <div className={cn(
                "absolute inset-0 rounded-lg",
                "bg-gradient-to-r from-transparent via-white/30 to-transparent",
                "opacity-0 transition-opacity duration-500",
                isHovered && "opacity-100"
              )} />
            </div>
          ))}

          {/* Default front face if no content provided */}
          {faces.length === 0 && (
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
                "border border-white/20 rounded-lg shadow-lg",
                "backface-hidden"
              )}
              style={{ transform: "translateZ(6rem)" }}
            >
              <div className="text-white text-center p-4">
                {frontContent}
              </div>
            </div>
          )}
        </div>

        {/* Glow effect */}
        <div className={cn(
          "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500",
          "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl -z-10",
          isHovered && "opacity-40"
        )} />

        {/* Floating particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-60"
                style={{
                  left: `${15 + (i % 4) * 20}%`,
                  top: `${15 + Math.floor(i / 4) * 20}%`,
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
)

RotatingCard.displayName = "RotatingCard"

export { RotatingCard }