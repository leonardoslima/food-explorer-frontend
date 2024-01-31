import styled from "styled-components";

export const Container = styled.div`  
  grid-area: mobile-menu;
  background-color: ${({ theme }) => theme.COLORS.DARK[400]};
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 1;
  overflow-y: hidden;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"]{
    transform: translateX(0);    
  }

`;

export const Header = styled.header`
background-color: ${({ theme }) => theme.COLORS.DARK[700]};
  display: flex;
  gap: 1rem;
  height: 114px;
  padding: 3.5rem 1.75rem 1.5rem 1.75rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  font-size: 1.25rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 2.25rem 1.75rem 0 1.75rem;

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT[300]};
    display: flex;
    align-items: center;
    gap: 7px;
    padding-left: 0.625rem;
    height: 56px;
    font-size: 1.5rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK[1000]};
  }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;

  > svg {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  }
`;
