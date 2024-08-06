"use client";
import { useState, useEffect } from "react";
import PreLoader from "@/components/PreLoader/PreLoader";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServiceCards from "@/components/Services/Services";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import VideoHome from "@/components/VideoSection/VideoSection";
import FunFactCounter from "@/components/FunFacts/FunFacts";
import TrustedClientSlider from "@/components/ThrustedClient/ThrustedClient";
import TestimonialSection from "@/components/Reviews/Reviews";
import TeamSection from "@/components/TeamSection/TeamSection";
import PricingSection from "@/components/Pricing/Pricing";
import BlogNews from "@/components/BlogsSection/Blogs";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      // Add the 'loaded' class to the preloader-content once loading is complete
      const preloader = document.querySelector(".preloader-content");
      if (preloader) {
        preloader.classList.add("loaded");
      }
    }
  }, [loading]);

  return (
    <div>
      {/* Preloader */}
      {loading && <PreLoader />}

      {!loading && (
        <>
          <HeroSection />
          <ServiceCards />
          <WhyChooseUs />
          <ServicesSection />
          <VideoHome />
          <FunFactCounter />
          <TrustedClientSlider />
          <TestimonialSection />
          <TeamSection />
          <PricingSection />
          <BlogNews />
        </>
      )}
    </div>
  );
}
