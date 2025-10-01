import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer_main_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-4 col-sm-12">
              <div className="footer_single_col">
                <div className="footer_content_col">
                  <img
                    src="../assets/image/logo.png"
                    alt="logo"
                    className="img-fluid"
                  />
                  <p>
                    Discover the Power of Your Zodiac, Unlock the Secrets of the
                    Stars and Planets
                  </p>
                </div>
                <h3>Follow us on</h3>
                <div className="social_icons">
                  <div className="social_icon">
                    <Link to="/">
                      <img
                        src="../assets/image/icon/fb.png"
                        className="img-fluid"
                        alt="FB"
                      />
                    </Link>
                  </div>

                  <div className="social_icon">
                    <Link to="/">
                      <img
                        src="../assets/image/icon/yt.png"
                        className="img-fluid"
                        alt="yt"
                      />
                    </Link>
                  </div>

                  <div className="social_icon">
                    <Link to="/">
                      <img
                        src="../assets/image/icon/insta.png"
                        className="img-fluid"
                        alt="insta"
                      />
                    </Link>
                  </div>

                  <div className="social_icon">
                    <Link to="/">
                      <img
                        src="../assets/image/icon/telegram.png"
                        className="img-fluid"
                        alt="telegram"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-md-4 col-sm-12">
              <div className="footer_single_col">
                <h3>Quick Links</h3>
                <div className="footer_links">
                  <Link to="/chat-with-astrologer">Chat with Astrologer</Link>
                  <Link to="/talk-with-astrologer">Call with Astrologer</Link>
                  <Link to="/astro-details">Astro Details</Link>

                  <Link to="/">Free Kundli</Link>
                  <Link to="/">Daily Panchang</Link>
                  <Link to="/">Kundli Matching</Link>
                  <Link to="/history">History</Link>
                  <Link to="/live-astrologers">Live Astrologers</Link>

                  <Link to="/invited-list">Invited List</Link>
                  <Link to="/booking-appointment">Booking Appointment</Link>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4 col-md-4 col-sm-12">
              <div className="footer_single_col">
                <h3>Useful Links</h3>
                <div className="footer_links">
                  <Link to="/">About</Link>
                  <Link to="/">Contact</Link>
                  <Link to="/">Career</Link>
                  <Link to="/">Astroyogi Academy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
