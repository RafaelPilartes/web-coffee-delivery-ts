import styled from 'styled-components'

export const InputFormConteiner = styled.input`
  height: 2.625rem;
  border-radius: 0.27rem;
  border: 0.08rem solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};
  transform: 0.4s;

  &:focus {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    ${({ theme }) => theme.colors['base-label']};
  }
`
