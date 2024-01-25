import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${({ theme }) => theme.COLORS.DARK[600]};
  height: 4.813rem;
  display: flex;

  > div {
    width: min(90%, 1122px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      color: ${({ theme }) => theme.COLORS.LIGHT[700]};
      font-size: clamp(0.875rem, 0.6rem + 2.8125vw, 1.5rem);
      font-weight: 700;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      gap: clamp(0.6rem, 0.2rem + 1.25vw, 1rem);      
    }

    > p {
      color: ${({ theme }) => theme.COLORS.LIGHT[200]};
      font-size: clamp(0.75rem, 1rem + 0.625vw, 0.875rem);
    }

    @media (max-width: 400px) {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
  }
`;
