import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full border-2 border-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        default: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-20 w-20",
      },
      status: {
        online: "ring-2 ring-green-500",
        offline: "ring-2 ring-gray-400",
        away: "ring-2 ring-yellow-500",
        busy: "ring-2 ring-red-500",
        none: "",
      },
    },
    defaultVariants: {
      size: "default",
      status: "none",
    },
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: string
  badge?: React.ReactNode
  badgePosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  onClick?: () => void
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({
    className,
    size,
    status,
    src,
    alt = "Avatar",
    fallback,
    badge,
    badgePosition = "bottom-right",
    onClick,
    children,
    ...props
  }, ref) => {
    const [imageError, setImageError] = React.useState(false)
    const [imageLoading, setImageLoading] = React.useState(!!src)

    const handleImageLoad = () => {
      setImageLoading(false)
      setImageError(false)
    }

    const handleImageError = () => {
      setImageLoading(false)
      setImageError(true)
    }

    const getInitials = (name?: string) => {
      if (!name) return "?"
      return name
        .split(" ")
        .map(word => word.charAt(0))
        .join("")
        .toUpperCase()
        .slice(0, 2)
    }

    const getBadgePosition = () => {
      const positions = {
        "top-left": "-top-1 -left-1",
        "top-right": "-top-1 -right-1",
        "bottom-left": "-bottom-1 -left-1",
        "bottom-right": "-bottom-1 -right-1",
      }
      return positions[badgePosition]
    }

    return (
      <div
        ref={ref}
        className={cn(
          avatarVariants({ size, status }),
          onClick && "cursor-pointer",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {/* Image */}
        {src && !imageError && (
          <img
            src={src}
            alt={alt}
            className="aspect-square h-full w-full object-cover transition-opacity duration-300"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ opacity: imageLoading ? 0.3 : 1 }}
            loading="lazy"
          />
        )}

        {/* Loading state */}
        {imageLoading && src && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
          </div>
        )}

        {/* Fallback */}
        {(!src || imageError) && !imageLoading && (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-inner">
            {fallback || getInitials(alt)}
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div
            className={cn(
              "absolute flex items-center justify-center rounded-full bg-white p-1 shadow-lg border-2 border-white",
              getBadgePosition()
            )}
          >
            {badge}
          </div>
        )}

        {children}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

export { Avatar, avatarVariants }