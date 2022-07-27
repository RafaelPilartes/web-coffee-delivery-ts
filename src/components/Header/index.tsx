import {
  ConteinerHeader,
  ConteinerHeaderButtons,
  HeaderButtons
} from './styles'

import coffeeLogo from '../../assets/coffee-delivery-logo.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { routsName } from '../../data/routsName'

export function Header() {
  const navigate = useNavigate()
  const { cartQuantity } = useCart()

  return (
    <ConteinerHeader>
      <div className="conteiner">
        <NavLink to={routsName.home}>
          <div>
            <img src={coffeeLogo} alt="" />
          </div>
        </NavLink>
        <ConteinerHeaderButtons>
          <HeaderButtons variant="purple">
            <MapPin size={20} weight="fill" />
            Rua 21 de Janeiro
          </HeaderButtons>
          <NavLink to={routsName.completeOrder}>
            <HeaderButtons variant="yellow">
              <ShoppingCart size={20} weight="fill" />
              {cartQuantity}
            </HeaderButtons>
          </NavLink>
        </ConteinerHeaderButtons>
      </div>
    </ConteinerHeader>
  )
}
