"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { IconX } from "@tabler/icons-react"

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}: ModalProps) => {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative bg-background rounded-lg shadow-lg max-w-md w-full mx-4 max-h-[90vh] overflow-auto",
          className
        )}
      >
        {(title || true) && (
          <div className="flex items-center justify-between p-6 border-b">
            {title && (
              <h2 className="text-lg font-semibold">{title}</h2>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-accent transition-colors"
            >
              <IconX size={20} />
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export { Modal }