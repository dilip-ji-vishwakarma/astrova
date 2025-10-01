import React from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderBreadcrumb = () => {
  const location = useLocation();

  // Get last segment of the path
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];

  // Capitalize first letter
  const formattedSegment =
    lastSegment.charAt(0).toUpperCase() +
    lastSegment.slice(1).replace(/-/g, " ");

  return (
    <div className="HeaderBreadcrumb_main">
      <div className="container">
        <div className="breadcrumb_inner">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/${lastSegment}`}>{formattedSegment}</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderBreadcrumb;
