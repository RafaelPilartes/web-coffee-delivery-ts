import styled from 'styled-components'

export const CoffeCardConteiner = styled.div`
  max-width: 15.8rem;
  text-align: center;
  padding: 1.25rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 0.5rem 2rem 0.5rem 2rem;

  .imgConteiner {
    position: relative;
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;

    img {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      object-fit: cover;
    }
  }
`

export const TagsConteiner = styled.div`
  width: 100%;
  margin: 0 0 0.65rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors['brand-yellow-light']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 0.2rem;
    font-weight: 700;
  }
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.18rem;

    p {
      line-height: 0.75rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  > button {
    width: 2rem;
    height: 2rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors['brand-purple-dark']};
    color: ${({ theme }) => theme.colors['base-card']};
    border-radius: 0.4rem;

    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.colors['brand-purple']};
    }
    &:active {
      background: ${({ theme }) => theme.colors['brand-purple-dark']};
    }
  }
`
