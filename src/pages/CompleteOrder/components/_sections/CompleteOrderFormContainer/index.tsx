import { MapPinLine, CurrencyDollar, CreditCard } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'

import { InputForm } from '../../../../../components/InputForm'

import { TitleTxt } from '../../../../../components/Typography'
import { SectionBaseStyle } from '../../../styles'
import { PaymentMethodInput } from '../../PaymentMethodInput'
import { TitleSection } from '../../TitleSection'
import {
  AddressFormContainer as AddressFormContainer,
  CompleteOrderFormContainer,
  PaymentMethodsOptionsContainer
} from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function CompleteOrderForm() {
  const { colors } = useTheme()
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <CompleteOrderFormContainer className="conteiner">
      <TitleTxt size="s" color="subtitle">
        Complete o seu pedido
      </TitleTxt>

      <SectionBaseStyle>
        <TitleSection
          tilte="Endereço de entrega"
          description="Informe o endereço onde deseja receber o seu pedido."
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />

        <AddressFormContainer>
          <InputForm
            placeholder="Nome Completo"
            className="name"
            {...register('completeName')}
            error={errors.completeName?.message}
          />
          <InputForm
            placeholder="Numero"
            type="number"
            {...register('numberPhone')}
            error={errors.numberPhone?.message}
          />
          <InputForm
            placeholder="Email"
            className="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <InputForm
            placeholder="Cidade"
            {...register('city')}
            error={errors.city?.message}
          />
          <InputForm
            placeholder="Rua"
            className="street"
            {...register('street')}
            error={errors.street?.message}
          />
        </AddressFormContainer>
      </SectionBaseStyle>

      <SectionBaseStyle>
        <TitleSection
          tilte="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar."
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
        />

        <PaymentMethodsOptionsContainer>
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
        </PaymentMethodsOptionsContainer>
      </SectionBaseStyle>
    </CompleteOrderFormContainer>
  )
}
