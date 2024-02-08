import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, Content } from "./styles";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Section({ title, cards }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Content>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={16}
          slidesPerView={'auto'}
          breakpoints={{
            768: {
              spaceBetween: 27,
              grabCursor: true
            }
          }
          }
        >
          {cards.map((card, index) => (
            <SwiperSlide key={String(index)}>{card}</SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </Container >
  )
}