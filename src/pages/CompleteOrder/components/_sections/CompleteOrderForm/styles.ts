import styled from 'styled-components'

export const CompleteOrderFormContainer = styled.div`
  width: 48rem;
  max-width: 48rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .province {
    grid-column: span 3;
    max-width: 12.3rem;
  }
  .name {
    grid-column: span 3;
  }
  .email {
    grid-column: span 2;
  }
  .street {
    grid-column: span 2;
  }

  @media (max-width: 1240px) {
    grid-template-columns: 16.5rem auto 3.75rem;
  }
  @media (max-width: 760px) {
    grid-template-columns: auto auto 3.75rem;
  }
`

export const PaymentMethodsOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.15rem;
  flex-wrap: wrap;

  > p {
    color: ${({ theme }) => theme.colors['base-error']};
  }
`
