import { ReactNode } from 'react'
import { RegularTxt } from '../../../../components/Typography'
import { PaymentMethodInputConteiner, RegularTxtPayMeth } from './styles'

interface PaymentMethodInputProps {
  icon: ReactNode
  method: string
}

export function PaymentMethodInput({ icon, method }: PaymentMethodInputProps) {
  return (
    <PaymentMethodInputConteiner>
      {icon}
      <RegularTxtPayMeth> {method} </RegularTxtPayMeth>
    </PaymentMethodInputConteiner>
  )
}
