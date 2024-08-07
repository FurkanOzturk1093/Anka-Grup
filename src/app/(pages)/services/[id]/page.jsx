"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const ServiceDetail = () => {
  const serviceCards = useSelector((state) => state.serviceCards.serviceCards);
  const pathname = usePathname();
  const services = useSelector((state) => state.services.services);

  // Get only 2 service cards
  const filteredService = useMemo(
    () =>
      serviceCards.filter((service) => service.path !== pathname).slice(0, 2),
    [serviceCards, pathname]
  );

  const service = useMemo(
    () => services.find((service) => service.href === pathname),
    [services, pathname]
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      {/* Common page title */}
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="container">
        <div className="md:flex justify-between items-center">
          <div className="common-page-title">
            <h3 className="page-title">Services</h3>
            <div className="flex gap-2 items-center">
              <p>Home /</p>
              <Link href="/services">Services</Link>
            </div>
          </div>
        </div>
        <div className="primary-color-border"></div>
      </div>

      {/* All Content */}
      <div className="ak-height-75 ak-height-lg-80"></div>
      <div className="flex justify-center">
        <div className="sticky-content container">
          <div className="content">
            <div className="single-blog-list">
              <h4 className="single-blog-title">{service.title}</h4>
              <p className="single-blog-desp">{service.detailedDescription}</p>
              <Image
                src={service.imgSrc}
                alt="Service"
                width={800}
                height={400}
                className="max-h-[460px] h-auto"
              />
              <div className="ak-height-50 ak-height-lg-50"></div>
            </div>
            {/* Add more content sections here */}
          </div>
          <div className="sidebar">
            <div className="flex flex-col gap-4 items-end">
              {filteredService.map((service, index) => (
                <ServiceCard
                  key={index}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  iconSrc={service.iconSrc}
                  path={service.path}
                />
              ))}
              {/* Add more service cards here */}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="container">
        <h4 className="faq-images-title">Sıkça Sorulan Sorular</h4>
        <div className="faq-images">
          <div className="faq">
            <div className="ak-accordion">
              {/* FAQ items */}
              {service.FAQ.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isFirstItem={index === 0}
                />
              ))}
              {/* Add more FAQ items here */}
            </div>
          </div>
          <div className="images">
            <Image
              src="/assets/img/accordion-side-img.jpg"
              alt="FAQ Background"
              width={400}
              height={300}
              className="img-bg-faq"
            />
            <div className="images-info">
              {/* Contact information */}
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="container">
        <div className="cta mb-5">
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
            <Link href="#" className="cta-btn">
              <Image
                src="/assets/img/phone.svg"
                alt="Phone"
                width={20}
                height={20}
              />
              <span className="ms-2">BİZİMLE İLETİŞİME GEÇİN</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ iconSrc, title, description, path }) => (
  <div className="service-card-style-2">
    <div className="service-icon">
      <Image src={iconSrc} alt={title} width={24} height={24} />
    </div>
    <div className="service-desp">
      <Link href={path} className="title">
        {title}
      </Link>
      <p className="desp">{description}</p>
      <Link href={path} className="more-btn">
        Daha Fazla
      </Link>
    </div>
  </div>
);

const FaqItem = ({ question, answer, isFirstItem }) => {
  const [isOpen, setIsOpen] = useState(isFirstItem);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ak-accordion-item">
      <div
        className={`ak-accordion-title ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h2>{question}</h2>
      </div>
      <div
        className="ak-accordion-tab"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

// Contact Info Component
const ContactInfo = () => (
  <>
    <div className="flex items-center gap-3">
      <div className="heartbeat-icon">
        <a href="tel:4447206">
          <span className="ak-heartbeat-btn">
            <Image
              src="/assets/img/phone.svg"
              alt="Phone"
              width={20}
              height={20}
            />
          </span>
        </a>
      </div>
      <h3>444 7 206</h3>
    </div>
    <div className="flex items-center gap-3">
      <div className="heartbeat-icon">
        <a href="mailto:info@ankagrup.org">
          <span className="ak-heartbeat-btn">
            <Image
              src="/assets/img/email.svg"
              alt="Email"
              width={20}
              height={20}
            />
          </span>
        </a>
      </div>
      <h3>info@ankagrup.org</h3>
    </div>
    <div className="ak-location">
      <Link href="#" className="flex gap-2 text-hover-animation">
        <span className="mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="19"
            viewBox="0 0 15 19"
            fill="none"
          >
            <path
              d="M7.83533 0.501953C3.9756 0.501953 0.835327 3.4927 0.835327 7.16863C0.835327 8.27215 1.12502 9.36629 1.67574 10.3368L7.45253 18.2871C7.52943 18.4198 7.67598 18.502 7.83533 18.502C7.99467 18.502 8.14117 18.4198 8.21817 18.2871L13.9478 10.3368C14.4751 9.3998 14.8353 8.25207 14.8353 7.16863C14.8353 3.4927 11.695 0.501953 7.83533 0.501953ZM7.83533 11.2925C6.58059 11.2925 5.54171 10.2536 5.54171 9.03457C5.54171 7.8155 6.58059 6.77663 7.83533 6.77663C9.09007 6.77663 10.1289 7.8155 10.1289 9.03457C10.1289 10.2536 9.09007 11.2925 7.83533 11.2925Z"
              fill="#FEF8F8"
            />
          </svg>
        </span>
        <span>Şişli / İstanbul</span>
      </Link>
    </div>
  </>
);

export default ServiceDetail;
