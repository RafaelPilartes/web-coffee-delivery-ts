import styled from 'styled-components'

export const OrderConfirmedConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    flex-wrap: wrap;

    .imageConteiner {
      position: relative;
      width: 32rem;
      min-width: 12rem;
      min-height: 20rem;
      margin-top: -1.25rem;

      img {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        object-fit: cover;
      }
    }
  }
`

export const OrderDetailsConteiner = styled.div`
  position: relative;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 6px 36px 6px 36px;
  background-color: ${({ theme }) => theme.colors['base-background']};
  width: 32rem;
  min-width: 12rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(106deg, #dbca20 2.61%, #8047f8 98.76%);
    z-index: -1;
  }
`
