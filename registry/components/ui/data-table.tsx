"use client"

import * as React from "react"
import { IconChevronUp, IconChevronDown, IconChevronsUp, IconChevronsDown } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

export interface Column<T> {
  key: keyof T
  header: string
  sortable?: boolean
  render?: (value: any, item: T) => React.ReactNode
  className?: string
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  onSort?: (key: keyof T, direction: 'asc' | 'desc') => void
  className?: string
  emptyMessage?: string
}

function DataTable<T extends Record<string, any>>({
  data,
  columns,
  onSort,
  className,
  emptyMessage = "No data available"
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = React.useState<keyof T | null>(null)
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc')

  const handleSort = (key: keyof T) => {
    const newDirection = sortKey === key && sortDirection === 'asc' ? 'desc' : 'asc'
    setSortKey(key)
    setSortDirection(newDirection)
    onSort?.(key, newDirection)
  }

  const getSortIcon = (key: keyof T) => {
    if (sortKey !== key) return null

    if (sortDirection === 'asc') {
      return <IconChevronUp className="h-4 w-4" />
    } else {
      return <IconChevronDown className="h-4 w-4" />
    }
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        {emptyMessage}
      </div>
    )
  }

  return (
    <div className={cn("w-full overflow-auto", className)}>
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(
                  "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
                  column.sortable && "cursor-pointer select-none hover:text-foreground",
                  column.className
                )}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center space-x-2">
                  <span>{column.header}</span>
                  {column.sortable && (
                    <div className="flex flex-col">
                      {getSortIcon(column.key) || (
                        <div className="flex flex-col opacity-50">
                          <IconChevronsUp className="h-3 w-3 -mb-1" />
                          <IconChevronsDown className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={cn("p-4 align-middle", column.className)}
                >
                  {column.render
                    ? column.render(item[column.key], item)
                    : String(item[column.key] || '')
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { DataTable }