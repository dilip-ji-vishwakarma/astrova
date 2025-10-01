import React from "react";

const SliderSection = () => {
  return (
    <div className="container second_slider_main section_space">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000" // Autoplay interval 3s
      >
        {/* <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> */}

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="slider_img_div">
                  <img
                    className="img-fluid"
                    src="/assets/image/slider1.png"
                    alt="First slide"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="content">
                  <h5>Vikrant Bhairav Special Chadhava</h5>
                  <div>Vikrant Bhairav Special Chadhava is a sacred offering made with devotion to please Shri Vikrant Bhairav.
Prepared with pure ingredients and spiritual intent, it symbolizes faith, protection, and fulfillment of wishes.
Each Chadhava is offered at the temple with prayers for strength, success, and blessings from Vikrant Bhairav.</div>
                  <p className="btn-orange rounded-5 mt-4">Vikrant Bhairav Temple, Ujjain</p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="slider_img_div">
                  <img
                    className="img-fluid"
                    src="/assets/image/slider1.png"
                    alt="Second slide"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="content">
                  <h5>Vikrant Bhairav Special Chadhava</h5>
                  <div>Vikrant Bhairav Special Chadhava is a sacred offering made with devotion to please Shri Vikrant Bhairav.
Prepared with pure ingredients and spiritual intent, it symbolizes faith, protection, and fulfillment of wishes.
Each Chadhava is offered at the temple with prayers for strength, success, and blessings from Vikrant Bhairav.</div>
                  <p className="btn-orange rounded-5 mt-4">Vikrant Bhairav Temple, Ujjain</p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="slider_img_div">
                  <img
                    className="img-fluid"
                    src="/assets/image/slider1.png"
                    alt="Third slide"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="content">
                  <h5>Vikrant Bhairav Special Chadhava</h5>
                  <div>Vikrant Bhairav Special Chadhava is a sacred offering made with devotion to please Shri Vikrant Bhairav.
Prepared with pure ingredients and spiritual intent, it symbolizes faith, protection, and fulfillment of wishes.
Each Chadhava is offered at the temple with prayers for strength, success, and blessings from Vikrant Bhairav.</div>
                  <p className="btn-orange rounded-5 mt-4">Vikrant Bhairav Temple, Ujjain</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
