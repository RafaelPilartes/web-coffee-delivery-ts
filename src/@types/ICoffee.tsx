import React from 'react'

export interface CoffeeProps {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}
export interface ICoffeeProps {
  item: CoffeeProps
}
