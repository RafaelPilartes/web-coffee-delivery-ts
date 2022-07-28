import styled, { css } from 'styled-components'
import { RegularTxt } from '../../../../components/Typography'

export const PaymentMethodInputContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }
  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors['brand-purple-light']};
      border-color: ${theme.colors['brand-purple']};

      &:hover {
        background: ${theme.colors['brand-purple-light']};
      }
    `}
  }
`

export const RegularTxtPayMeth = styled(RegularTxt)`
  font-size: 0.8rem;
`
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors['base-text']};
  background: ${({ theme }) => theme.colors['base-button']};
  gap: 0.75rem;
  text-transform: uppercase;

  height: 3rem;
  padding: 0 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 0.45rem;

  cursor: pointer;

  transition: 0.4s;

  user-select: none;

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`
