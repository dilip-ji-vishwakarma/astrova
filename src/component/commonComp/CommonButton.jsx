import React from "react";

const CommonButton = ({
  text,
  iconLeft: IconLeft,
  iconRight: IconRight,
  className = "",
  onClick,
}) => {
  return (
    <button className={`round_Shap_btn ${className}`} onClick={onClick}>
      {IconLeft && <IconLeft style={{ marginRight: "6px" }} />}
      {text}
      {IconRight && <IconRight style={{ marginLeft: "6px" }} />}
    </button>
  );
};

export default CommonButton;
