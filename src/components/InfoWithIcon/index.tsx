import { ReactNode } from 'react'
import { IconConteiner, InfoWithIconConteiner } from './styles'

interface InfoWithIconpProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg?: string
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconpProps) {
  return (
    <InfoWithIconConteiner>
      <IconConteiner iconBg={iconBg}> {icon} </IconConteiner>
      {typeof text === 'string' ? <p> {text} </p> : text}
    </InfoWithIconConteiner>
  )
}
