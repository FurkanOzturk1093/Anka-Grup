// src/redux/teamSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: [
    {
      id: 1,
      name: "Michael Jack",
      position: "Kurucu CEO",
      imgSrc: "/assets/img/team_1.jpg",
      social: {
        linkedin: "https://www.linkedin.com/",
        facebook: "https://www.facebook.com/",
        twitter: "https://www.twitter.com/",
      },
    },
    {
      id: 2,
      name: "Cathy Sparkman",
      position: "Baş Mekanik",
      imgSrc: "/assets/img/team_2.jpg",
      social: {
        linkedin: "https://www.linkedin.com/",
        facebook: "https://www.facebook.com/",
        twitter: "https://www.twitter.com/",
      },
    },
    {
      id: 3,
      name: "Tyra Crawford",
      position: "Mekanik",
      imgSrc: "/assets/img/team_3.jpg",
      social: {
        linkedin: "https://www.linkedin.com/",
        facebook: "https://www.facebook.com/",
        twitter: "https://www.twitter.com/",
      },
    },
  ],
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
});

export default teamSlice.reducer;
