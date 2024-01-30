import styled from "styled-components";

export const Container = styled.li`
  background-color: ${({ theme }) => theme.COLORS.DARK[1000]};
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};

  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  
  list-style: none;
`;
