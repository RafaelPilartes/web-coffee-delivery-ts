import Reacr from 'react'

import { CoffeeCard } from '../../../../../components/CoffeeCard'
import { TitleTxt } from '../../../../../components/Typography'

import { docCoffees } from '../../../../../data/coffees'

import { ListeCoffee, OurCoffeesContainer } from './styles'

export function OurCoffees() {
  const listeCoffees = docCoffees.map((item, index) => {
    return <CoffeeCard item={item} />
  })

  return (
    <OurCoffeesContainer className="conteiner">
      <TitleTxt size="l"> Nossos cafés</TitleTxt>

      <ListeCoffee>{listeCoffees}</ListeCoffee>
    </OurCoffeesContainer>
  )
}
