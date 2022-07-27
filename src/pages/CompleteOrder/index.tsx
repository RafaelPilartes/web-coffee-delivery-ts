import React from 'react'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { SelectedCoffees } from './components/_sections/SelectedCoffee'
import { CompleteOrderForm } from './components/_sections/CompleteOrderFormContainer'
import { CompleteOrderContainer } from './styles'

const confirmOrderFormValidationSchema = zod.object({
  completeName: zod.string().min(1, 'Informe o nome'),
  numberPhone: zod.string().min(1, 'Informe o número de telemovel'),
  email: zod.string().min(1, 'Informe o seu email'),
  city: zod.string().min(1, 'Informe  a cidade, ex.: Benfica'),
  street: zod.string().min(1, 'Informe o rua, ex.: Rua 21 de Janeiro')
})

type OrderDataType = zod.infer<typeof confirmOrderFormValidationSchema>
type ConfirmOrderFormDataType = OrderDataType

export function CompleteOrder() {
  const confirmOrderForm = useForm<ConfirmOrderFormDataType>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormDataType) {
    console.log(data)
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
