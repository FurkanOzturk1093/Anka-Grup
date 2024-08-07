"use client";
import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slices/blogSlice";
import testimonialSlice from "./slices/testimonialSlice";
import servicesSlice from "./slices/servicesSlice";
import serviceCardsSlice from "./slices/serviceCardsSlice";
import teamSlice from "./slices/teamSlice";
import thrustedClientSlice from "./slices/thrustedClientSlice";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {
    blog: blogReducer,
    testimonials: testimonialSlice,
    services: servicesSlice,
    serviceCards: serviceCardsSlice,
    team: teamSlice,
    clients: thrustedClientSlice,
  },
});

export function ProviderWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
