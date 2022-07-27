import { RegularTxt, TitleTxt } from '../../components/Typography'
import { OrderConfirmedConteiner, OrderDetailsConteiner } from './styles'

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import imageOrderConfirmed from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { useTheme } from 'styled-components'

export function OrderConfirmed() {
  const { colors } = useTheme()

  const city: string = 'Benfica'
  const street: string = 'Rua 21 de Janeiro'
  const timer: string = '20 min - 30 min'
  const paymeth: string = 'Cartão de Crédito'

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
                <strong> {paymeth} </strong>
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
