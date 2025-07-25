import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/parallax";



function Index({ options, loop, speed }) {

    return (
        <Swiper
            className="mySwiper"
            loop={loop}
            speed={speed}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            navigation={true}
            pagination={true}
        >

            {options?.map((o, i) => (
                <SwiperSlide key={i}>

                    <div className="slider_item">
                        <img src={o.img} />
                        <h3>{o.title && o.title}</h3>
                    </div>

                </SwiperSlide>
            ))}

        </Swiper >
    )
}

export default Index