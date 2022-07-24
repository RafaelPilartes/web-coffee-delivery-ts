import { MapPinLine, CurrencyDollar, CreditCard } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { InputForm } from '../../../../../components/InputForm'

import { TitleTxt } from '../../../../../components/Typography'
import { SectionBaseStyle } from '../../../styles'
import { PaymentMethodInput } from '../../PaymentMethodInput'
import { TitleSection } from '../../TitleSection'
import {
  AddressFormConteiner,
  CompleteOrdeFormConteiner,
  PaymentMethodsOptionsConteiner
} from './styles'

export function CompleteOrdeForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrdeFormConteiner className="conteiner">
      <TitleTxt size="xs" color="subtitle">
        Complete o seu pedido
      </TitleTxt>

      <SectionBaseStyle>
        <TitleSection
          tilte="Endereço de entrega"
          description="Informe o endereço onde deseja recebr o seu pedido."
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />

        <AddressFormConteiner>
          <InputForm placeholder="Nome Completo" className="name" />
          <InputForm placeholder="Numero" type="number" />
          <InputForm placeholder="Email" className="email" />
          <InputForm placeholder="Cidade" />
          <InputForm placeholder="Rua" className="street" />
        </AddressFormConteiner>
      </SectionBaseStyle>

      <SectionBaseStyle>
        <TitleSection
          tilte="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar."
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
        />

        <PaymentMethodsOptionsConteiner>
          <PaymentMethodInput
            icon={<CreditCard size={18} color={colors['brand-purple']} />}
            method="Cartão de credito"
          />
          <PaymentMethodInput
            icon={<CurrencyDollar size={18} color={colors['brand-purple']} />}
            method="Cartão de credito"
          />
          <PaymentMethodInput
            icon={<CurrencyDollar size={18} color={colors['brand-purple']} />}
            method="Cartão de credito"
          />
        </PaymentMethodsOptionsConteiner>
      </SectionBaseStyle>
    </CompleteOrdeFormConteiner>
  )
}
