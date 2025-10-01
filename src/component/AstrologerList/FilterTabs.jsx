import { fakeCategories } from "../../constants/categories";
const FilterTabs = ({ selected, onSelect }) => (
  <div className="row mb-md-4 mt-md-3">
    <div className="col-md-7">
      <div className="astro_filter_cat_main">
        {fakeCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.name)}
            className={`filter_tab_btn ${selected === cat.name ? "selected" : ""}`}
          >
            <span className="category_icon">{cat.icon}</span>
            <span className="category_name">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
    <div className="col-md-5">
      <div className="astro_filter_cat_main offcat">
        <button className="filter_tab_btn selected">View All</button>
        <button className="filter_tab_btn">Online (01)</button>
        <button className="filter_tab_btn">Offline (01)</button>
      </div>
    </div>
  </div>
);

export default FilterTabs;
