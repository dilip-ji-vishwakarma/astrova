// components/BlogCard.jsx
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LinkCommon from "../../commonComp/LinkCommon";
import { getImageUrl } from "../../../utils/getImageUrl";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    // partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};
const BlogCard = ({blog = []}) => {
  return (
    <>
      <p className="section-subtitle">
        Explore the Universe One Article at a Time
      </p>
      <Carousel responsive={responsive} infinite autoPlay={true}>
        {blog.map((item) => (
          <div className="blog-card">
            <img src={getImageUrl(item.previewImage)} alt={item.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{item.title}</h3>
              <p className="blog-desc">{item.summary}</p>
              {/* <button className="">Read More</button> */}
              <LinkCommon
                text="Read More"
                className="read-btn me-2"
                to={`/blog-detail/${item.id}`}
              /><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="icons" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default BlogCard;
