'use client'

import React from 'react'
import { DataTable } from '../../../registry/components/ui/data-table'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
}

const sampleData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
]

const columns = [
  { key: 'name' as keyof User, header: 'Name', sortable: true },
  { key: 'email' as keyof User, header: 'Email', sortable: true },
  { key: 'role' as keyof User, header: 'Role' },
  {
    key: 'status' as keyof User,
    header: 'Status',
    render: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {value}
      </span>
    )
  }
]

export const DataTableShowcase = () => {
  return (
    <DataTable
      data={sampleData}
      columns={columns}
      onSort={(key, direction) => console.log(`Sorting by ${key} ${direction}`)}
    />
  )
}