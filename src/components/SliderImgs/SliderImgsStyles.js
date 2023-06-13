import { styled } from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react"

export const SliderHeroContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 40px 20px 40px;

    @media (max-width: 1250px){
        max-width: 1100px;
    }

    @media (max-width: 975px){
        max-width: 800px;
    }

    @media (max-width: 930px){
        max-width: 768px;
    }

    @media (max-width: 768px){
        max-width: 550px;
    }

    @media (max-width: 550px){
        max-width: 480px;
    }

    @media (max-width: 480px){
        max-width: 350px;
    }

    @media (max-width: 350px){
        max-width: 320px;
    }
`

export const SwiperContainer = styled(Swiper)`
    width: 100%;
    height: auto;
    transition: all ease .2s;
    box-sizing: border-box;
`

export const SwiperSlideContainer = styled(SwiperSlide)`
    box-shadow: 0px 10px 10px var(--shadows);
`

export const SliderImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`

