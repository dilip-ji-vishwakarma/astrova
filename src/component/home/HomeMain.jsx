import React, { useEffect, useState } from "react";
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
import { apiService } from "../../services/apiService";
import { toast } from "sonner";
import { dashboard } from "../../utils/api-endpoints";

const HomeMain = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await apiService(dashboard, "get");

        if (response?.success) {
          setData(response.data);
        } else {
          toast.error(response?.message || "Failed to load dashboard data");
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast.error("Something went wrong while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
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

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">No data available.</p>
      </div>
    );
  }

  return (
    <>
      <Hero data={data?.hero} />
      <SliderSection data={data?.slider} />
      <LiveAstrologersMain data={data?.liveAstrologers} />
      <AstrologersMain data={data?.astrologers} />
      <CategoriesMain data={data?.categories} />
      <PoojaBookingMain data={data?.poojaBookings} />
      <CelebrityReviewMain data={data?.celebrityReviews} />
      <CustomerStoriesMain data={data?.customerStories} />
      <NewsMain data={data?.news} />
      <BlogMain data={data?.blogs} />
      <WhatAstrova />
      <WhyAstrova />
      <FeedbackMain data={data?.feedback} />
    </>
  );
};

export default HomeMain;
