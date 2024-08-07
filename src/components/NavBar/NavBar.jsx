"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  // State to manage the toggle state of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle the toggle button click
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="ak-site_header ak-style1 ak-sticky_header">
      <div className="ak-main_header">
        <div className="container">
          <div className="ak-main_header_in">
            <div className="ak-main-header-left">
              <Link href="/" className="ak-site_branding">
                <Image
                  src="/assets/img/logo.png"
                  alt="Site Logo"
                  width={200}
                  height={200}
                />
              </Link>
            </div>
            <div className="ak-main-header-center">
              <nav className="ak-nav ak-medium">
                <ul className={`ak-nav_list ${isMenuOpen ? "active" : ""}`}>
                  <li>
                    <Link href="/" className="text-hover-animation">
                      Ana Sayfa
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-hover-animaiton">
                      Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-hover-animaiton">
                      <p>Hizmetler</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-hover-animaiton">
                      <p>Blog</p>
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact-us" className="text-hover-animaiton">
                      <p>İletişim</p>
                    </Link>
                  </li>
                </ul>
                <span
                  className={`ak-munu_toggle ${
                    isMenuOpen ? "ak-toggle_active" : ""
                  }`}
                  onClick={handleMenuToggle}
                >
                  <span></span>
                </span>
              </nav>
            </div>
            <div className="ak-main-header-right">
              <Link
                href="tel:444 7 206"
                className="d-flex align-items-center gap-3"
              >
                <div className="heartbeat-icon">
                  <span className="ak-heartbeat-btn">
                    <Image
                      src="/assets/img/phone.svg"
                      alt="Phone"
                      width={20}
                      height={20}
                    />
                  </span>
                </div>
                <h6>444 7 206</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bar-border"></div>
    </header>
  );
}
