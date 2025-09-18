"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ColorPickerProps {
  value?: string
  onChange?: (color: string) => void
  colors?: string[]
  className?: string
}

const defaultColors = [
  "#ef4444", "#f97316", "#f59e0b", "#eab308", "#84cc16",
  "#22c55e", "#10b981", "#14b8a6", "#06b6d4", "#0ea5e9",
  "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#d946ef",
  "#ec4899", "#f43f5e", "#64748b", "#6b7280", "#374151"
]

const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(
  ({
    value = "#3b82f6",
    onChange,
    colors = defaultColors,
    className,
    ...props
  }, ref) => {
    const [selectedColor, setSelectedColor] = React.useState(value)

    const handleColorSelect = (color: string) => {
      setSelectedColor(color)
      onChange?.(color)
    }

    return (
      <div ref={ref} className={cn("space-y-3", className)} {...props}>
        <div className="flex items-center space-x-3">
          <div
            className="w-12 h-12 rounded-lg border-2 border-white shadow-lg"
            style={{ backgroundColor: selectedColor }}
          />
          <div>
            <div className="text-sm font-medium">Selected Color</div>
            <div className="text-xs text-muted-foreground font-mono">
              {selectedColor.toUpperCase()}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorSelect(color)}
              className={cn(
                "w-8 h-8 rounded-md border-2 transition-all duration-200 hover:scale-110",
                selectedColor === color
                  ? "border-white shadow-lg ring-2 ring-offset-2 ring-primary"
                  : "border-gray-200 hover:border-gray-300"
              )}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => handleColorSelect(e.target.value)}
            className="w-12 h-8 rounded border border-input cursor-pointer"
          />
          <input
            type="text"
            value={selectedColor}
            onChange={(e) => handleColorSelect(e.target.value)}
            className="flex-1 px-3 py-2 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="#000000"
          />
        </div>
      </div>
    )
  }
)
ColorPicker.displayName = "ColorPicker"

export { ColorPicker }