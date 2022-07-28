import React from 'react'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { SelectedCoffees } from './components/_sections/SelectedCoffee'
import { CompleteOrderForm } from './components/_sections/CompleteOrderForm'
import { CompleteOrderContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { routsName } from '../../data/routsName'
import { useCart } from '../../hooks/useCart'
import { useMyContext } from '../../hooks/useMyContext'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money'
}
const confirmOrderFormValidationSchema = zod.object({
  completeName: zod.string().min(1, 'Informe o nome'),
  numberPhone: zod.string().min(1, 'Informe o número de telemovel'),
  email: zod.string().min(1, 'Informe o seu email'),
  city: zod.string().min(1, 'Informe  a cidade, ex.: Benfica'),
  street: zod.string().min(1, 'Informe o rua, ex.: Rua 21 de Janeiro'),
  paymentMethodInput: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o metodo de pagameto' }
    }
  })
})
export type OrderDataType = zod.infer<typeof confirmOrderFormValidationSchema>
type ConfirmOrderFormDataType = OrderDataType

export function CompleteOrder() {
  const confirmOrderForm = useForm<ConfirmOrderFormDataType>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const navigate = useNavigate()

  const { clearCart } = useCart()
  const { setIsLoading } = useMyContext()

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormDataType) {
    setIsLoading(true)

    setTimeout(() => {
      navigate(routsName.orderConfirmed, {
        state: data
      })
      setIsLoading(false)
      clearCart()
    }, 2500)
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="conteiner"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
