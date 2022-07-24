import { ConfirmationSection } from '../../../../../components/ConfirmationSection'
import { RegularTxt, TitleTxt } from '../../../../../components/Typography'
import { docCoffees } from '../../../../../data/coffees'
import { SectionBaseStyle } from '../../../styles'
import { CoffeeCard } from '../../CoffeeCard'
import { SelectedCoffeesConteiner } from './styles'

export function SelectedCoffees() {
  const listCoffees = docCoffees.map((item, index) => {
    return <CoffeeCard item={item} />
  })

  return (
    <SelectedCoffeesConteiner className="conteiner">
      <TitleTxt size="xs" color="subtitle">
        Cafés selecionados
      </TitleTxt>

      <SectionBaseStyle>
        {listCoffees}

        <ConfirmationSection />
      </SectionBaseStyle>
    </SelectedCoffeesConteiner>
  )
}
