const DropdownSelect = ({ label, options, onChange, icon }) => {
  return (
    <div className="form-group input_box">
      <label>{label}</label>
      <div className="input-wrapper">
        {icon && <span className="icon">{icon}</span>}
        <select onChange={(e) => onChange(e.target.value)}>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownSelect;
