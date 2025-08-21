export interface ApiResponse<T> {
    data: T
    message?: string
    status: number
    total?: number
    page?: number
    limit?: number
}

export interface PaginatedResponse<T> {
    items: T[]
    total: number
    page: number
    limit: number
    totalPages: number
}