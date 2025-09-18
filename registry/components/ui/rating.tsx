"use client"

import * as React from "react"
import { IconStar, IconStarFilled } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

export interface RatingProps {
  value?: number
  onChange?: (value: number) => void
  max?: number
  size?: "sm" | "default" | "lg"
  readonly?: boolean
  className?: string
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  ({
    value = 0,
    onChange,
    max = 5,
    size = "default",
    readonly = false,
    className,
    ...props
  }, ref) => {
    const [hoverValue, setHoverValue] = React.useState(0)

    const sizeClasses = {
      sm: "h-4 w-4",
      default: "h-5 w-5",
      lg: "h-6 w-6"
    }

    const handleClick = (rating: number) => {
      if (!readonly && onChange) {
        onChange(rating)
      }
    }

    const handleMouseEnter = (rating: number) => {
      if (!readonly) {
        setHoverValue(rating)
      }
    }

    const handleMouseLeave = () => {
      if (!readonly) {
        setHoverValue(0)
      }
    }

    const getStarValue = (index: number) => {
      const currentValue = hoverValue || value
      if (currentValue >= index + 1) return "filled"
      if (currentValue >= index + 0.5) return "half"
      return "empty"
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center space-x-1", className)}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {Array.from({ length: max }, (_, index) => {
          const starValue = getStarValue(index)
          const isActive = starValue === "filled" || starValue === "half"

          return (
            <button
              key={index}
              type="button"
              className={cn(
                "transition-colors duration-150",
                readonly ? "cursor-default" : "cursor-pointer hover:scale-110",
                isActive ? "text-yellow-400" : "text-gray-300 hover:text-yellow-300"
              )}
              onClick={() => handleClick(index + 1)}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              disabled={readonly}
            >
              {isActive ? (
                <IconStarFilled className={sizeClasses[size]} />
              ) : (
                <IconStar className={sizeClasses[size]} />
              )}
            </button>
          )
        })}
        <span className="ml-2 text-sm text-muted-foreground">
          {value > 0 && `${value}/${max}`}
        </span>
      </div>
    )
  }
)
Rating.displayName = "Rating"

export { Rating }