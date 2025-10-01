import { FaCalendar } from "react-icons/fa";
import TextInputField from "../../commonComp/TextInputField";
import CommonButton from "../../commonComp/CommonButton";

const KundliStepThree = ({ onNext }) => {
  return (
    <div>
      <TextInputField
        label="Enter your Birth Date?"
        placeholder="Enter your DOB"
        type="date"
        icon={<FaCalendar />}
      />
      <div className="kundali_form_next_btn">
        <CommonButton text="Next" onClick={onNext} />
      </div>
    </div>
  );
};
export default KundliStepThree;
