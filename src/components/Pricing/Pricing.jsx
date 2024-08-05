import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const PricingCard = ({ title, discountPrice, mainPrice, options }) => (
  <div className="pricing-card">
    <div className="pricing-heading">
      <p className="title">{title}</p>
      <h2 className="discount-price">{discountPrice}</h2>
      <h5 className="main-price">{mainPrice}</h5>
    </div>
    <div className="opation-all">
      {options.map((option, index) => (
        <div key={index} className="opation">
          <div className="icon">
            <FaCheck
              className="text-white bg-opacity-10 bg-white rounded-full p-1"
              size={27}
            />
          </div>

          <p className="title whitespace-nowrap">{option}</p>
        </div>
      ))}
    </div>
    <a href="#" className="get-started-btn">
      <span>
        <div className="flex items-center gap-2">
          BAŞLA
          <FaArrowRight className="text-white" size={16} />
        </div>
        Şimdi
      </span>
    </a>
  </div>
);

const PricingSection = () => {
  const pricingOptions = [
    {
      title: "Tam Araç Bakımı",
      discountPrice: "$299.99",
      mainPrice: "$399.99",
      options: [
        "Performans Ayarı",
        "Egzoz Sistemi Kurulumu",
        "Performans Fren Yükseltmesi",
        "İç ve Dış Temizlik",
      ],
    },
    {
      title: "Performans Artışı",
      discountPrice: "$599.99",
      mainPrice: "$899.99",
      options: [
        "Performans Ayarı",
        "Egzoz Sistemi Kurulumu",
        "Performans Fren Yükseltmesi",
        "İç ve Dış Temizlik",
      ],
    },
    {
      title: "Filo Bakımı",
      discountPrice: "$399.99",
      mainPrice: "$499.99",
      options: [
        "Performans Ayarı",
        "Egzoz Sistemi Kurulumu",
        "Performans Fren Yükseltmesi",
        "İç ve Dış Temizlik",
      ],
    },
  ];

  return (
    <>
      <div className="ak-height-160 ak-height-lg-50"></div>
      <div
        className="ak-bg"
        style={{
          backgroundImage: "url('/assets/img/pricing_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image
          src="/assets/img/pricing_bg.png"
          alt="Fiyatlandırma Arka Planı"
          layout="fill"
          objectFit="cover"
        />
        <div className="ak-height-100 ak-height-lg-50"></div>
        <div className="container">
          <div className="center-section-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1">
              <div className="background-text">Fiyatlandırma</div>
              <h2 className="ak-section-title">Fiyatlandırma</h2>
              <p className="ak-section-subtitle">
                Baskı ve dizgi endüstrisinin basitçe sahte metni. Lorem Ipsum,
                endüstrinin standart metni olmuştur. Baskı ve dizgi
                endüstrisinin basitçe sahte metni.
              </p>
            </div>
          </div>
          <div className="ak-height-50 ak-height-lg-50"></div>
          <div className="ak-pricing-slider ak-slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {pricingOptions.map((option, index) => (
                <SwiperSlide key={index}>
                  <PricingCard {...option} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="ak-height-100 ak-height-lg-80"></div>
      </div>
    </>
  );
};

export default PricingSection;
