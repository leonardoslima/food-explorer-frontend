import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK[200]};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK[300]};

  width: 13.125rem;
  height: 18.25rem;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  position: relative;

  > button {
    background-color: transparent;
    width: 1.5rem;
    height: 1.5rem;
    border: none;

    position: absolute;
    top: 1rem;
    right: 1.125rem;

    > svg {
      width: 100%;
      height: 100%;

      color: ${({ theme }) => theme.COLORS.LIGHT[300]};

      &.fav > path {
        fill: ${({ theme }) => theme.COLORS.LIGHT[300]};
      }

      &:hover > path {
        fill: ${({ theme }) => theme.COLORS.LIGHT[300]};

      }
    }
  }

  > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    > img {
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 50%;
    }

    > p {
      display: none;
    }

    > span {
    color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
    }

    > h3 {
      color: ${({ theme }) => theme.COLORS.LIGHT[300]};
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
    }
  } 

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    > div {
      font-size: 1rem;
      font-weight: 400;
    }

    > button {
      padding: 4px 0;
    }
  }

  @media (min-width: 768px) {
    width: 19rem;
    height: 28.875rem;
    gap: 1rem;

    > a {
      > img {
        width: 11rem;
        height: 11rem;
      }

      > h3 {
        font-weight: 700;
        font-size: 1.5rem;
        width: 256px;
      }

      > p {
        display: block;
        color: ${({ theme }) => theme.COLORS.LIGHT[400]};
        font-size: 0.875rem;
        line-height: 2.2rem;
      }

        > span {
        font-size: 2rem;
      }
    }    

    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      gap: 1rem;

      > div {
        font-weight: 700;
        font-size: 1.25rem;
      }

      > button {
        padding: 0.75rem 0;
      }
    }
  }
`;
