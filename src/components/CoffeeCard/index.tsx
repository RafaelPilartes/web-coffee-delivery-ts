import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  TagsContainer
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import coffee from '../../assets/intro-img.png'
import { RegularTxt, TitleTxt } from '../Typography'
import { QuantityInput } from '../QuantityInput'
import { ICoffeeProps } from '../../@types/ICoffee'
import { separateComma } from '../../utils/utils'
import { useCart } from '../../hooks/useCart'
import { CartItem } from '../../context/CartContext'
import { useState } from 'react'

export function CoffeeCard({ item }: ICoffeeProps) {
  const { addCoffeeToCart } = useCart()
  const [quanty, setQuanty] = useState<number>(1)

  const listTags = item.tags.map((tag, index) => <span key={index}>{tag}</span>)

  function handleIncrementQuanty() {
    setQuanty(oldState => oldState + 1)
  }
  function handleDecrementQuanty() {
    setQuanty(oldState => oldState - 1)
  }
  function handleCart() {
    const coffeeAdd = { ...item, quanty }
    addCoffeeToCart(coffeeAdd)
  }

  return (
    <CoffeeCardContainer>
      <div className="imgContainer">
        <img src={`/coffees/${item.photo}`} />
      </div>

      <TagsContainer>{listTags}</TagsContainer>

      <TitleTxt size="s" color="subtitle" weight={700}>
        {item.name}
      </TitleTxt>

      <RegularTxt size="s" color="label">
        {item.description}
      </RegularTxt>

      <CardFooter>
        <div>
          <TitleTxt size="m" color="text">
            {separateComma(item.price)}
          </TitleTxt>
          <RegularTxt size="s"> Kz </RegularTxt>
        </div>

        <AddCartWrapper>
          <QuantityInput
            quanty={quanty}
            onIncrementQuanty={handleIncrementQuanty}
            onDecrementQuanty={handleDecrementQuanty}
          />
          <button onClick={handleCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
