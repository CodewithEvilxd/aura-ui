"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TooltipProps {
  content: string
  children: React.ReactNode
  className?: string
  position?: "top" | "bottom" | "left" | "right"
}

const Tooltip = ({
  content,
  children,
  className,
  position = "top",
}: TooltipProps) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 px-3 py-2 text-sm text-white bg-black rounded-md shadow-lg whitespace-nowrap",
            "animate-in fade-in-0 zoom-in-95",
            positionClasses[position],
            className
          )}
        >
          {content}
          <div
            className={cn(
              "absolute w-2 h-2 bg-black transform rotate-45",
              position === "top" && "top-full left-1/2 -translate-x-1/2 -mt-1",
              position === "bottom" && "bottom-full left-1/2 -translate-x-1/2 -mb-1",
              position === "left" && "left-full top-1/2 -translate-y-1/2 -ml-1",
              position === "right" && "right-full top-1/2 -translate-y-1/2 -mr-1"
            )}
          />
        </div>
      )}
    </div>
  )
}

export { Tooltip }