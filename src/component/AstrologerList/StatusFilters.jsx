const StatusFilters = ({ selected, onSelect }) => (
  <div className="astro_status_tabs">
    <div className="astro_filter_cat_main">
      {["all", "online", "offline"].map((status) => (
        <button
          key={status}
          onClick={() => onSelect(status)}
          // className={` ${selected === status ? "" : ""}`}
          className={`filter_tab_btn ${selected === status ? "selected" : ""}`}
        >
          {status === "all"
            ? "View All"
            : `${status.charAt(0).toUpperCase() + status.slice(1)} (01)`}
        </button>
      ))}
    </div>
  </div>
);

export default StatusFilters;
