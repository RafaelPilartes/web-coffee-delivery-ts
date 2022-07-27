import styled from 'styled-components'

export const CoffeeCardConteiner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;

  > p {
    min-width: 6rem;
    font-weight: 700;
    text-align: end;
  }

  .imgConteiner {
    position: relative;
    width: 4rem;
    height: 4rem;

    img {
      position: absolute;
      width: 100%;

      object-fit: cover;
    }
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;

    .actionsAndNameConteiner {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 0.6rem;
    }
    .actionsConteiner {
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      gap: 0.6rem;
    }
  }
`
export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  height: 2.2rem;
  padding: 0 0.6rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors['base-text']};
  border: none;
  background: ${({ theme }) => theme.colors['base-button']};
  border-radius: 0.4rem;
  transition: 0.3s;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
  &:active {
    background: ${({ theme }) => theme.colors['base-button']};
  }
`
