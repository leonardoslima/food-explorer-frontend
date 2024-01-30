import styled from "styled-components";

export const Container = styled.div`
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  gap: 1.4rem;
  align-items: center;

  button {
    background-color: transparent;
    border: none;

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT[100]};
      &:hover {
        color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
      }
    }
  }
`;
