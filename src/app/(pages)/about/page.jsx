"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import FunFactCounter from "@/components/FunFacts/FunFacts";
import TestimonialSection from "@/components/Reviews/Reviews";
import TeamSection from "@/components/TeamSection/TeamSection";
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("Misyon");

  const tabContent = {
    Misyon:
      "Anka Group, otomotiv sektöründe 20+ yıl deneyime sahip bir şirkettir. Araçları yükseltme, onarım, elektronik vb. alanlarda hizmet vermekteyiz. Müşterilerimize en yüksek kalitede hizmet sunmak için sürekli olarak kendimizi geliştirmekteyiz.",
    Vizyon:
      "Anka Group'un vizyonu, sektördeki liderliğimizi sürdürmek ve otomotiv teknolojilerinde yenilikçi çözümler sunmaktır. Müşteri memnuniyetini ön planda tutarak, otomotiv sektöründeki en iyi hizmeti sunmayı hedefliyoruz.",
    Tarihçe:
      "Anka Group, otomotiv sektöründe 20 yılı aşkın bir süredir faaliyet göstermektedir. Bu süre zarfında, araç yükseltme, onarım ve elektronik konularında birçok başarılı projeye imza attık. Şirketimiz, müşteri memnuniyetini ve kaliteli hizmeti her zaman ön planda tutmuştur.",
  };
  return (
    <>
      <div
        className="ak-bg"
        style={{ backgroundImage: "url('/assets/img/about-page-title.jpg')" }}
      >
        <div className="ak-height-100 ak-height-lg-100"></div>
        <div className="ak-height-125 ak-height-lg-40"></div>
        <div className="container">
          <div className="common-page-title">
            <h3 className="page-title">Hakkımızda</h3>
            <div className="d-flex gap-2 align-items-center">
              <p>Anasayfa /</p>
              <Link href="/about">Hakkımızda</Link>
            </div>
          </div>
        </div>
        <div className="ak-height-100 ak-height-lg-100"></div>
      </div>

      {/* Şirket Sekmesi Bölümü */}
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="container">
        <div className="company-tab">
          <ul className="tabs">
            {Object.keys(tabContent).map((tab) => (
              <li
                key={tab}
                className={activeTab === tab ? "active-tab" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>

          <div className="">
            <div className="list">
              <div className="ak-section-heading ak-style-1 ak-type-1">
                <h3 className="desp">{tabContent[activeTab]}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <FunFactCounter />
      <TestimonialSection />
      <TeamSection />

      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="container mb-10">
        <div className="cta">
          <span className="border-pr"></span>
          <span className="border-wh"></span>
          <div className="cta-info">
            <h2 className="cta-title">Uzmanlarımızla İletişime Geçin</h2>
            <p className="cta-desp">
              Anka Group, otomotiv sektöründe 20 yılı aşkın deneyime sahip bir
              şirkettir. Araç yükseltme, onarım ve elektronik hizmetleri
              sunuyoruz. Müşteri memnuniyetini ön planda tutarak, en iyi hizmeti
              sağlamak için sürekli kendimizi geliştiriyoruz.
            </p>
            <Link href="/contact-us" className="cta-btn">
              <Image
                src="/assets/img/phone.svg"
                alt="Telefon"
                width={20}
                height={20}
              />
              <span className="ms-2">BİZİMLE İLETİŞİME GEÇİN</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
