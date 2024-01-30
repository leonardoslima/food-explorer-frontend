import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  gap: 0.875rem;
  align-items: center;

  button {
    background-color: transparent;
    border: none;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT[100]};

      &:hover {
        color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
      }
    }
  }
`;
