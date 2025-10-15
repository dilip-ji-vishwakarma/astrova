
import SectionHeader from "../commonComp/SectionHeader";
import { FaArrowRight } from "react-icons/fa";
import { AstrologerCards } from "./AstrologerCards";

const AstrologersMain = ({data}) => {
    if (!data || data.length === 0) {
    return (
      <div className="container text-center py-5">
        <p>No astrologers available at the moment.</p>
      </div>
    );
  }
  return (
    <>
      <div className="astro_main_Section section_space">
        <div className="container ">
          <SectionHeader
            title="Astrologers"
            linkText="View All"
            linkTo="/all-astrologer?isChatAvailable=true"
            Icon={FaArrowRight}
          />
          <AstrologerCards astrologers={data}/>
        </div>
      </div>
    </>
  );
};

export default AstrologersMain;
