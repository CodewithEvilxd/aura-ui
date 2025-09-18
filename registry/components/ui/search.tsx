"use client"

import * as React from "react"
import { IconSearch, IconX } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
  placeholder?: string
  showClearButton?: boolean
  className?: string
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({
    className,
    onSearch,
    placeholder = "Search...",
    showClearButton = true,
    onChange,
    ...props
  }, ref) => {
    const [value, setValue] = React.useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setValue(newValue)
      onChange?.(e)
      onSearch?.(newValue)
    }

    const handleClear = () => {
      setValue("")
      onSearch?.("")
    }

    return (
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IconSearch className="h-4 w-4 text-muted-foreground" />
        </div>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
        {showClearButton && value && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <IconX className="h-4 w-4" />
          </button>
        )}
      </div>
    )
  }
)
Search.displayName = "Search"

export { Search }