import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../public/css/main.css";
import "../public/css/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

import Header from "./component/Header";
import HomeMain from "./component/home/HomeMain";
import Footer from "./component/Footer";
import AstroDetails from "./component/AstroDetails/AstroDetails";
import SendGift from "./component/AstroDetails/SendGift";

import AstrologerListPage from "./component/AstrologerList/AstrologerListPage";
import LiveTabsComponent from "./component/LiveAstrologers/LiveTabsComponent";
import HistroryMain from "./component/History/HistroryMain";
import ReferralsMain from "./component/Referrals/ReferralsMain";
import BookingAppointment from "./component/BookingAppointment/BookingAppointment";
import HistoryProductDetails from "./component/History/HistoryProductDetails";
import KumdaliFormMain from "./features/kundali/KumdaliFormMain";
import KundaliMatchingMain from "./features/kundali/kundaliMatchingMain";
import PujaMain from "./features/Puja/PujaMain";
import PujaBookDetails from "./component/Puja/PujaBookDetails";
import Checkout from "./component/Puja/checkout/Checkout";
import BlogDetails from "./component/home/Blog/BlogDetails";
import AstrologerList from "./component/Astrologers/AstrologerList";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/astro-details" element={<AstroDetails />} />
        <Route path="/send-gift" element={<SendGift />} />
        <Route path="/all-astrologer" element={<AstrologerList />} />
        <Route
          path="/chat-with-astrologer"
          element={<AstrologerListPage type="chat" />}
        />
        <Route
          path="/talk-with-astrologer"
          element={<AstrologerListPage type="call" />}
        />
        <Route path="/live-astrologers" element={<LiveTabsComponent />} />
        <Route path="/history" element={<HistroryMain />} />
        <Route path="/product-detail/:id" element={<HistoryProductDetails />} />

        <Route path="/invited-list" element={<ReferralsMain />} />
        <Route path="/booking-appointment" element={<BookingAppointment />} />
        <Route path="/free-kundali" element={<KumdaliFormMain />} />
        <Route path="/kundli-matching" element={<KundaliMatchingMain />} />
        <Route path="/puja" element={<PujaMain />} />
        <Route path="/puja-booking" element={<PujaBookDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog-detail" element={<BlogDetails />} />

        <Route
          path="/daily-panchang"
          element={<div>Daily Panchang Page</div>}
        />

        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
