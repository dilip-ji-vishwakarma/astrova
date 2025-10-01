import { Link } from "react-router-dom";

const SectionHeader = ({ title, linkText, linkTo, Icon, className = "" }) => {
  return (
    <div className={`LiveAstro_Page_Header ${className}`}>
      <h3 className="section_main_heading">{title}</h3>
      {linkTo && (
        <Link to={linkTo} className="view_all_btn">
          {linkText} {Icon && <Icon className="icons" />}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
