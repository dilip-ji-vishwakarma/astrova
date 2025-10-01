import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import StarRatings from "react-star-ratings";

const RatingsSection = () => {
  const ratingsData = {
    averageRating: 4.5,
    totalOrders: 8,
    starCounts: {
      5: 6,
      4: 2,
      3: 0,
      2: 0,
      1: 0,
    },
  };

  const maxCount = Math.max(...Object.values(ratingsData.starCounts));

  return (
    <div className="row">
    <div className="astro_rating_main mt-4 col-md-6">
      <div className="astro_about_section_main position-relative">
        <div className="d-flex w-100">
          <h3>Ratings & Reviews</h3>
        <div className="float-end title-ico">
          <MdArrowForwardIos className="icon" />
        </div>
        </div>
        <div
        className="astro_rating_main_inner"
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          // padding: "20px",
        }}
      >
        <div style={{ textAlign: "center" }} className="rating_div">
          <h1>{ratingsData.averageRating}</h1>
          <StarRatings
            rating={ratingsData.averageRating}
            starRatedColor="#f69a0e"
            numberOfStars={5}
            starDimension="22px"
            starSpacing="2px"
          />
          <p style={{ marginTop: "6px", fontSize: "14px", color: "#666" }}>
            {ratingsData.totalOrders} Orders
          </p>
        </div>

        <div style={{ flexGrow: 1 }}>
          {[5, 4, 3, 2, 1].map((star) => (
            <div
              key={star}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "6px",
                gap: "8px",
              }}
            >
              <span style={{ width: "20px" }}>{star}</span>
              <div
                style={{
                  background: "#e0e0e0",
                  borderRadius: "10px",
                  height: "8px",
                  flex: 1,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${
                      (ratingsData.starCounts[star] / maxCount) * 100
                    }%`,
                    backgroundColor: "#e85c13",
                    height: "100%",
                    transition: "width 0.3s",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>
      
    </div>
    <div className="col-md-6">
      <div className="astro_action_buttons row mt-4">
        <div className="col-md-12 px-md-4"><a className="astro_details_action_btn" href="/send-gift" data-discover="true"><span className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8z"></path></svg></span>Chat with Assistant</a></div>
        <div className="col-md-12 px-md-4"><a className="astro_details_action_btn" href="/astro-details" data-discover="true"><span className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg></span>Availability</a></div>
        <div className="col-md-12 px-md-4"><a className="astro_details_action_btn" href="/astro-details" data-discover="true"><span className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path></svg></span>Send Gift to Mahesh</a></div></div>
    </div>
    </div>
  );
};

export default RatingsSection;
