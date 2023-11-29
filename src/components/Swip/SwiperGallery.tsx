import {FC, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


interface SwiperGalleryProps{
    images: string[];
}

const SwiperGallery:FC<SwiperGalleryProps> = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState();

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                // @ts-ignore
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {images.map((image, i) => (
                    <SwiperSlide key={i}>
                        <img src={image} alt={'photo'}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {images.map((image, i) => (
                    <SwiperSlide key={i}>
                        <img src={image} alt={'photo'}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default SwiperGallery;


