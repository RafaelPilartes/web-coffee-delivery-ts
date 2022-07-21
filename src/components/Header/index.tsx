import {
  ConteinerHeader,
  ConteinerHeaderButtons,
  HeaderButtons
} from './styles'

import coffeeLogo from '../../assets/coffee-delivery-logo.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

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
        <div onClick={goToHome}>
          <img src={coffeeLogo} alt="" />
        </div>

        <ConteinerHeaderButtons>
          <HeaderButtons variant="purple">
            <MapPin size={20} weight="fill" />
            Rua 21 de Janeiro
          </HeaderButtons>
          <HeaderButtons onClick={goToCart} variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButtons>
        </ConteinerHeaderButtons>
      </div>
    </ConteinerHeader>
  )
}
