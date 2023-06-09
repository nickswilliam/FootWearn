import { styled } from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react"

export const SwiperContainer = styled(Swiper)`
    box-shadow: -10px 10px 15px var(--shadows), 10px 0px 15px var(--shadows);
    width: 100%;
    height: calc(100vh -80px);
    max-width: 1200px;
`

export const SwiperSlideContainer = styled(SwiperSlide)`
    box-shadow: 0px 10px 10px var(--shadows);
`

export const SliderImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

