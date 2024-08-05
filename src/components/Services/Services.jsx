import Image from "next/image";

const ServiceCard = ({ number, title, description, iconSrc }) => (
  <div className="service-progress-card">
    <div className="progress-item">
      <h4 className="ak-stroke-number color-white">
        {number.padStart(2, "0")}
      </h4>
      <div className="ak-border-width"></div>
    </div>
    <div className="service-item">
      <div className="heartbeat-icon">
        <a href="#">
          <span className="ak-heartbeat-btn">
            <Image src={iconSrc} alt={title} width={24} height={24} />
          </span>
        </a>
      </div>
      <div className="service-info">
        <h4 className="title">{title}</h4>
        <p className="desp">{description}</p>
      </div>
    </div>
  </div>
);

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
      title: "OTO TAMİR",
      description:
        "Deneyimli teknisyenlerimiz, aracınızın her türlü mekanik ve elektrik arızasını gidermek için en son teknolojileri kullanıyor. Hızlı ve güvenilir tamir hizmetimizle aracınızı kısa sürede yollara döndürüyoruz.",
      iconSrc: "/assets/img/car-repair.svg",
    },
    {
      number: "3",
      title: "FİLO HİZMETLERİ",
      description:
        "Şirket filonuzun bakımı ve yönetimi için özel çözümler sunuyoruz. Düzenli bakım programları, acil yol yardımı ve filo optimizasyon hizmetlerimizle işletmenizin araç yönetimini kolaylaştırıyoruz.",
      iconSrc: "/assets/img/car.svg",
    },
  ];

  return (
    <div className="service-cards-container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <section className="container">
        <div className="row row-cols-1 row-cols-xl-3 g-4">
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
