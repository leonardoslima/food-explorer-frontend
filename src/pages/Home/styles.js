import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  
  grid-template-rows: auto 1fr auto;

  > main {
    grid-area: main;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    width: min(89%, 1122px);
    margin: 0 auto;
    padding: 2.75rem 0 1.625rem;    

    > div:first-child {
      background: ${({ theme }) => theme.COLORS.GRADIENTS[200]};

      height: 7.5rem;
      border-radius: 3px;

      display: flex;
      justify-content: flex-end;

      position: relative;

      > picture {
        position: absolute;
        top: -1rem;
        left: -1rem;
        bottom: 0;
        overflow: hidden;
      }

      > picture img {
        width: 191px;        
      }

      > div {
        font-family: 'Poppins', sans-serif;
        max-width: 13.438rem;
        padding-top: 2.25rem;

        > h2 {
          font-size: 1.125rem;
          font-weight: 600;
          line-height: 1.563rem;
          margin-bottom: 3px;
        }

        > p {
          font-size: 0.75rem;
          line-height: 1.063rem;
        }
      }
    }
  }

  @media (max-width: 425px) {
    > main > div:first-child {
      justify-content: center;
      align-items: center;

      > picture > img {
        display: none;
      }
      > div {
        padding: 1rem;
      }
    }
  }

  @media (max-width: 768px){
    > main {
      > div:first-child {
        > div {
          max-width: 100%;
          padding-right: 1rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    > main {
      padding-top: 10.25rem;

      > div:first-child {
        height: 16.25rem;
        justify-content: flex-start;
        gap: 1rem;

        > picture {
          position: static;          
          margin-top: -13%;
          margin-left: -5%;
        }

        > picture img {
          width: 100%;
        }

        > div {
          max-width: 100%;
          padding-top: 4.5rem;

          > h2 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            line-height: 3rem;
          }

          > p {
            font-size: 1rem;
            line-height: 1.7rem;
          }
        }
      }
    }
  }
`;
