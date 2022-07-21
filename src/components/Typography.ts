import styled from 'styled-components'

interface titleTxtProps {
  color?: 'title' | 'subtitle' | 'text'
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  weight?: string | number
}
interface regularTxtProps {
  color?: 'title' | 'subtitle' | 'label'
  size?: 'l' | 'm' | 's'
  weight?: string | number
}

export const TitleTxt = styled.h1<titleTxtProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-title-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 800};
`

export const RegularTxt = styled.h1<regularTxtProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`
