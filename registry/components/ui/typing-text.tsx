"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TypingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  texts: string[]
  speed?: number
  delay?: number
  cursor?: boolean
  className?: string
}

const TypingText = React.forwardRef<HTMLSpanElement, TypingTextProps>(
  ({
    texts,
    speed = 100,
    delay = 1000,
    cursor = true,
    className,
    ...props
  }, ref) => {
    const [currentTextIndex, setCurrentTextIndex] = React.useState(0)
    const [displayText, setDisplayText] = React.useState("")
    const [isDeleting, setIsDeleting] = React.useState(false)
    const [isComplete, setIsComplete] = React.useState(false)

    React.useEffect(() => {
      const currentText = texts[currentTextIndex]

      const timer = setTimeout(() => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setIsComplete(true)
            if (texts.length > 1) {
              setTimeout(() => setIsDeleting(true), delay)
            }
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setIsComplete(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      }, isDeleting ? speed / 2 : speed)

      return () => clearTimeout(timer)
    }, [displayText, isDeleting, currentTextIndex, texts, speed, delay])

    return (
      <span
        ref={ref}
        className={cn(
          "inline-block",
          className
        )}
        {...props}
      >
        {displayText}
        {cursor && (
          <span className={cn(
            "ml-1 animate-pulse",
            isComplete && !isDeleting ? "opacity-50" : "opacity-100"
          )}>
            |
          </span>
        )}
      </span>
    )
  }
)

TypingText.displayName = "TypingText"

export { TypingText }