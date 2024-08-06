// components/FunFactCounter.js

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ endValue, duration = 2, isActive }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const end = endValue;
    const range = end - start;
    const stepTime = Math.abs(Math.floor((duration * 1000) / range));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [endValue, duration, isActive]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="ak-stroke-number"
    >
      {count}
    </motion.span>
  );
};

const FunFactCounter = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
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
      <div className="container auto-counter-section">
        <div className="row align-items-center gap-lg-0 gap-3" ref={ref}>
          <div className="col-lg-4">
            <div className="ak-funfact ak-style1">
              <div className="ak-funfact-number">
                <Counter endValue={10} isActive={inView} />
                <div>
                  <span className="ak-stroke-number">+</span>
                </div>
              </div>
              <div className="ak-funfact-text">
                <p>HİZMET YILI</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ak-funfact ak-style1">
              <div className="ak-funfact-number">
                <Counter endValue={256} isActive={inView} />
                <div>
                  <span className="ak-stroke-number">+</span>
                </div>
              </div>
              <div className="ak-funfact-text">
                <p>MEMNUN MÜŞTERİ</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ak-funfact ak-style1">
              <div className="ak-funfact-number">
                <Counter endValue={112} isActive={inView} />
                <div>
                  <span className="ak-stroke-number">+</span>
                </div>
              </div>
              <div className="ak-funfact-text">
                <p>MÜŞTERİ MEMNUNİYETİ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFactCounter;
