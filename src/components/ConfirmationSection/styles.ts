import styled from 'styled-components'

export const ConfirmationSectionConteiner = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-top: 2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ButtonConfirmation = styled.button`
  margin-top: 1rem;
  padding: 1.1rem 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors['brand-yellow']};
  border-radius: 0.4rem;

  color: ${({ theme }) => theme.colors['base-card']};
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.3rem;

  transition: 0.4s;

  &:active {
    background: ${({ theme }) => theme.colors['brand-yellow']};
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`
