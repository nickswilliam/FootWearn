import { Navigation, Pagination, A11y } from 'swiper';
import { SwiperSlide } from "swiper/react";
import "./SliderBrandsSwiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { brands } from "./brandsList";
import { SliderBrandsContainer, SwiperContainer } from "./SliderBrandsStyles";

const SliderBrands = () => {
 

  return (
    <SliderBrandsContainer>
      <SwiperContainer
        modules={[Navigation, Pagination, A11y]}
        loop={true}
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          enabled: true,
        }}
      >
        {brands.map((item) => (
          <SwiperSlide
            key={item.brand}
            style={{
              justifySelf: "center",
              alignSelf: "center",
              display: "flex",
            }}
          >
            <img
              src={item.img}
              alt={item.brand}
              style={{
                height: "80px",
                margin: "auto",
                justifySelf: "center",
              }}
            />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </SliderBrandsContainer>
  );
};
export default SliderBrands;
