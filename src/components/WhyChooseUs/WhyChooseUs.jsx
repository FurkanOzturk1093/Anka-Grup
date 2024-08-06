import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <section className="container" ref={ref}>
        <div className="choose-us-container-extents">
          <div className="choose-us-contain">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
              transition={{ duration: 0.5 }}
              className="choose-us-info"
            >
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
                  Özellikler
                </motion.div>
                <motion.h2
                  className="ak-section-title"
                  variants={textVariants}
                  transition={{ delay: 0.2 }}
                >
                  Neden Bizi Seçmelisiniz
                </motion.h2>
                <motion.p
                  className="ak-section-subtitle"
                  variants={textVariants}
                  transition={{ delay: 0.3 }}
                >
                  Otomobil servisinde 20 yılı aşkın deneyimimizle, en yüksek
                  kalitede hizmet sunuyoruz. Modern ekipmanlarımız ve uzman
                  kadromuzla aracınızın bakım ve onarımını en iyi şekilde
                  gerçekleştiriyoruz. Müşteri memnuniyeti bizim için her zaman
                  ön plandadır.
                </motion.p>
              </div>
              <div className="ak-height-60 ak-height-lg-30"></div>
              <motion.div
                className="stroke-heading-text"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                <motion.h3 className="ak-stroke-text" variants={textVariants}>
                  Sertifikalı Teknisyenler
                </motion.h3>
                <motion.h3 className="ak-stroke-text" variants={textVariants}>
                  Kapsamlı Onarım Hizmetleri
                </motion.h3>
                <motion.h3 className="ak-stroke-text" variants={textVariants}>
                  900+ Beş Yıldızlı Değerlendirme
                </motion.h3>
                <motion.h3 className="ak-stroke-text" variants={textVariants}>
                  Onarım Garantisi
                </motion.h3>
              </motion.div>
              <div className="ak-height-60 ak-height-lg-30"></div>
              <motion.div variants={textVariants} transition={{ delay: 0.5 }}>
                <Link href="/about" className="common-btn">
                  Daha Fazla Bilgi
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 2, delay: 1 }}
              className="choose-us-img"
            >
              <Image
                src="/assets/img/choose-us.png"
                alt="Neden bizi seçmelisiniz"
                width={500}
                height={300}
              />
              <Image
                className="circle-img"
                src="/assets/img/Circle.png"
                alt="Dekoratif daire"
                width={200}
                height={200}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
