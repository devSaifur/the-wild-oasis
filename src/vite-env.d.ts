/// <reference types="vite/client" />

type Cabin = {
  id: number
  created_at: string
  name: string
  maxCapacity: number
  regularPrice: number
  discount: number
  description: string
  image: string
}

type Setting = {
  id: number
  created_at: string
  minBookingLength: number
  maxBookingLength: number
  maxGuestsPerBooking: number
  breakfastPrice: number
}
