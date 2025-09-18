"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const tabsVariants = cva("", {
  variants: {
    variant: {
      default: "",
      underline: "",
      pills: "",
      buttons: "",
    },
    size: {
      sm: "",
      default: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & VariantProps<typeof tabsVariants>
>(({ className, variant = "default", size = "default", ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center text-muted-foreground",
      {
        "h-9 rounded-md bg-muted p-1": variant === "default",
        "h-10 rounded-lg bg-background border-b border-border": variant === "underline",
        "h-10 rounded-lg bg-background p-1 gap-1": variant === "pills",
        "h-10 rounded-lg bg-background p-1 gap-2": variant === "buttons",
      },
      {
        "h-8 text-xs": size === "sm",
        "h-10 text-sm": size === "default",
        "h-12 text-base": size === "lg",
      },
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & VariantProps<typeof tabsVariants> & {
    icon?: React.ReactNode
    badge?: React.ReactNode
    disabled?: boolean
  }
>(({ className, variant = "default", size = "default", icon, badge, disabled, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    disabled={disabled}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative group",
      {
        "rounded-sm px-3 py-1.5 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm": variant === "default",
        "rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-primary/5": variant === "underline",
        "rounded-md px-3 py-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm": variant === "pills",
        "rounded-md px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-sm": variant === "buttons",
      },
      {
        "px-2 py-1 text-xs": size === "sm",
        "px-3 py-1.5 text-sm": size === "default",
        "px-4 py-2 text-base": size === "lg",
      },
      disabled && "opacity-50 cursor-not-allowed",
      className
    )}
    {...props}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {props.children}
    {badge && (
      <span className="ml-2 flex items-center">
        {badge}
      </span>
    )}
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in-50 slide-in-from-bottom-1 duration-200",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }