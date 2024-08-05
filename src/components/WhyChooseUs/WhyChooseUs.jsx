import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <section className="container">
        <div className="choose-us-container-extents">
          <div className="choose-us-contain">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="choose-us-info"
            >
              <div className="ak-section-heading ak-style-1">
                <div className="background-text">Özellikler</div>
                <h2 className="ak-section-title">Neden Bizi Seçmelisiniz</h2>
                <p className="ak-section-subtitle">
                  Otomobil servisinde 20 yılı aşkın deneyimimizle, en yüksek
                  kalitede hizmet sunuyoruz. Modern ekipmanlarımız ve uzman
                  kadromuzla aracınızın bakım ve onarımını en iyi şekilde
                  gerçekleştiriyoruz. Müşteri memnuniyeti bizim için her zaman
                  ön plandadır.
                </p>
              </div>
              <div className="ak-height-60 ak-height-lg-30"></div>
              <div className="stroke-heading-text">
                <h3 className="ak-stroke-text hover-color-changes">
                  Sertifikalı Teknisyenler
                </h3>
                <h3 className="ak-stroke-text hover-color-changes">
                  Kapsamlı Onarım Hizmetleri
                </h3>
                <h3 className="ak-stroke-text hover-color-changes">
                  900+ Beş Yıldızlı Değerlendirme
                </h3>
                <h3 className="ak-stroke-text hover-color-changes">
                  Onarım Garantisi
                </h3>
              </div>
              <div className="ak-height-60 ak-height-lg-30"></div>
              <Link href="/about" className="common-btn">
                Daha Fazla Bilgi
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
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
