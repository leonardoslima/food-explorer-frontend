import styled from "styled-components";

export const Container = styled.section`
  /* width: min(100vw, 1122px); */
  max-width: 94.5vw;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin-bottom: 2.4rem;
  }

  .swiper-wrapper {
    justify-content: start;
    align-items: center;
  }
  .swiper-slide {
    width: fit-content;    
  }

  @media (max-width: 768px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }

  @media (min-width: 769px) {
    width: min(95%, 1122px);
    margin: 0 auto;

    > h2 {
      font-size: 2rem;
      line-height: 2.813rem;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
`;
