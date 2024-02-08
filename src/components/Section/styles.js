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

  .swiper-button-prev {
    width: 7.25rem;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000a0f 100%);
    left: -5px;
    top: 1.375rem;
  }

  .swiper-button-next {
    width: 7.25rem;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000a0f 100%);
    right: 0;
    top: 1.375rem;
    padding-right: 0.5rem;
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
