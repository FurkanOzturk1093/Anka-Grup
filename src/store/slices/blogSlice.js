import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      date: "17.10.2023",
      title: "Düzenli Araç Bakımının Önemi",
      image: "/assets/img/blog_3.jpg",
    },
    {
      id: 2,
      date: "05.11.2023",
      title: "Güvenilirliğe Giden Yol: Temel Araç Bakım İpuçları",
      image: "/assets/img/blog_1.jpg",
    },
    {
      id: 3,
      date: "12.11.2023",
      title: "Garajdan Zafer Yolu: Araç Sağlığınızı Dönüştürün",
      image: "/assets/img/blog_2.jpg",
    },
  ],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
});

export default blogSlice.reducer;
