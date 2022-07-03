export interface I_Pagination {
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: string
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: null
  nextPage: null
}
