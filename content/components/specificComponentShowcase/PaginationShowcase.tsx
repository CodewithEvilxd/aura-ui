'use client'

import React from 'react'
import { Pagination } from '../../../registry/components/ui/pagination'

export const PaginationShowcase = () => {
  const [currentPage, setCurrentPage] = React.useState(3)

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
    />
  )
}