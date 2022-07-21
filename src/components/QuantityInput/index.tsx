import { IconConteiner, QuantityInputConteiner } from './styles'

import { Minus, Plus } from 'phosphor-react'

export function QuantityInput() {
  return (
    <QuantityInputConteiner>
      <IconConteiner>
        <Minus size={14} weight="fill" />{' '}
      </IconConteiner>
      <input type="number" readOnly value={1} />
      <IconConteiner>
        <Plus size={14} weight="fill" />{' '}
      </IconConteiner>
    </QuantityInputConteiner>
  )
}
