import { useEffect, useState } from 'react'
import { docCoffees } from '../../data/coffees'
import { separateComma } from '../../utils/utils'
import { RegularTxt } from '../Typography'
import { ButtonConfirmation, ConfirmationSectionConteiner } from './styles'

export function ConfirmationSection() {
  const [btnIsDisabled, setBtnIsDisabled] = useState<boolean>(true)

  useEffect(() => {
    if (docCoffees.length >= 1) {
      setBtnIsDisabled(false)
    }
  }, [])
  return (
    <ConfirmationSectionConteiner>
      <div>
        <RegularTxt size="s"> Total de itens </RegularTxt>
        <RegularTxt> {separateComma(123456)}Kz </RegularTxt>
      </div>
      <div>
        <RegularTxt size="s"> Entrega </RegularTxt>
        <RegularTxt> {separateComma(123456)}Kz </RegularTxt>
      </div>
      <div>
        <RegularTxt color="subtitle" weight={700} size="l">
          Total
        </RegularTxt>
        <RegularTxt color="subtitle" weight={700} size="l">
          {separateComma(123456)}Kz
        </RegularTxt>
      </div>

      <ButtonConfirmation disabled={btnIsDisabled}>
        Confirdmar pedido
      </ButtonConfirmation>
    </ConfirmationSectionConteiner>
  )
}
