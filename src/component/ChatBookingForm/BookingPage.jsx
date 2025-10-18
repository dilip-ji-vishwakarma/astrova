import React, { useState } from "react";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import { KundliData } from "./KundliData";
import { ChatBookingForm } from "./ChatBookingForm";


export const BookingPage = () => {
  const [selectedKundli, setSelectedKundli] = useState(null);

  return (
    <>
      <HeaderBreadcrumb />
      <KundliData onSelectKundli={setSelectedKundli} />
      <ChatBookingForm selectedKundli={selectedKundli} />
    </>
  );
};
