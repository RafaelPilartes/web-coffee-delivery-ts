import { IconConteiner, QuantityInputConteiner } from './styles'

import { Minus, Plus } from 'phosphor-react'

interface quantityInputProps {
  quanty: number
  onDecrementQuanty: () => void
  onIncrementQuanty: () => void
}

export function QuantityInput({
  quanty,
  onDecrementQuanty,
  onIncrementQuanty
}: quantityInputProps) {
  return (
    <QuantityInputConteiner>
      <IconConteiner disabled={quanty <= 1} onClick={onDecrementQuanty}>
        <Minus size={14} weight="fill" />
      </IconConteiner>
      <input type="number" readOnly value={quanty} />
      <IconConteiner onClick={onIncrementQuanty}>
        <Plus size={14} weight="fill" />
      </IconConteiner>
    </QuantityInputConteiner>
  )
}
