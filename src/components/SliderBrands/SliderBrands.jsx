import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderBrandsSwiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-cube';
import { brands } from "./brandsList";

const SliderBrands = () => {
  return (
    <Swiper
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "100px",
        display: "flex",
        alignItems: 'center',
        padding: "0 20px",
      }}
      modules={[Navigation, Pagination, A11y]}
      loop={true}
      spaceBetween={50}
      slidesPerView={3}
      navigation={{
        enabled: true,
      }}
      effect='cube'
    >
      {brands.map((item) => (
        <SwiperSlide
          key={item.brand}
          style={{
            justifySelf: "center",
            alignSelf: 'center',
            display: 'flex'
          }}
        >
          <img
            src={item.img}
            alt={item.brand}
            style={{
              height: "80px",
              margin: "auto",
              justifySelf: 'center'
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SliderBrands;
