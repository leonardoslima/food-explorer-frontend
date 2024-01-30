import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > header {
    position: sticky;
    top: 0;
  } 

  > main {
    width: min(75%, 1122px);
    margin: 0 auto;
  } 
`;

export const BackButton = styled.div`
  width: min(75%, 1122px);
  margin: 1rem auto 0 auto;

  display: flex;
  align-items: center;

  a {  
      display: flex;
      align-items: center;
      
      font-size: 1.5rem;
    }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > picture {
    margin: 0 auto;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    > h2,
    > p {
      font-family: 'Poppins', sans-serif;
      text-align: center;
    }

    > h2 {
      font-weight: 500;
      font-size: 1.75rem;
    }

    > p {
      font-size: 1rem;
      line-height: 1.375rem;
      margin: 0 auto;
    }

    > ul {
      columns: 3;
      text-align: center;
      gap: 1.5rem;

      > li {
        margin-bottom: 1.5rem;
      }
    }

    > div {
      display: flex;
      justify-content: center;
      gap: 1rem;

      margin-top: 2rem;

      > button {
        font-size: 0.875rem;
      }
    }
  }

  @media (min-width: 1025px) {

    flex-direction: row;
    gap: clamp(2rem, -1.571rem + 5.571vw, 4rem);

    > div {
      width: fit-content;
      align-items: flex-start;
      align-self: center;
      max-width: 666px;

      > h2 {
        font-size: 2.5rem;
      }

      > p {
        text-align: start;
        font-size: 1.5rem;
        line-height: 2rem;
      }

      > ul {
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem;

        > li {
          margin-bottom: 0;
        }
      }
    }
  }
`;
