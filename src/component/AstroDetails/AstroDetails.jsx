// import React, { useEffect } from "react";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import AstroDetailCard from "./AstroDetailCard";
import AboutSection from "./AboutSection";
import RatingsSection from "./RatingsSection";
import SimilarAstro from "./SimilarAstro";
import ActionSection from "./ActionSection";
// import { apiService } from "../../services/apiService";

const AstroDetails = () => {
  //   useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await apiService("/dashboard", "get"); // GET /users
  //     console.log(response, "response")
  //   };

  //   fetchUsers();
  // }, []);
  return (
    <>
      <HeaderBreadcrumb />
      <div className="container">
        <AstroDetailCard />
        <AboutSection />
        <RatingsSection />
        <SimilarAstro />
        <ActionSection />
      </div>
    </>
  );
};

export default AstroDetails;
