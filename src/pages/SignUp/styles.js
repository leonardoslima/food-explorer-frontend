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
  
  @media (min-width: 1025px) {
    max-width: 1440px;
    
    display: flex;
    align-items: center;
    margin: 0 auto;

    > h1 {
      margin: 0;
      font-size: 2.625rem;
      width: 50%;
    }
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  border-radius: 1.6rem;

  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1025px) {
    flex-direction: column;
    max-width: 476px;
    background-color: ${({ theme }) => theme.COLORS.DARK[700]};
    padding: 4rem;
  }
`;
