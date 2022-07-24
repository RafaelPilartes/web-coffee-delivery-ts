import { rgba } from 'polished'
import styled from 'styled-components'

import imageBackground from '../../../../../assets/intro-background.png'

export const IntroConteiner = styled.section`
  width: 100%;
  min-height: 34rem;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${({ theme }) => `url(${imageBackground}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.colors['base-white']} 0%,
      ${rgba(theme.colors['base-background'], 1)} 50%,
      ${theme.colors['base-background']} 100%
    )
  `};
  background-size: cover;

  .left {
    max-width: 34rem;

    > section {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
  }

  .rigth {
    img {
      width: 100%;
      height: 100%;
    }
  }
`
export const IntroContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
`

export const BenefitsConteiner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
