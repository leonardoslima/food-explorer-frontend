import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: auto auto 1fr auto; 
  grid-template-areas:    
    'header'
    'back'
    'main'
    'footer';

  gap: 1rem;

  > main {
    grid-area: main;
    height: 100%;
    width: min(75%, 1122px);
    margin: 0 auto;
  }
`;

export const BackButton = styled.div`
  width: min(75%, 1122px);
  margin: 1rem auto 1.5rem auto;

  display: flex;
  align-items: center;

  a {  
      display: flex;
      align-items: center;
      
      font-size: 1.5rem;
    }

  > main {
    grid-area: main;
    height: 100%;
    width: min(75%, 1122px);
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 500;
  }

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT[400]};
  }

  .threeColumns{
    display: grid;
    grid-template-rows: repeat(1fr, 3);
    grid-gap: 2rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    > .input-wrapper {
      > div {
        position: relative;
        background-color: ${({ theme }) => theme.COLORS.DARK[800]};        

        padding: 0.75rem 2rem;
        border-radius: 8px;

        display: flex;
        flex-direction: row;
        justify-content: center;

        > span {
          color: ${({ theme }) => theme.COLORS.LIGHT[100]};
          font-family: 'Poppins', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;

          display: flex;
          align-items: center;
          gap: 0.5rem;

          cursor: pointer;

          > svg {
            width: 1.5rem;
            height: 1.5rem;
          }
        }

        > div {
          position: absolute;
          inset: 0;
          opacity: 0;

          > label {
            display: none;
          }
        }
      }
    }

    > div:nth-child(2) {
      > input {
        height: 3rem;
        background-color: ${({ theme }) => theme.COLORS.DARK[800]};
      }
    }

    > div > select {
      background-color: ${({ theme }) => theme.COLORS.DARK[800]};
      color: ${({ theme }) => theme.COLORS.LIGHT[400]};

      border-radius: 8px;
      padding-left: 1rem;
      height: 3rem;

      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: center right 0.875rem;

      cursor: pointer;

      &:focus {
        outline: 2px solid ${({ theme }) => theme.COLORS.TINTS.CAKE_300};
      }

      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border: none;
    }
  }

  .twoColumns {
    display: grid;
    grid-template-rows: repeat(1fr, 2);    
    grid-gap: 2rem;

    > div:first-child {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > div {
        background-color: ${({ theme }) => theme.COLORS.DARK[800]};

        min-height: 3rem;
        padding: 0.5rem;
        border-radius: 8px;

        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }

    > div:last-child {
      gap: 1rem;

      > input {
        height: 3rem;
        background-color: ${({ theme }) => theme.COLORS.DARK[800]};
        color: ${({ theme }) => theme.COLORS.LIGHT[400]};
      }
    }    
  }  

  > #textarea {
      display: flex;
      flex-direction: column;
      gap: 1rem;
  }

  @media (min-width: 1025px) {
    .threeColumns{
      display: grid;
      grid-template-columns: 2fr 3fr 2fr;
      grid-gap: 2rem;
    }

    .twoColumns {
      display: grid;
      grid-template-columns: 3fr 1fr;    
      grid-gap: 2rem;
    }
  }
`;

export const Textarea = styled.textarea`
  border-radius: 0.8rem;
  height: 10.75rem;
  padding: 0.875rem;

  outline: none;
  border: none;

  background-color: ${({ theme }) => theme.COLORS.DARK[800]};
  color: ${({ theme }) => theme.COLORS.LIGHT[400]};

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT[500]};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.COLORS.TINTS.CAKE_300};
  }
`;

export const FooterButtons = styled.div`  
    display: flex;
    gap: clamp(1rem, -2.2rem + 10vw, 3.2rem);

    > #buttonRemove {
      font-size: 1rem;

      padding-block: 0.75rem;
      padding-inline: 0;
      background-color: ${({ theme }) => theme.COLORS.DARK[800]};
    }
`;
