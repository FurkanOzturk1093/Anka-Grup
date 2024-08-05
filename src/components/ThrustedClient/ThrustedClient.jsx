import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

Swiper.use([Autoplay]);

const TrustedClientSection = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      loop: true,
      autoplay: {
        delay: 3000,
      },
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
          slidesPerView: 1,
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
          <h4 className="title">Güvenilen Müşteriler</h4>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <motion.div
                className="trusted-client"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src="/assets/img/trusted-client_1.png" alt="Müşteri 1" />
              </motion.div>
            </div>
            <div className="swiper-slide">
              <motion.div
                className="trusted-client"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src="/assets/img/trusted-client_2.png" alt="Müşteri 2" />
              </motion.div>
            </div>
            <div className="swiper-slide">
              <motion.div
                className="trusted-client"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src="/assets/img/trusted-client_3.png" alt="Müşteri 3" />
              </motion.div>
            </div>
            <div className="swiper-slide">
              <motion.div
                className="trusted-client"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src="/assets/img/trusted-client_4.png" alt="Müşteri 4" />
              </motion.div>
            </div>
            <div className="swiper-slide">
              <motion.div
                className="trusted-client"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src="/assets/img/trusted-client_5.png" alt="Müşteri 5" />
              </motion.div>
            </div>
            <div className="swiper-slide">
              <motion.div
                className="trusted-client"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src="/assets/img/trusted-client_6.png" alt="Müşteri 6" />
              </motion.div>
            </div>
            <div className="swiper-slide">
              <motion.div
                className="trusted-client"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src="/assets/img/trusted-client_7.png" alt="Müşteri 7" />
              </motion.div>
            </div>
          </div>

          {/* Navigasyon düğmeleri kaldırıldı */}
        </div>
      </div>
    </section>
  );
};

export default TrustedClientSection;
