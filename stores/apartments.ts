import { defineStore } from 'pinia'
import type { Apartment } from '~/types/apartment'
import { sampleApartments } from '~/data/apartments'

export const useApartmentsStore = defineStore('apartments', {
    state: () => ({
        apartments: [] as Apartment[],
        loading: false,
        error: null as string | null,
    }),

    getters: {
        // Получить все квартиры
        getAllApartments: (state) => state.apartments,

        // Получить квартиры по количеству комнат
        getApartmentsByRooms: (state) => (rooms: number) => {
            return state.apartments.filter(apartment => apartment.rooms === rooms)
        },

        // Получить квартиры в заданном диапазоне цен
        getApartmentsByPriceRange: (state) => (min: number, max: number) => {
            return state.apartments.filter(
                apartment => apartment.price >= min && apartment.price <= max
            )
        },

        // Получить квартиры на заданном этаже
        getApartmentsByFloor: (state) => (floor: number) => {
            return state.apartments.filter(apartment => apartment.floor === floor)
        },

        // Получить квартиры в заданном диапазоне площади
        getApartmentsByAreaRange: (state) => (min: number, max: number) => {
            return state.apartments.filter(
                apartment => apartment.area >= min && apartment.area <= max
            )
        },

        // Получить квартиру по ID
        getApartmentById: (state) => (id: number) => {
            return state.apartments.find(apartment => apartment.id === id)
        },

        // Получить общее количество квартир
        getTotalApartments: (state) => state.apartments.length,

        // Получить среднюю цену
        getAveragePrice: (state) => {
            if (state.apartments.length === 0) return 0
            const total = state.apartments.reduce((sum, apt) => sum + apt.price, 0)
            return Math.round(total / state.apartments.length)
        },

        // Получить среднюю площадь
        getAverageArea: (state) => {
            if (state.apartments.length === 0) return 0
            const total = state.apartments.reduce((sum, apt) => sum + apt.area, 0)
            return Math.round(total / state.apartments.length * 100) / 100
        },

        // Получить максимальный этаж
        getMaxFloor: (state) => {
            if (state.apartments.length === 0) return 0
            return Math.max(...state.apartments.map(apt => apt.floor))
        },

        // Получить уникальные значения для фильтров
        getUniqueRooms: (state) => {
            return [...new Set(state.apartments.map(apt => apt.rooms))].sort()
        },

        getUniqueFloors: (state) => {
            return [...new Set(state.apartments.map(apt => apt.floor))].sort((a, b) => a - b)
        },

        getPriceRange: (state) => {
            if (state.apartments.length === 0) return { min: 0, max: 0 }
            const prices = state.apartments.map(apt => apt.price)
            return {
                min: Math.min(...prices),
                max: Math.max(...prices)
            }
        },

        getAreaRange: (state) => {
            if (state.apartments.length === 0) return { min: 0, max: 0 }
            const areas = state.apartments.map(apt => apt.area)
            return {
                min: Math.min(...areas),
                max: Math.max(...areas)
            }
        }
    },

    actions: {
        // Добавить квартиру
        addApartment(apartment: Omit<Apartment, 'id'>) {
            const newApartment: Apartment = {
                ...apartment,
                id: Date.now()
            }
            this.apartments.push(newApartment)
        },

        // Удалить квартиру
        removeApartment(id: number) {
            this.apartments = this.apartments.filter(apt => apt.id !== id)
        },

        // Загрузить квартиры (с использованием примеров данных)
        async fetchApartments() {
            this.loading = true
            this.error = null

            try {
                // Имитация API вызова с задержкой
                await new Promise(resolve => setTimeout(resolve, 800))

                this.apartments = [...sampleApartments]
            } catch (error) {
                this.error = 'Ошибка при загрузке квартир'
                console.error('Ошибка загрузки квартир:', error)
            } finally {
                this.loading = false
            }
        },
        // версия с использованием запроса на сервер
        async fetchApartmentsAPI() {
            this.loading = true
            this.error = null

            try {
                const response = await $fetch<ApiResponse<Apartment[]>>('/api/apartments')

                if (response.data && Array.isArray(response.data)) {
                    this.apartments = response.data
                } else {
                    throw new Error('Неверный формат данных от API')
                }

            } catch (error: any) {
                console.error('Ошибка загрузки квартир:', error)
                this.error = error.message || 'Ошибка при загрузке квартир'
                this.apartments = [...sampleApartments]
            } finally {
                this.loading = false
            }
        },

        // Очистить store
        clearApartments() {
            this.apartments = []
            this.error = null
        },

        // Сортировка квартир
        sortApartments(sortBy: keyof Apartment, ascending: boolean = true) {
            this.apartments.sort((a, b) => {
                if (a[sortBy] < b[sortBy]) return ascending ? -1 : 1
                if (a[sortBy] > b[sortBy]) return ascending ? 1 : -1
                return 0
            })
        },

        // Поиск квартир по названию
        searchApartments(query: string) {
            if (!query) return this.apartments
            return this.apartments.filter(apt =>
                apt.name.toLowerCase().includes(query.toLowerCase())
            )
        }
    }
})