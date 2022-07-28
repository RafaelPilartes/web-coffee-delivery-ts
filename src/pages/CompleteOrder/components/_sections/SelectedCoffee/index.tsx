import { ConfirmationSection } from '../../../../../components/ConfirmationSection'
import { RegularTxt, TitleTxt } from '../../../../../components/Typography'
import { docCoffees } from '../../../../../data/coffees'
import { useCart } from '../../../../../hooks/useCart'
import { useMyContext } from '../../../../../hooks/useMyContext'
import { SectionBaseStyle } from '../../../styles'
import { CoffeeCard } from '../../CoffeeCard'
import { SelectedCoffeesConteiner } from './styles'

export function SelectedCoffees() {
  const { cartItems, cartQuantity } = useCart()

  const listCoffees = cartItems.map((item, index) => {
    return <CoffeeCard key={index} item={item} />
  })

  return (
    <SelectedCoffeesConteiner className="conteiner">
      <TitleTxt size="s" color="subtitle">
        Cafés selecionados
      </TitleTxt>

      <SectionBaseStyle>
        {cartQuantity <= 0 ? (
          <div>
            <TitleTxt size="s"> O seu carrinho está vazio 😥 </TitleTxt>
            <br />
            <RegularTxt>
              Adicione cafés, para que possa fazer o seu pedido!
            </RegularTxt>
          </div>
        ) : (
          listCoffees
        )}

        <ConfirmationSection />
      </SectionBaseStyle>
    </SelectedCoffeesConteiner>
  )
}
