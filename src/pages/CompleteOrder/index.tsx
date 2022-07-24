import React from 'react'
import { SelectedCoffees } from './components/_sections/SelectedCoffee'
import { CompleteOrdeForm } from './components/_sections/CompleteOrdeForm'
import { CompleteOrderConteiner, SectionBaseStyle } from './styles'

export function CompleteOrder() {
  return (
    <CompleteOrderConteiner className="conteiner">
      <CompleteOrdeForm />
      <SelectedCoffees />
    </CompleteOrderConteiner>
  )
}
