import { styled } from "styled-components";
import { Swiper } from "swiper/react";

export const SliderBrandsContainer = styled.div`
  width: 1300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwiperContainer = styled(Swiper)`
    max-width: 1200px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 20px;

    @media (max-width: 1200px){
        max-width: 1024px;
    }

    @media (max-width: 1024px){
        max-width: 768px;
    }

    @media (max-width: 768px){
        max-width: 480px;
    }

    @media (max-width: 480px){
        max-width: 320px;
    }
`