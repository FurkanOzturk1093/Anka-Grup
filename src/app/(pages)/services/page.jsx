"use client";
import Link from "next/link";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
const ServicesPage = () => {
  return (
    <div>
      <div className="ak-height-100 ak-height-lg-100"></div>
      <div className="ak-height-125 ak-height-lg-40"></div>
      <div className="container">
        <div className="common-page-title">
          <h3 className="page-title">Hizmetlerimiz</h3>
          <div className="d-flex gap-2 align-items-center">
            <p>Anasayfa /</p>
            <Link href="/services">Hizmetlerimiz</Link>
          </div>
        </div>
      </div>
      <div className="ak-height-100 ak-height-lg-100"></div>
      <div className="mb-4">
        <ServicesSection />
      </div>
    </div>
  );
};

export default ServicesPage;
