// src/components/ServicesSection.js

import Image from "next/image";
import { motion } from "framer-motion";
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
    imgSrc: "/assets/img/service_2.jpg",
    title: "Motor Diagnostik ve Onarım",
    description:
      "Motorunuzun sağlığını korumak için kapsamlı teşhis ve onarım hizmetleri sağlıyoruz.",
  },
  {
    href: "/services-single",
    imgSrc: "/assets/img/service_3.jpg",
    title: "Lastik Hizmetleri",
    description:
      "Lastik değişimi ve bakımı ile güvenli bir sürüş deneyimi sunuyoruz.",
  },
];

const ServicesSection = () => {
  return (
    <div>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="d-flex justify-content-center">
        <div className="sticky-content container">
          <div className="content style_2">
            <div className="service">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
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
                  <div className="card-info">
                    <Link href={service.href} className="more-btn">
                      {service.title}
                    </Link>
                    <p className="card-desp">{service.description}</p>
                    <Link href={service.href} className="more-btn">
                      DAHA FAZLA GÖR
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="sidebar width-none">
            <div className="services-content">
              <div className="ak-section-heading ak-style-1">
                <div
                  className="background-text"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  Hizmetler
                </div>
                <h2 className="ak-section-title">
                  Özel
                  <br /> Hizmetler
                </h2>
                <p className="ak-section-subtitle">
                  Araç bakımında ve onarımında en iyi hizmeti sunmak için
                  buradayız. Geniş hizmet yelpazemizle, her ihtiyacınıza yönelik
                  çözümler sunuyoruz.
                </p>
              </div>
              <div className="ak-height-50 ak-height-lg-10"></div>
              <Link href="" className="more-btn">
                TÜM HİZMETLERİ GÖR
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-end-point"></div>
    </div>
  );
};

export default ServicesSection;
