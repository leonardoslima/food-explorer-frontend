import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK[700]};
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  
  > div {
    height: 114px;
    width: min(90%, 1122px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    h1 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;

      > span {
        color: ${({ theme }) => theme.COLORS.TINTS.CAKE_200};
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
    
    @media (min-width: 1025px) {
      padding-block: 2.4rem;
      
      button:first-child {
        display: none;
      }

      #search {
        background-color: ${({ theme }) => theme.COLORS.DARK[900]};
        border-radius: 5px;
        display: flex;
        align-items: center;
        flex: 2;
        padding-left: 1.2rem;
        > div {
          width: 100%;
          > label {
            display: none;
          }
          > input:focus {
            outline: none;
          }
        }
      }

      button {
        max-width: 216px;
        flex: 1;        
      }

      button:last-child{
        display: none;
      }
    }

    //Mobile devices
    @media (max-width: 1024px) {
      padding: 5.6rem 0 2.4rem;     

      button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT[100]};
      }

      button:last-child {
        position: relative;

        > span {
          color: ${({ theme }) => theme.COLORS.LIGHT[100]};
          background-color: ${({ theme }) => theme.COLORS.TINTS.TOMATO_200};
          font-family: 'Poppins', sans-serif;
          font-size: 1.4rem;
          font-weight: 500;
          line-height: 0;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          position: absolute;
          top: -1rem;
          right: -1rem;
          display: grid;
          place-content: center;
        }
      }

      #search, #order-button, #logout {
        display: none;
      }
    }
  }   
`;
