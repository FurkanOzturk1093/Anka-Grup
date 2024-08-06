import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useAnimation } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

Swiper.use([Navigation, Pagination, Autoplay]);

export default function HeroSection() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const swiper = new Swiper(".ak-slider-hero-1", {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      on: {
        slideChange: function (swiper) {
          setActiveIndex(swiper.realIndex);
        },
      },
    });

    setSwiperInstance(swiper);

    return () => {
      swiper.destroy();
    };
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [activeIndex, controls]);

  const slideVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div>
      <section className="ak-slider ak-slider-hero-1">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="ak-hero ak-style1 slide-inner">
              <img
                src="/assets/img/hero_slider_bg_1.png"
                className="ak-hero-bg ak-bg object-cover"
                alt="Hero Background 1"
              />
              <div className="container">
                <div className="hero-slider-info">
                  <motion.div
                    className="slider-info"
                    initial="hidden"
                    animate={activeIndex === 0 ? "visible" : "hidden"}
                    variants={containerVariants}
                  >
                    <div className="hero-title">
                      <motion.h1
                        className="hero-main-title"
                        variants={slideVariants}
                      >
                        Araç Onarımı & Otomotiv
                      </motion.h1>
                      <motion.h1
                        className="hero-main-title-1 style-2"
                        variants={slideVariants}
                      >
                        Hizmetler
                      </motion.h1>
                      <motion.p className="mini-title" variants={slideVariants}>
                        Sertifikalı teknisyenlerimiz, aracınızın en iyi
                        performansı göstermesi için yüksek kaliteli araç onarımı
                        ve otomotiv hizmetleri sunmaktadır.
                      </motion.p>
                    </div>
                    <div className="ak-height-45 ak-height-lg-30"></div>
                    <motion.div variants={slideVariants}>
                      <a href="appointment.html" className="common-btn">
                        RANDEVU
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="ak-hero ak-style1 slide-inner">
              <img
                src="/assets/img/hero_slider_bg_2.png"
                className="ak-hero-bg ak-bg object-cover"
                alt="Hero Background 2"
              />
              <div className="container">
                <div className="hero-slider-info">
                  <motion.div
                    className="slider-info"
                    initial="hidden"
                    animate={activeIndex === 1 ? "visible" : "hidden"}
                    variants={containerVariants}
                  >
                    <div className="hero-title">
                      <motion.h1
                        className="hero-main-title"
                        variants={slideVariants}
                      >
                        Kaliteli Parçalar & Aksesuarlar
                      </motion.h1>
                      <motion.h1
                        className="hero-main-title-1 style-2"
                        variants={slideVariants}
                      >
                        Araçınız İçin
                      </motion.h1>
                      <motion.p className="mini-title" variants={slideVariants}>
                        Araçınızın düzgün ve verimli çalışmasını sağlamak için
                        geniş bir kalite yelpazesi sunuyoruz.
                      </motion.p>
                    </div>
                    <div className="ak-height-45 ak-height-lg-30"></div>
                    <motion.div variants={slideVariants}>
                      <a href="parts.html" className="common-btn">
                        PARÇA AL
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
