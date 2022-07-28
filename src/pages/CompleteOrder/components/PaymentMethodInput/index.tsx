import { forwardRef, ReactNode } from 'react'
import {
  PaymentMethodInputContainer,
  RegularTxtPayMeth,
  ContentContainer
} from './styles'

interface PaymentMethodInputProps {
  id: string
  icon: ReactNode
  method: string
  value: string
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, method, value, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input
        id={id}
        type="radio"
        name="paymentMethodInput"
        {...props}
        ref={ref}
        value={value}
      />

      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          <RegularTxtPayMeth> {method} </RegularTxtPayMeth>
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  )
})
