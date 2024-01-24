import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TINTS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;

  width: 100%;

  border: none;
  border-radius: 5px;
  padding: 0.75rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    filter: none;
    cursor: wait;
  }
`;
