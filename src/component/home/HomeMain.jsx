import React from "react";
import Hero from "./Hero";
import SliderSection from "./SliderSection";
import AstrologersMain from "../Astrologers/AstrologersMain";
import LiveAstrologersMain from "./LiveAstrologers/LiveAstrologersMain";
import CelebrityReviewMain from "./CelebrityReview/CelebrityReviewMain";
import CustomerStoriesMain from "./CustomerStories/CustomerStoriesMain";
import NewsMain from "./News/NewsMain";
import BlogMain from "./Blog/BlogMain";
import CategoriesMain from "./Categories/CategoriesMain";
import FeedbackMain from "./Feedback/FeedbackMain";
import PoojaBookingMain from "./PoojaBooking/PoojaBookingMain";
import WhatAstrova from "./WhatAstrova/WhatAstrova";
import WhyAstrova from "./WhyAstrova/WhyAstrova";

const HomeMain = () => {
  return (
    <>
      <Hero />
      <SliderSection />
      <LiveAstrologersMain />
      <AstrologersMain />
      <CategoriesMain />
      <PoojaBookingMain />
      <CelebrityReviewMain />
      <CustomerStoriesMain />
      <NewsMain />
      <BlogMain />
      <WhatAstrova />
      <WhyAstrova />
      <FeedbackMain />
    </>
  );
};

export default HomeMain;
