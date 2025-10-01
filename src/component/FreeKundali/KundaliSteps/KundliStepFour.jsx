import { FaCalendar } from "react-icons/fa";
import TextInputField from "../../commonComp/TextInputField";
import CommonButton from "../../commonComp/CommonButton";

const KundliStepFour = ({ onNext }) => {
  return (
    <div>
      <TextInputField
        label="Enter your Birth Time?"
        placeholder="Enter your Birth Time"
        type="time"
        icon={<FaCalendar />}
      />
      <div className="kundali_form_next_btn">
        <CommonButton text="Next" onClick={onNext} />
      </div>
    </div>
  );
};
export default KundliStepFour;
