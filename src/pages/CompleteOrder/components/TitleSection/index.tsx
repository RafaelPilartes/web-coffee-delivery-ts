import { ReactNode } from 'react'
import { RegularTxt } from '../../../../components/Typography'
import { TitleSectionConteiner } from './styles'

interface TitleSectionProps {
  tilte: string
  description: string
  icon?: ReactNode
}

export function TitleSection({ tilte, icon, description }: TitleSectionProps) {
  return (
    <TitleSectionConteiner>
      {icon}
      <div>
        <RegularTxt color="subtitle"> {tilte} </RegularTxt>
        <RegularTxt size="s"> {description} </RegularTxt>
      </div>
    </TitleSectionConteiner>
  )
}
