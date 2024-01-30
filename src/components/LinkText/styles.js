import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  text-align: center;
  
  &:hover {
    color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
  }

  > svg {
    font-size: 3rem;
  }
`;
