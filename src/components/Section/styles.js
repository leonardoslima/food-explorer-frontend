import styled from "styled-components";

export const Container = styled.section`
  width: min(89vw, 1122px);
  margin: 0 auto;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }  
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
`;
