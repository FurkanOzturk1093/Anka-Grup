import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer style-1 footer-bg">
      <div className="container">
        <div className="ak-height-70 ak-height-lg-30"></div>
        <div className="primary-color-border"></div>
        <div className="ak-height-35 ak-height-lg-30"></div>
        <div className="footer-logo py-4">
          <Image
            src="/assets/img/logo.png"
            alt="Footer Logo"
            width={200}
            height={200}
          />
          <div className="ak-height-15 ak-height-lg-10"></div>
        </div>
        <div className="footer-content">
          <div className="footer-info">
            <p className="desp">
              Anka Grup, araç bakımı ve onarımı hakkında en son haberleri ve
              ipuçlarını paylaşır. Anka Grup, profesyonel ve deneyimli bir
              ekiple çalışmaktadır.
            </p>
            <div className="ak-height-35 ak-height-lg-30"></div>
            <div className="d-flex align-items-center gap-3">
              <div className="heartbeat-icon">
                <Link href="tel:(111) 111-1111">
                  <span className="ak-heartbeat-btn">
                    <FaPhoneAlt size={24} />
                  </span>
                </Link>
              </div>
              <Link
                href="tel:(111) 111-1111"
                className="phone text-hover-animaiton white whitespace-nowrap"
              >
                (111) 111-1111
              </Link>
            </div>
          </div>
          <div className="footer-menu-one">
            <div className="footer-menu">
              <p className="menu-title">HIZLI BAĞLANTILAR</p>
              <Link
                href="/about.html"
                className="menu-item text-hover-animaiton white"
              >
                Hakkında
              </Link>
              <Link
                href="/services.html"
                className="menu-item text-hover-animaiton white"
              >
                Hizmetler
              </Link>
              <Link
                href="/pricing.html"
                className="menu-item text-hover-animaiton white"
              >
                Fiyatlandırma
              </Link>
              <Link
                href="/team.html"
                className="menu-item text-hover-animaiton white"
              >
                Ekip
              </Link>
              <Link
                href="/contact-us.html"
                className="menu-item text-hover-animaiton white"
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </div>
          <div className="footer-menu-two">
            <div className="footer-menu">
              <p className="menu-title">HIZLI BAĞLANTILAR</p>
              <Link
                href="/appointment.html"
                className="menu-item text-hover-animaiton white"
              >
                Randevu
              </Link>
              <Link href="" className="menu-item text-hover-animaiton white">
                Blog / Haberler
              </Link>
              <Link
                href="/faq.html"
                className="menu-item text-hover-animaiton white"
              >
                Sıkça Sorulan Sorular
              </Link>
              <Link
                href="/team.html"
                className="menu-item text-hover-animaiton white"
              >
                Ekip
              </Link>
            </div>
          </div>
          <div className="footer-address">
            <p className="adress-title">LOKASYON & İLETİŞİM</p>
            <Link href="#" className="location">
              <FiMapPin size={24} className="me-1" />
              Büyük sanayi 1.Cad Arpacıoğlu 2 işhanı no:95/1 no:95/11 06006
              İskitler-Ankara-Altındağ
            </Link>
            <Link href="mailto:example@email.com" className="email">
              <FaEnvelope size={24} className="me-1" />
              info@ankagrup.org
            </Link>
          </div>
        </div>
        <div className="copy-right">
          <p className="title text-hover-animaiton">
            Telif Hakkı 2024, Tüm Hakları Saklıdır
          </p>
          <div className="social-icon mt-4">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="social-icon"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="social-icon"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="social-icon"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="social-icon"
            >
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
