// components/VideoHome.js

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const VideoHome = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="video-home">
        <motion.div
          ref={ref}
          className="ak-video-block ak-style1 ak-video-open ak-bg ak-parallax_bg imagesZoom"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=VcaAVWtP48A", "_blank")
          }
        >
          <Image
            src="/assets/img/car_video_bg.jpg"
            alt="Video Background"
            layout="fill"
            objectFit="cover"
            className="ak-parallax_bg"
          />
          <span className="ak-heartbeat-btn">
            <span></span>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoHome;
