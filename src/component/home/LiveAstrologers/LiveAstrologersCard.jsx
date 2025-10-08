import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getImageUrl } from "../../../utils/getImageUrl";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const LiveAstrologersCard = ({ data }) => {
  const liveAstrologers = data.filter((astro) => astro.isLive);
  if (liveAstrologers.length === 0) {
    return (
      <div className="text-center py-4">
        <h4>No astrologers are live right now.</h4>
      </div>
    );
  }

  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      pauseOnHover={false}
      keyBoardControl
      swipeable
      draggable
      arrows={false}
    >
      {liveAstrologers.map((astro) => (
        <div className="live_Astro_card_main_outer" key={astro.id}>
          <div className="live_Astro_card_main">
            <div className="live_Astro_card_bg">
              <div className="astro_live_batch">
                <p></p> Live
              </div>
              <img
                src={getImageUrl(astro.avatarUrl)}
                alt={astro.firstName}
                className="img-fluid"
              />
              <h3>
                {astro.firstName} {astro.lastName}
              </h3>
            </div>
            <div className="astro_Watch_Now_div">
              <Link to={`/astrologer/${astro.id}`}>View More</Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default LiveAstrologersCard;
