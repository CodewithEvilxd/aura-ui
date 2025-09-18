"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hoverContent?: React.ReactNode
  hoverDelay?: number
  className?: string
}

const HoverCard = React.forwardRef<HTMLDivElement, HoverCardProps>(
  ({
    children,
    hoverContent,
    hoverDelay = 300,
    className,
    ...props
  }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [showContent, setShowContent] = React.useState(false)
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsHovered(true)
      timeoutRef.current = setTimeout(() => {
        setShowContent(true)
      }, hoverDelay)
    }

    const handleMouseLeave = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsHovered(false)
      timeoutRef.current = setTimeout(() => {
        setShowContent(false)
      }, 150)
    }

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [])

    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className={cn(
          "transition-all duration-300 ease-in-out",
          isHovered && "transform scale-105 shadow-2xl"
        )}>
          {children}
        </div>

        {hoverContent && showContent && (
          <div className={cn(
            "absolute z-50 p-4 bg-popover text-popover-foreground rounded-lg shadow-lg border",
            "animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2",
            "min-w-64 max-w-sm"
          )}>
            {hoverContent}
          </div>
        )}
      </div>
    )
  }
)
HoverCard.displayName = "HoverCard"

export { HoverCard }