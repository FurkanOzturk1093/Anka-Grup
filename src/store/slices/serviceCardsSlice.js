// src/redux/serviceCardsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceCards: [
    {
      number: "1",
      title: "PERFORMANS ARTIŞI",
      description:
        "Aracınızın performansını artırmak için özel olarak tasarlanmış yüksek kaliteli yedek parçalar kullanıyoruz. Motor, egzoz, fren ve süspansiyon sistemlerini güçlendirerek aracınızın performansını maksimum seviyeye çıkarıyoruz.",
      iconSrc: "/assets/img/speedome.svg",
      path: "/services/performans-artisi",
    },
    {
      number: "2",
      title: "ELEKTRİK ELEKTRONİK",
      description:
        "Araç elektrik ve elektronik sistemlerinde uzmanlaşmış ekibimizle, sorunlarınıza hızlı ve etkili çözümler sunuyoruz. Aracınızın elektriksel ve elektronik problemlerini en kısa sürede gideriyoruz.",
      iconSrc: "/assets/img/car.svg",
      path: "/services/elektrik-elektronik",
    },
    {
      number: "3",
      title: "OTO TAMİR",
      description:
        "Deneyimli teknisyenlerimiz, aracınızın her türlü mekanik ve elektrik arızasını gidermek için en son teknolojileri kullanıyor. Hızlı ve güvenilir tamir hizmetimizle aracınızı kısa sürede yollara döndürüyoruz.",
      iconSrc: "/assets/img/car-repair.svg",
      path: "/services/motor-tamir",
    },
  ],
};

const serviceCardsSlice = createSlice({
  name: "serviceCards",
  initialState,
  reducers: {},
});

export default serviceCardsSlice.reducer;
