import styled from "styled-components";

export const Container = styled.a`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
  }
`;
