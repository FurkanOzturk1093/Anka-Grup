// src/redux/clientSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [
    { id: 1, imgSrc: "/assets/img/trusted-client_1.png", alt: "Müşteri 1" },
    { id: 3, imgSrc: "/assets/img/trusted-client_3.png", alt: "Müşteri 3" },
    { id: 2, imgSrc: "/assets/img/trusted-client_2.png", alt: "Müşteri 2" },
    { id: 4, imgSrc: "/assets/img/trusted-client_4.png", alt: "Müşteri 4" },
    { id: 5, imgSrc: "/assets/img/trusted-client_5.png", alt: "Müşteri 5" },
    { id: 6, imgSrc: "/assets/img/trusted-client_6.png", alt: "Müşteri 6" },
    { id: 7, imgSrc: "/assets/img/trusted-client_7.png", alt: "Müşteri 7" },
  ],
};

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
});

export default clientSlice.reducer;
