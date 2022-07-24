import { CoffeeCardConteiner, RemoveButton } from './styles'

import { ICoffeeProps } from '../../../../@types/ICoffee'

import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularTxt } from '../../../../components/Typography'
import { separateComma } from '../../../../utils/utils'
import { Trash } from 'phosphor-react'

export function CoffeeCard({ item }: ICoffeeProps) {
  return (
    <CoffeeCardConteiner>
      <div className="left">
        <div className="imgConteiner">
          <img src={`/coffees/${item.photo}`} alt="" />
        </div>

        <div className="actionsAndNameConteiner">
          <RegularTxt size="m" weight={'500'}>
            {item.name}
          </RegularTxt>

          <div className="actionsConteiner">
            <QuantityInput />
            <RemoveButton>
              <Trash />
              Remover
            </RemoveButton>
          </div>
        </div>
      </div>

      <p>{separateComma(item.price)} Kz</p>
    </CoffeeCardConteiner>
  )
}
