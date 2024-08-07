import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonials: [
    {
      id: 1,
      name: "Roberts Bush",
      from: "Kanada'dan",
      feedback:
        "Hizmetten çok memnun kaldım. Gerçekten profesyonel ve etkili bir ekip.",
      image: "/assets/img/testimaonial.png",
    },
    {
      id: 2,
      name: "Jane Doe",
      from: "ABD'den",
      feedback:
        "Bu hizmetten çok memnun kaldım. Her şey beklentilerimin üzerindeydi.",
      image: "/assets/img/testmaonail_1.png",
    },
  ],
};

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    // Define reducers if needed for updating testimonials
  },
});

export default testimonialSlice.reducer;
