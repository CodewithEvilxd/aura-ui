"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ParticleBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  particleCount?: number
  particleSize?: "sm" | "md" | "lg"
  particleColor?: string
  speed?: "slow" | "normal" | "fast"
  density?: "low" | "medium" | "high"
  children?: React.ReactNode
}

const ParticleBackground = React.forwardRef<HTMLDivElement, ParticleBackgroundProps>(
  ({
    className,
    particleCount = 50,
    particleSize = "md",
    particleColor = "rgba(59, 130, 246, 0.5)",
    speed = "normal",
    density = "medium",
    children,
    ...props
  }, ref) => {
    const [particles, setParticles] = React.useState<Array<{
      id: number
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }>>([])

    const sizeValues = {
      sm: { min: 2, max: 4 },
      md: { min: 3, max: 6 },
      lg: { min: 4, max: 8 }
    }

    const speedValues = {
      slow: 0.5,
      normal: 1,
      fast: 2
    }

    const densityValues = {
      low: 0.3,
      medium: 0.6,
      high: 1
    }

    React.useEffect(() => {
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * speedValues[speed] * densityValues[density],
        vy: (Math.random() - 0.5) * speedValues[speed] * densityValues[density],
        size: Math.random() * (sizeValues[particleSize].max - sizeValues[particleSize].min) + sizeValues[particleSize].min,
        opacity: Math.random() * 0.5 + 0.2
      }))
      setParticles(newParticles)
    }, [particleCount, particleSize, speed, density])

    React.useEffect(() => {
      const animateParticles = () => {
        setParticles(prevParticles =>
          prevParticles.map(particle => {
            let newX = particle.x + particle.vx
            let newY = particle.y + particle.vy
            let newVx = particle.vx
            let newVy = particle.vy

            // Bounce off edges
            if (newX <= 0 || newX >= 100) {
              newVx = -newVx
              newX = Math.max(0, Math.min(100, newX))
            }
            if (newY <= 0 || newY >= 100) {
              newVy = -newVy
              newY = Math.max(0, Math.min(100, newY))
            }

            return {
              ...particle,
              x: newX,
              y: newY,
              vx: newVx,
              vy: newVy
            }
          })
        )
      }

      const interval = setInterval(animateParticles, 50)
      return () => clearInterval(interval)
    }, [])

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particleColor,
                opacity: particle.opacity,
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.1s ease-out'
              }}
            />
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }
)

ParticleBackground.displayName = "ParticleBackground"

export { ParticleBackground }