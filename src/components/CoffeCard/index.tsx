import {
  AddCartWrapper,
  CardFooter,
  CoffeCardConteiner,
  TagsConteiner
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import coffe from '../../assets/intro-img.png'
import { RegularTxt, TitleTxt } from '../Typography'
import { QuantityInput } from '../QuantityInput'
import { ICoffeeProps } from '../../@types/ICoffee'
import { separateComma } from '../../utils/utils'

export function CoffeCard({ item }: ICoffeeProps) {
  const listTags = item.tags.map((tag, index) => <span key={index}>{tag}</span>)

  return (
    <CoffeCardConteiner>
      <div className="imgConteiner">
        <img src={`/coffees/${item.photo}`} />
      </div>

      <TagsConteiner>{listTags}</TagsConteiner>

      <TitleTxt size="s" color="subtitle" weight={700}>
        {item.name}
      </TitleTxt>

      <RegularTxt size="s" color="label">
        {item.description}
      </RegularTxt>

      <CardFooter>
        <div>
          <TitleTxt size="m" color="text">
            {separateComma(item.price)}
          </TitleTxt>
          <RegularTxt size="s"> Kz </RegularTxt>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeCardConteiner>
  )
}
