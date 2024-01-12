import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT[400]};

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > input {
    height: 48px;
    width: 100%;

    border-radius: 0.5rem;

    padding: 0.75rem 0.875rem;

    color: ${({ theme }) => theme.COLORS.LIGHT[500]};
    background: ${({ theme }) => theme.COLORS.DARK[900]};
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT[500]};
    }  
  }
`;
