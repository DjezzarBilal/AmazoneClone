import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import carousel_1 from '../images/carousel_1.jpg';
import carousel_2 from '../images/carousel_2.jpg';
import carousel_vid from '../images/carousel_vid.mp4';
import carousel_4 from '../images/carousel_4.jpg';
import carousel_5 from '../images/carousel_5.jpg';
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={carousel_1} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_2} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source src={carousel_vid} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_4} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_5} alt="Carousel POR" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Carousel;
