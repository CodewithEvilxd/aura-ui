"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TypewriterTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  speed?: number
  delay?: number
  loop?: boolean
  cursor?: boolean
  className?: string
}

const TypewriterText = React.forwardRef<HTMLSpanElement, TypewriterTextProps>(
  ({
    text,
    speed = 100,
    delay = 0,
    loop = false,
    cursor = true,
    className,
    ...props
  }, ref) => {
    const [displayText, setDisplayText] = React.useState("")
    const [isComplete, setIsComplete] = React.useState(false)

    React.useEffect(() => {
      let typingTimer: NodeJS.Timeout
      let delayTimer: NodeJS.Timeout

      const startTyping = () => {
        let index = 0
        typingTimer = setInterval(() => {
          if (index < text.length) {
            setDisplayText(text.slice(0, index + 1))
            index++
          } else {
            setIsComplete(true)
            if (loop) {
              setTimeout(() => {
                setDisplayText("")
                setIsComplete(false)
                startTyping()
              }, 2000)
            }
            clearInterval(typingTimer)
          }
        }, speed)
      }

      if (delay > 0) {
        delayTimer = setTimeout(() => {
          startTyping()
        }, delay)
      } else {
        startTyping()
      }

      return () => {
        if (delayTimer) clearTimeout(delayTimer)
        if (typingTimer) clearInterval(typingTimer)
      }
    }, [delay, text, speed, loop])

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
        {cursor && !isComplete && (
          <span className="animate-pulse ml-1">|</span>
        )}
        {cursor && isComplete && !loop && (
          <span className="animate-pulse ml-1 opacity-50">|</span>
        )}
      </span>
    )
  }
)

TypewriterText.displayName = "TypewriterText"

export { TypewriterText }