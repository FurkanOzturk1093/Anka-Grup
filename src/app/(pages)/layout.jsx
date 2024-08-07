// app/layout.js
"use client";

import { useEffect, useState } from "react";
import PreLoader from "@/components/PreLoader/PreLoader";
export default function Layout({ children }) {
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
      {loading && <PreLoader />}
      {children}
    </div>
  );
}
