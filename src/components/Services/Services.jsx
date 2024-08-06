import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ number, title, description, iconSrc }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      className="service-progress-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="progress-item">
        <h4 className="ak-stroke-number color-white">
          {number.padStart(2, "0")}
        </h4>
        <div className="ak-border-width"></div>
      </div>
      <div className="service-item">
        <motion.div
          className="heartbeat-icon"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="#">
            <span className="ak-heartbeat-btn">
              <Image src={iconSrc} alt={title} width={24} height={24} />
            </span>
          </a>
        </motion.div>
        <div className="service-info">
          <h4 className="title">{title}</h4>
          <p className="desp">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      number: "1",
      title: "PERFORMANS KONTROLÜ",
      description:
        "Aracınızın optimum performansını sağlamak için kapsamlı diagnostik testler uyguluyoruz. Motor, şanzıman ve diğer kritik sistemlerin detaylı analizini yaparak potansiyel sorunları erkenden tespit ediyoruz.",
      iconSrc: "/assets/img/speedome.svg",
    },
    {
      number: "2",
      title: "PERFORMANS ARTIŞI",
      description:
        "Aracınızın performansını artırmak için özel olarak tasarlanmış yüksek kaliteli yedek parçalar kullanıyoruz. Motor, egzoz, fren ve süspansiyon sistemlerini güçlendirerek aracınızın performansını maksimum seviyeye çıkarıyoruz.",
      iconSrc: "/assets/img/car.svg",
    },
    {
      number: "3",
      title: "ELEKTRİK ELEKTRONİK",
      description:
        "Araç elektrik ve elektronik sistemlerinde uzmanlaşmış ekibimizle, sorunlarınıza hızlı ve etkili çözümler sunuyoruz.",
      iconSrc: "/assets/img/car.svg",
    },
    {
      number: "4",
      title: "OTO TAMİR",
      description:
        "Deneyimli teknisyenlerimiz, aracınızın her türlü mekanik ve elektrik arızasını gidermek için en son teknolojileri kullanıyor. Hızlı ve güvenilir tamir hizmetimizle aracınızı kısa sürede yollara döndürüyoruz.",
      iconSrc: "/assets/img/car-repair.svg",
    },
  ];

  return (
    <div className="service-cards-container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <section className="container">
        <div className="row row-cols-1 row-cols-xl-3 g-4 justify-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              iconSrc={service.iconSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceCards;
