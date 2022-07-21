import styled from 'styled-components'

export const InfoWithIconConteiner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`
interface IconConteinerProps {
  iconBg?: string
}

export const IconConteiner = styled.div<IconConteinerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ iconBg }) => iconBg};
  color: ${({ theme }) => theme.colors['base-white']};
`
