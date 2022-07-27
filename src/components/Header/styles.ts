import styled, { css } from 'styled-components'

export const ConteinerHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 6.5rem;
  padding: 1.6rem 1.2rem;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 99;

  > div {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`
export const ConteinerHeaderButtons = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}
export const HeaderButtons = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 0.1rem;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};

  ${({ variant, theme }) => css`
    background-color: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
    transition: 0.5s ease;

    :active {
      background-color: ${theme.colors[`brand-${variant}`]};
      color: ${theme.colors[`brand-${variant}-light`]};
    }
  `}

  ${({ variant, theme }) =>
    variant == 'purple' &&
    css`
      svg {
        color: ${theme.colors[`brand-${variant}`]};
      }
    `}
`
