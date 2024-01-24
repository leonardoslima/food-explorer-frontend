import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;

  padding: 9.75rem 2.375rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    font-size: 2rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;

    margin-bottom: 4.5rem;
  }  
`;

export const Form = styled.form`
  margin: 0 auto;
  border-radius: 1.6rem;

  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
`;
