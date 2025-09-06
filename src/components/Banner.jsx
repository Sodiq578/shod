import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './Banner.css';

const Banner = () => {
  const { t } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);

  // Namuna ma'lumotlar
  const slidesData = [
    {
      id: 1,
      title: t('banner.summerCollection.title'),
      subtitle: t('banner.summerCollection.subtitle'),
      description: t('banner.summerCollection.description'),
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      thumbImage: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      ctaText: t('banner.summerCollection.ctaText'),
    },
    {
      id: 2,
      title: t('banner.winterCollection.title'),
      subtitle: t('banner.winterCollection.subtitle'),
      description: t('banner.winterCollection.description'),
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      thumbImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      ctaText: t('banner.winterCollection.ctaText'),
    },
    {
      id: 3,
      title: t('banner.autumnCollection.title'),
      subtitle: t('banner.autumnCollection.subtitle'),
      description: t('banner.autumnCollection.description'),
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      thumbImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      ctaText: t('banner.autumnCollection.ctaText'),
    },
    {
      id: 4,
      title: t('banner.springCollection.title'),
      subtitle: t('banner.springCollection.subtitle'),
      description: t('banner.springCollection.description'),
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      thumbImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      ctaText: t('banner.springCollection.ctaText'),
    },
  ];

  return (
    <div className="banner-container">
      <div className="banner-wrapper">
        {/* Asosiy Slider - 70% kenglik */}
        <div className="main-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            thumbs={{ swiper: thumbsSwiper }}
            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
            className="main-swiper"
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="slide-content"
                  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }}
                >
                  <div className="slide-text">
                    <h2>{slide.title}</h2>
                    <h3>{slide.subtitle}</h3>
                    <p>{slide.description}</p>
                    <button className="cta-button">{slide.ctaText}</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnail Slider - 30% kenglik */}
        <div className="thumb-slider">
          <Swiper
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            onSwiper={setThumbsSwiper}
            className="thumb-swiper"
            direction="vertical"
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="thumb-content"
                  style={{ backgroundImage: `url(${slide.thumbImage})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;