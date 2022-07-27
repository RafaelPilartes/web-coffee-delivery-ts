import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  > p {
    color: ${({ theme }) => theme.colors['base-error']};
  }
`

interface InputFormConteinerProps {
  hasError: boolean
}
export const InputFormConteiner = styled.input<InputFormConteinerProps>`
  height: 2.625rem;
  border-radius: 0.27rem;
  border: 0.08rem solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};
  transform: 0.4s;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    ${({ theme }) => theme.colors['base-label']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${({ theme }) => theme.colors['base-error']};
    `};
`
