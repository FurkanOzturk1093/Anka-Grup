// src/components/ServiceCards.js
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const ServiceCard = ({ number, title, description, iconSrc }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div>
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
    </div>
  );
};

const ServiceCards = () => {
  const serviceCards = useSelector((state) => state.serviceCards.serviceCards);

  return (
    <div className="service-cards-container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <section className="container">
        <div className="row row-cols-1 row-cols-xl-3 g-4 justify-center">
          {serviceCards.map((service, index) => (
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
