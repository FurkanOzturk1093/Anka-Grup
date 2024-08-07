import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

Swiper.use([Autoplay]);

const TrustedClientSection = () => {
  const swiperRef = useRef(null);
  const clients = useSelector((state) => state.clients.clients);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      centeredSlides: true, // Aktif slaytı ortala
      slidesPerView: 5, // Aynı anda 5 slayt göster
      slidesPerGroup: 1, // Bir seferde bir slayt hareket et
      spaceBetween: 10, // Slaytlar arasındaki boşluk
      breakpoints: {
        1024: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 2,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="container">
        <div className="ak-slider ak-trusted-client-slider" ref={swiperRef}>
          <h4 className="title">Çalıştığımız Partnerlerimiz</h4>
          <div className="swiper-wrapper">
            {clients.map((client) => (
              <div className="swiper-slide" key={client.id}>
                <motion.div
                  className="trusted-client "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <img src={client.imgSrc} alt={client.alt} />
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigasyon düğmeleri kaldırıldı */}
        </div>
      </div>
    </section>
  );
};

export default TrustedClientSection;
