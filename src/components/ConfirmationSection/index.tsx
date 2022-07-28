import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { routsName } from '../../data/routsName'
import { useCart } from '../../hooks/useCart'
import { useMyContext } from '../../hooks/useMyContext'
import { separateComma } from '../../utils/utils'
import { RegularTxt } from '../Typography'
import {
  ButtonConfirmation,
  ConfirmationSectionContainer as ConfirmationSectionContainer
} from './styles'

const DELIVERY_PRICE = 2260

export function ConfirmationSection() {
  const [btnIsDisabled, setBtnIsDisabled] = useState<boolean>(true)
  const [btnIsLoading, setBtnIsLoading] = useState<boolean>(false)
  const { cartItemTotal, cartQuantity } = useCart()
  const { isLoading } = useMyContext()

  const cartTotal = cartItemTotal + DELIVERY_PRICE

  const navigate = useNavigate()

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularTxt size="s"> Subtotal </RegularTxt>
        <RegularTxt> {separateComma(cartItemTotal)}Kz </RegularTxt>
      </div>
      <div>
        <RegularTxt size="s"> Entrega </RegularTxt>
        <RegularTxt> {separateComma(DELIVERY_PRICE)}Kz </RegularTxt>
      </div>
      <div>
        <RegularTxt color="subtitle" weight={700} size="l">
          Total
        </RegularTxt>
        <RegularTxt color="subtitle" weight={700} size="l">
          {separateComma(cartTotal)}Kz
        </RegularTxt>
      </div>

      <ButtonConfirmation
        type="submit"
        disabled={cartQuantity <= 0 || isLoading}
      >
        {isLoading ? 'Carregando ...' : 'Confirmar pedido'}
      </ButtonConfirmation>
    </ConfirmationSectionContainer>
  )
}
