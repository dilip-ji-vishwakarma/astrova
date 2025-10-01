// FilterTabs.jsx
import React from "react";
import {
  FaUserAstronaut,
  FaHeart,
  FaStar,
  FaBorderAll,
  FaRegHeart,
} from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

// Fake categories with icons
export const fakeCategories = [
  {
    id: 1,
    name: "All",
    icon: <FaBorderAll />,
  },
  {
    id: 2,
    name: "Love and Relationship",
    icon: <FaRegHeart />,
  },
  {
    id: 3,
    name: "Education",
    icon: <FaUserAstronaut />,
  },
  {
    id: 3,
    name: "Health",
    icon: <MdOutlineHealthAndSafety />,
  },
];
const FilterTabs = ({ selected, onSelect }) => (
  <div className="row mb-md-4 mt-md-3">
    <div className="col-md-7">
      <div className="astro_filter_cat_main">
        {fakeCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.name)} // Pass only name
            className={`filter_tab_btn ${selected === cat.name ? "selected" : ""}`}
          >
            <span className="category_icon">{cat.icon}</span>
            <span className="category_name">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
    <div className="col-md-5">
      <div class="astro_filter_cat_main offcat"><button class="filter_tab_btn selected">View All</button><button class="filter_tab_btn ">Online (01)</button><button class="filter_tab_btn ">Offline (01)</button></div>
    </div>
  </div>
);
export default FilterTabs;
