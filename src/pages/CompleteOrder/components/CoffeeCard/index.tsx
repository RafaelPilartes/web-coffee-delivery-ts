import { useState } from 'react'
import { CoffeeCardConteiner, RemoveButton } from './styles'

import { ICoffeeProps } from '../../../../@types/ICoffee'
import { useCart } from '../../../../hooks/useCart'

import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularTxt } from '../../../../components/Typography'
import { separateComma } from '../../../../utils/utils'
import { Trash } from 'phosphor-react'
import { CartItem } from '../../../../context/CartContext'

interface CoffeeCardProps {
  item: CartItem
}

export function CoffeeCard({ item }: CoffeeCardProps) {
  const priceTotal = item.price * item.quanty

  const { changeCartItemQuantity, removeItemToCart } = useCart()

  function handleIncrementQuanty() {
    changeCartItemQuantity(item.id, 'increase')
  }
  function handleDecrementQuanty() {
    changeCartItemQuantity(item.id, 'decrease')
  }
  function removeItem() {
    removeItemToCart(item.id)
  }

  return (
    <CoffeeCardConteiner>
      <div className="left">
        <div className="imgConteiner">
          <img src={`/coffees/${item.photo}`} alt="" />
        </div>

        <div className="actionsAndNameConteiner">
          <RegularTxt size="m" weight={'500'}>
            {item.name}
          </RegularTxt>

          <div className="actionsConteiner">
            <QuantityInput
              quanty={item.quanty}
              onIncrementQuanty={handleIncrementQuanty}
              onDecrementQuanty={handleDecrementQuanty}
            />
            <RemoveButton onClick={removeItem}>
              <Trash />
              Remover
            </RemoveButton>
          </div>
        </div>
      </div>

      <p>{separateComma(priceTotal)} Kz</p>
    </CoffeeCardConteiner>
  )
}
