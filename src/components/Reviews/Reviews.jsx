import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="container">
        <div className="ak-testimonal-controll">
          <div className="testimonal-heading">
            <div className="ak-section-heading ak-style-1">
              <div className="background-text">Bildirim</div>
              <h2 className="ak-section-title">
                Müşterilerimizin Ne <br /> Söylediğine Bakın
              </h2>
            </div>
          </div>
        </div>
        <div className="ak-height-50 ak-height-lg-50"></div>
        <div className="ak-testimonal">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".testimonal-prev",
              nextEl: ".testimonal-next",
            }}
            className="ak-slider ak-slider-testimonal"
          >
            <SwiperSlide>
              <div className="testimonal-info ak-style1">
                <div className="slider-info">
                  <div className="slider-header">
                    <div className="slider-header-left">
                      <h5 className="name">Roberts Bush</h5>
                      <p className="from">Kanada'dan</p>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="109"
                        height="81"
                        viewBox="0 0 109 81"
                        fill="none"
                      >
                        <g opacity="0.7" clipPath="url(#clip0_219_726)">
                          <path
                            d="M24.8606 80.2504C27.2135 76.6896 47.9194 44.6582 51.3233 31.1053C53.5194 22.3053 51.8096 15.5445 45.739 9.14449C36.0449 -1.09865 19.8567 -1.11431 11.0096 6.43079C1.59785 14.4622 -1.14726 29.8504 5.45666 39.2622C10.539 46.4935 15.2292 48.219 25.1586 51.4503C25.4253 56.5797 24.9861 77.0975 24.8606 80.2504Z"
                            fill="#FF3D24"
                          />
                          <path
                            d="M81.2214 80.2504C83.5743 76.6896 104.28 44.6582 107.668 31.1053C109.88 22.3053 108.155 15.5445 102.084 9.14449C92.4057 -1.09865 76.2175 -1.11431 67.3704 6.43079C57.9586 14.4622 55.1978 29.8504 61.8174 39.2622C66.8841 46.4935 71.5743 48.219 81.5194 51.4503C81.7861 56.5797 81.3312 77.0975 81.2214 80.2504Z"
                            fill="#FF3D24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_219_726">
                            <rect
                              width="108.235"
                              height="80"
                              fill="white"
                              transform="translate(0.671997 0.966797)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <h4 className="desp">
                    "Hizmetten çok memnun kaldım. Gerçekten profesyonel ve
                    etkili bir ekip."
                  </h4>
                </div>
                <Image
                  src="/assets/img/testimaonial.png"
                  alt="Geri Bildirim"
                  width={600}
                  height={600}
                  className="testimaonial-slide-img"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonal-info ak-style1">
                <div className="slider-info">
                  <div className="slider-header">
                    <div className="slider-header-left">
                      <h5 className="name">Jane Doe</h5>
                      <p className="from">ABD'den</p>
                    </div>
                  </div>
                  <h4 className="desp">
                    "Bu hizmetten çok memnun kaldım. Her şey beklentilerimin
                    üzerindeydi."
                  </h4>
                </div>
                <Image
                  src="/assets/img/testmaonail_1.png"
                  alt="Geri Bildirim"
                  width={600}
                  height={600}
                  className="testimaonial-slide-img"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="testimonal-img">
            <Image
              src="/assets/img/testimaonial-img-bg.png"
              alt="Arka Plan"
              width={500}
              height={500}
              className="testimonal-bg-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
