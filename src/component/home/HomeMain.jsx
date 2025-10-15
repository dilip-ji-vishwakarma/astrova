import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../../redux/slices/dashboardSlice";

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
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.dashboard);

  useEffect(() => {
    if (!data || Object.keys(data).length === 0) {
      dispatch(fetchDashboardData());
    }
  }, [dispatch, data]);

  if (loading && (!data || Object.keys(data).length === 0)) {
    return (
      <div className="loader set-height">
        <div className="box box-1">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="box box-2">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="box box-3">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="box box-4">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">
          {error || "No dashboard data available."}
        </p>
      </div>
    );
  }

  return (
    <>
      <Hero data={data?.hero} />
      <div className="hidden">
        <SliderSection data={data?.slider} />
      </div>
      <div className="mt-5">
        <LiveAstrologersMain data={data?.liveAstrologers} />
      </div>
      <AstrologersMain data={data?.chatAstrologers} />
      <CategoriesMain data={data?.categories} />
      <div className="hidden">
        <PoojaBookingMain data={data?.poojas} />
      </div>
      <CelebrityReviewMain data={data?.celebrities} />
      <CustomerStoriesMain data={data?.customerStories} />
      <NewsMain data={data?.inNews} />
      <BlogMain data={data?.blogs} />
      <WhatAstrova />
      <WhyAstrova />
      <div className="hidden">
        <FeedbackMain data={data?.feedback} />
      </div>
    </>
  );
};

export default HomeMain;
