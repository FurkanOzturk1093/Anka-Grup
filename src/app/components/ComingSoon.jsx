"use client";
import { useState, useEffect } from "react";

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-06") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 365),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="comming-section ak-bg ak-center"
      style={{
        backgroundImage: "url(/assets/images/not-found-page-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="comming-content">
        <h1 className="comming-title">Yakında Geliyor</h1>
        <div className="time-info" id="comming-section">
          <div className="time-card">
            <h1 className="time-text ak-stroke-number color-white" id="days">
              {timeLeft.days || 0}
            </h1>
            <p>Gün</p>
          </div>
          <div className="time-card">
            <h1 className="time-text ak-stroke-number color-white" id="hours">
              {timeLeft.hours || 0}
            </h1>
            <p>Saat</p>
          </div>
          <div className="time-card">
            <h1 className="time-text ak-stroke-number color-white" id="minutes">
              {timeLeft.minutes || 0}
            </h1>
            <p>Dakika</p>
          </div>
          <div className="time-card">
            <h1 className="time-text ak-stroke-number color-white" id="seconds">
              {timeLeft.seconds || 0}
            </h1>
            <p>Saniye</p>
          </div>
        </div>
      </div>
    </div>
  );
}
