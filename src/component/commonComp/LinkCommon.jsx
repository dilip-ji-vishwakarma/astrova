import React from "react";
import { Link } from "react-router-dom";

const LinkCommon = ({
  to,
  text,
  icon: Icon,
  className = "",
  iconPosition = "left",
  onClick,
}) => {
  return (
    <Link to={to} className={`round_Shap_btn  ${className}`} onClick={onClick}>
      {iconPosition === "left" && Icon && (
        <Icon style={{ marginRight: "10px", fontSize: "24px" }} />
      )}
      {text}
      {iconPosition === "right" && Icon && (
        <Icon style={{ marginLeft: "10px", fontSize: "24px" }} />
      )}
    </Link>
  );
};

export default LinkCommon;
