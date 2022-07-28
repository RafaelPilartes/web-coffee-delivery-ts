import { useEffect } from 'react'

import { RegularTxt, TitleTxt } from '../../components/Typography'
import { OrderConfirmedConteiner, OrderDetailsConteiner } from './styles'

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import imageOrderConfirmed from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderDataType } from '../CompleteOrder'
import { paymentMethods } from '../CompleteOrder/components/_sections/CompleteOrderForm'

interface locationType {
  state: OrderDataType
}

export function OrderConfirmed() {
  const { colors } = useTheme()
  const navigate = useNavigate()
  const { state } = useLocation() as unknown as locationType

  const city: string = state.city
  const street: string = state.street
  const timer: string = '20 min - 30 min'
  const payment: string = paymentMethods[state.paymentMethodInput].label

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) {
    return <></>
  }

  return (
    <OrderConfirmedConteiner className="conteiner">
      <div>
        <TitleTxt size="l"> Uhu! Pedido confirmado </TitleTxt>
        <RegularTxt size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você!
        </RegularTxt>
      </div>

      <section>
        <OrderDetailsConteiner>
          <InfoWithIcon
            icon={<MapPin weight="fill" size={22} />}
            text={
              <RegularTxt>
                Entrege em <strong> {city} </strong>
                <br />
                {street}
              </RegularTxt>
            }
            iconBg={colors['brand-purple']}
          />

          <InfoWithIcon
            icon={<Timer weight="fill" size={22} />}
            text={
              <RegularTxt>
                Visão se entreda
                <br />
                <strong> {timer} </strong>
              </RegularTxt>
            }
            iconBg={colors['brand-yellow']}
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" size={22} />}
            text={
              <RegularTxt>
                Pagamento na entrega
                <br />
                <strong> {payment} </strong>
              </RegularTxt>
            }
            iconBg={colors['brand-yellow-dark']}
          />
        </OrderDetailsConteiner>

        <div className="imageConteiner">
          <img src={imageOrderConfirmed} alt="" />
        </div>
      </section>
    </OrderConfirmedConteiner>
  )
}
