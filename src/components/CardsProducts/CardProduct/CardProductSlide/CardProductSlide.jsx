import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import './SwiperFractionStyles.css'

const CardProductSlide = ({imgs, title}) => {
  return (
    <Swiper
        style={{
        marginTop: '20px',
        width: '90%',
        height: '300px',
        borderRadius: '5px',
        boxShadow: '2px 2px 4px var(--shadows), -2px 2px 4px var(--shadows)'
    }}
      modules={[Navigation, Pagination]}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
        type: 'fraction',
      }}
      draggable={true}
    >
        {imgs.map(img=>(
            <SwiperSlide key={img.id}>
                <img 
                src={img.img} 
                alt={`${title}`}
                style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover'

                }}
                />
            </SwiperSlide>
        ))}

    </Swiper>
  );
};
export default CardProductSlide;
