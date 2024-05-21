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

    padding: 1.5rem 0;

    > div {
      color: ${({ theme }) => theme.COLORS.LIGHT[700]};
      font-size: 1.875rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: clamp(0.6rem, 0.2rem + 1.25vw, 1rem);

      > svg {
        width: 1.875rem;
      }
    }

    > p {
      color: ${({ theme }) => theme.COLORS.LIGHT[200]};
      font-size: 1.375rem;
    }

    @media (max-width: 500px) {
      justify-content: center;
      flex-direction: column;
      gap: 1rem; 
      
      > div {
        width: 100%;
        color: ${({ theme }) => theme.COLORS.LIGHT[700]};
        font-size: 1rem;
        gap: clamp(0.6rem, 0.2rem + 1.25vw, 1rem);

        > svg {
          width: 1.375rem;
        }
      }

      > p {
        font-size: 0.75rem;
      }
    }
  }
`;
