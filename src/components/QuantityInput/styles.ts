import styled from 'styled-components'

export const QuantityInputConteiner = styled.div`
  flex: 1;
  min-width: 4.8rem;
  max-width: 5.6rem;
  padding: 0 0.4rem;
  background: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border-radius: 0.5rem;
  padding: 0.5rem;

  input {
    width: 100%;
    text-align: center;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors['base-title']};

    &:focus {
      outline: none;
    }
  }
`

export const IconConteiner = styled.button.attrs({
  type: 'button'
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['brand-purple']};

  &:disabled {
    opacity: 0.4;
  }
  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }
  &:not(:disabled):active {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
`
