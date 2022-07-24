import {
  ConteinerHeader,
  ConteinerHeaderButtons,
  HeaderButtons
} from './styles'

import coffeeLogo from '../../assets/coffee-delivery-logo.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink, useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }
  const goToCart = () => {
    navigate('/completeOrder')
  }

  return (
    <ConteinerHeader>
      <div className="conteiner">
        <NavLink to={'/'}>
          <div>
            <img src={coffeeLogo} alt="" />
          </div>
        </NavLink>
        <ConteinerHeaderButtons>
          <HeaderButtons variant="purple">
            <MapPin size={20} weight="fill" />
            Rua 21 de Janeiro
          </HeaderButtons>
          <NavLink to={'/completeOrder'}>
            <HeaderButtons variant="yellow">
              <ShoppingCart size={20} weight="fill" />
            </HeaderButtons>
          </NavLink>
        </ConteinerHeaderButtons>
      </div>
    </ConteinerHeader>
  )
}
