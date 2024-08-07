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
      path: "/services/1",
    },
    {
      number: "2",
      title: "ELEKTRİK ELEKTRONİK",
      description:
        "Araç elektrik ve elektronik sistemlerinde uzmanlaşmış ekibimizle, sorunlarınıza hızlı ve etkili çözümler sunuyoruz.",
      iconSrc: "/assets/img/car.svg",
      path: "/services/2",
    },
    {
      number: "3",
      title: "OTO TAMİR",
      description:
        "Deneyimli teknisyenlerimiz, aracınızın her türlü mekanik ve elektrik arızasını gidermek için en son teknolojileri kullanıyor. Hızlı ve güvenilir tamir hizmetimizle aracınızı kısa sürede yollara döndürüyoruz.",
      iconSrc: "/assets/img/car-repair.svg",
      path: "/services/3",
    },
  ],
};

const serviceCardsSlice = createSlice({
  name: "serviceCards",
  initialState,
  reducers: {},
});

export default serviceCardsSlice.reducer;
