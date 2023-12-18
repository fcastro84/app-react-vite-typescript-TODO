export interface Todo {
    id: ID,
    title: string,
    completed: boolean
}

export type ID = `${string}-${string}-${string}-${string}-${string}`

export const filters = {
    ALL: 'all',
    COMPLETED: 'completed',
    ACTIVE: 'active'
} as const 

export const BUTTON_FILTERS = {
    [filters.ALL]: { title: 'All', href: `/?filter=${filters.ALL}`},
    [filters.COMPLETED]: { title: 'Completed', href: `/?filter=${filters.COMPLETED}`},
    [filters.ACTIVE]: { title: 'Active', href: `/?filter=${filters.ACTIVE}`},
} as const

export type FilterValue = typeof filters[keyof typeof filters]