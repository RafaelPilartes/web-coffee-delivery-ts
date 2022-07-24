import styled from 'styled-components'

export const CompleteOrderConteiner = styled.form`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1240px) {
    flex-direction: column;
  }
`

export const SectionBaseStyle = styled.form`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 0.4rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`
