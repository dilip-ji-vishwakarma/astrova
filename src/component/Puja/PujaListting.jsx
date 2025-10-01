import React from "react";
import SectionHeader from "../commonComp/SectionHeader";
import PoojaBookingCard from "../home/PoojaBooking/PoojaBookingCard";

const poojaData = [
  {
    id: 1,
    title: "Angarak Yog Shanti Puja",
    rate: "₹21000",
    image: "/assets/image/puja1.png",
  },
  {
    id: 2,
    title: "Mangal Dosh Nivaran Puja",
    rate: "₹15000",
    image: "/assets/image/puja1.png",
  },
  {
    id: 3,
    title: "Kaal Sarp Dosh Puja",
    rate: "₹18000",
    image: "/assets/image/puja1.png",
  },
  {
    id: 4,
    title: "Navgrah Shanti Anusthan",
    rate: "₹25000",
    image: "/assets/image/puja1.png",
  },
  {
    id: 5,
    title: "Pitra Dosh Nivaran Puja",
    rate: "₹19000",
    image: "/assets/image/puja1.png",
  },
  {
    id: 6,
    title: "Rudrabhishek Puja",
    rate: "₹12000",
    image: "/assets/image/puja1.png",
  },
  {
    id: 7,
    title: "Mahamrityunjay Jaap",
    rate: "₹31000",
    image: "/assets/image/puja1.png",
  },
  {
    id: 8,
    title: "Lakshmi Kubera Puja",
    rate: "₹27000",
    image: "/assets/image/puja1.png",
  },
  {
    id: 9,
    title: "Durga Saptashati Path",
    rate: "₹22000",
    image: "/assets/image/puja1.png",
  },
  {
    id: 10,
    title: "Satyanarayan Katha",
    rate: "₹10000",
    image: "/assets/image/puja1.png",
  },
  {
    id: 11,
    title: "Sundarkand Path",
    rate: "₹9000",
    image: "/assets/image/puja1.png",
  },
  {
    id: 12,
    title: "Ganesh Atharvashirsha Path",
    rate: "₹8000",
    image: "/assets/image/puja1.png",
  },
];

const PujaListting = () => {
  return (
    <div className="puja_main_div">
      <SectionHeader title="Our Most Booked Pujas" />
      <div className="row">
        {poojaData.map((item) => (
          <div className="col-6 col-lg-3 col-md-4 col-sm-12">
            <PoojaBookingCard
              key={item.id}
              title={item.title}
              rate={item.rate}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PujaListting;
