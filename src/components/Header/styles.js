import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 114px;

  background-color: ${({ theme }) => theme.COLORS.DARK[700]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.5rem 1.75rem 1.75rem 1.5rem;

  > h1 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }


`;
