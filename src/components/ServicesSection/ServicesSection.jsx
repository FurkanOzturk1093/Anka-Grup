import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const services = [
  {
    href: "/services-single",
    imgSrc: "/assets/img/service_1.jpg",
    title: "Performans Yükseltmeleri ve Özelleştirme",
    description:
      "Araç performansınızı artırarak, kişisel ihtiyaçlarınıza uygun özelleştirme seçenekleri sunuyoruz.",
  },
  {
    href: "/services-single",
    imgSrc: "/assets/img/service_3.jpg",
    title: "Elektrik ve Elektronik Sistemler",
    description:
      "Araç elektrik ve elektronik sistemlerinde uzmanlaşmış ekibimizle, sorunlarınıza hızlı ve etkili çözümler sunuyoruz.",
  },
  {
    href: "/services-single",
    imgSrc: "/assets/img/service_2.jpg",
    title: "Motor Diagnostik ve Onarım",
    description:
      "Motorunuzun sağlığını korumak için kapsamlı teşhis ve onarım hizmetleri sağlıyoruz.",
  },
];

const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="service-card"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Link href={service.href} className="card-img">
        <Image
          src={service.imgSrc}
          alt={service.title}
          width={400}
          height={300}
          className="ak-bg"
        />
      </Link>
      <motion.div
        className="card-info"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        <Link href={service.href} className="more-btn">
          {service.title}
        </Link>
        <p className="card-desp">{service.description}</p>
        <Link href={service.href} className="more-btn">
          DAHA FAZLA GÖR
        </Link>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="d-flex justify-content-center">
        <div className="sticky-content container" ref={ref}>
          <div className="content style_2">
            <div className="service">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
          <motion.div
            className="sidebar width-none"
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="services-content">
              <div className="ak-section-heading ak-style-1">
                <motion.div
                  className="background-text"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  Hizmetler
                </motion.div>
                <motion.h2
                  className="ak-section-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Özel
                  <br /> Hizmetler
                </motion.h2>
                <motion.p
                  className="ak-section-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Araç bakımında ve onarımında en iyi hizmeti sunmak için
                  buradayız. Geniş hizmet yelpazemizle, her ihtiyacınıza yönelik
                  çözümler sunuyoruz.
                </motion.p>
              </div>
              <div className="ak-height-50 ak-height-lg-10"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="" className="more-btn">
                  TÜM HİZMETLERİ GÖR
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="scroll-end-point"></div>
    </div>
  );
};

export default ServicesSection;
