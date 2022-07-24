import Reacr from 'react'

import { CoffeCard } from '../../../../../components/CoffeCard'
import { TitleTxt } from '../../../../../components/Typography'

import { docCoffees } from '../../../../../data/coffees'

import { ListeCoffee, OurCoffeesConteiner } from './styles'

export function OurCoffees() {
  const listeCoffees = docCoffees.map((item, index) => {
    return <CoffeCard item={item} />
  })

  return (
    <OurCoffeesConteiner className="conteiner">
      <TitleTxt size="l"> Nossos cafés</TitleTxt>

      <ListeCoffee>{listeCoffees}</ListeCoffee>
    </OurCoffeesConteiner>
  )
}
