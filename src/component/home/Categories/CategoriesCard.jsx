import { Link } from "react-router-dom";
import { getImageUrl } from "../../../utils/getImageUrl";

const CategoriesCard = ({ categories }) => {
  return (
    <div className="row">
      <div className="container">
        <div className="row">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <div key={index} className="col-6 col-lg-3 col-md-4 col-sm-6 mb-4">
                <Link to={`/all-astrologer?category=${encodeURIComponent(category.name)}`} className="categories_card_main">
                  <div className="icon_circle">
                    <div className="icon-wrapper">
                      <img src={getImageUrl(category.icon)} alt={category.name} />
                    </div>
                  </div>
                  <h5 className="mb-0">{category.name}</h5>
                </Link>
              </div>
            ))
          ) : (
            <p>No categories found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
