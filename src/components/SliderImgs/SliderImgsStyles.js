import { styled } from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react"

export const SliderHeroContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;

`

export const SwiperContainer = styled(Swiper)`
    width: 100%;
    height: auto;
    transition: all ease .2s;
    /* @media (max-width: 1024px){
        max-width: 900px;
    }

    @media (max-width: 967px){
        max-width: 768px;
    }

    @media (max-width: 768px){
        max-width: 480px;
    }

    @media (max-width: 480px){
        max-width: 320px;
    } */
`

export const SwiperSlideContainer = styled(SwiperSlide)`
    box-shadow: 0px 10px 10px var(--shadows);
`

export const SliderImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`

