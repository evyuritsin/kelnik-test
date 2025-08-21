export interface Apartment {
    id: number
    photo: string
    name: string
    rooms: number
    area: number
    floor: number
    price: number
}

export interface ApartmentState {
    apartments: Apartment[]
    loading: boolean
    error: string | null
}

export interface PriceRange {
    min: number
    max: number
}

export interface RoomOption {
    value: number
    available: boolean
}