const TextInputField = ({ label, placeholder, icon, type = "text" }) => {
  return (
    <div className="form-group input_box">
      <label>{label}</label>
      <div className="input-wrapper">
        {icon && <span className="icon">{icon}</span>}
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default TextInputField;
