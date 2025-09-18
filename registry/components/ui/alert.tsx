import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { IconX, IconCircle, IconAlertTriangle, IconInbox } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive bg-destructive/5",
        success: "border-green-500/50 text-green-700 dark:text-green-400 [&>svg]:text-green-600 bg-green-50 dark:bg-green-950/20",
        warning: "border-yellow-500/50 text-yellow-700 dark:text-yellow-400 [&>svg]:text-yellow-600 bg-yellow-50 dark:bg-yellow-950/20",
        info: "border-blue-500/50 text-blue-700 dark:text-blue-400 [&>svg]:text-blue-600 bg-blue-50 dark:bg-blue-950/20",
      },
      size: {
        sm: "p-3 [&>svg~*]:pl-6",
        default: "p-4 [&>svg~*]:pl-7",
        lg: "p-6 [&>svg~*]:pl-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
  autoHide?: boolean
  autoHideDelay?: number
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({
    className,
    variant,
    size,
    dismissible,
    onDismiss,
    icon,
    autoHide,
    autoHideDelay = 5000,
    children,
    ...props
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true)

    React.useEffect(() => {
      if (autoHide && isVisible) {
        const timer = setTimeout(() => {
          setIsVisible(false)
          onDismiss?.()
        }, autoHideDelay)

        return () => clearTimeout(timer)
      }
    }, [autoHide, autoHideDelay, isVisible, onDismiss])

    const handleDismiss = () => {
      setIsVisible(false)
      onDismiss?.()
    }

    const getDefaultIcon = () => {
      switch (variant) {
        case 'success':
          return <IconCircle size={16} />
        case 'warning':
          return <IconAlertTriangle size={16} />
        case 'destructive':
          return <IconX size={16} />
        case 'info':
          return <IconInbox size={16} />
        default:
          return null
      }
    }

    if (!isVisible) return null

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, size }), className)}
        {...props}
      >
        {(icon || getDefaultIcon()) && (
          <div className="flex-shrink-0">
            {icon || getDefaultIcon()}
          </div>
        )}
        <div className="flex-1">
          {children}
        </div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 ml-4 hover:bg-black/10 rounded-full p-1 transition-colors"
            aria-label="Dismiss alert"
          >
            <IconX size={14} />
          </button>
        )}
      </div>
    )
  }
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }