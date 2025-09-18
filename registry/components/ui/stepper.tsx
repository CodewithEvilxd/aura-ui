"use client"

import * as React from "react"
import { IconCheck, IconChevronRight } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

export interface Step {
  id: string
  title: string
  description?: string
  completed?: boolean
}

export interface StepperProps {
  steps: Step[]
  currentStep: number
  onStepChange?: (step: number) => void
  className?: string
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ steps, currentStep, onStepChange, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isCompleted = step.completed || index < currentStep
            const isCurrent = index === currentStep
            const isClickable = onStepChange && (isCompleted || index === currentStep)

            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => isClickable && onStepChange(index)}
                    disabled={!isClickable}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-medium transition-all",
                      isCompleted
                        ? "border-green-500 bg-green-500 text-white"
                        : isCurrent
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground/30 bg-background text-muted-foreground",
                      isClickable && "hover:scale-105 cursor-pointer"
                    )}
                  >
                    {isCompleted ? (
                      <IconCheck className="h-5 w-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </button>
                  <div className="mt-2 text-center">
                    <div className={cn(
                      "text-sm font-medium",
                      isCurrent ? "text-primary" : isCompleted ? "text-green-600" : "text-muted-foreground"
                    )}>
                      {step.title}
                    </div>
                    {step.description && (
                      <div className="text-xs text-muted-foreground mt-1 max-w-24">
                        {step.description}
                      </div>
                    )}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex-1 mx-4">
                    <div className={cn(
                      "h-0.5 w-full transition-colors",
                      index < currentStep ? "bg-green-500" : "bg-muted-foreground/30"
                    )} />
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    )
  }
)
Stepper.displayName = "Stepper"

export { Stepper }