/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CommonButton from "./commonComp/CommonButton";
import LoginPopup from "./commonComp/LoginPopup";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClick = () => {
    if (!isLoggedIn) setShowLoginPopup(true);
  };

  return (
    <>
      <div className={`navbar_main_div ${isScrolled ? "scrolledHeader" : ""}`}>
        <nav className="navbar navbar-expand-lg p-0 bg-white">
          <div className="container head-bg">
            <NavLink className="navbar-brand" to="/">
              <img
                src="/assets/image/logo.png"
                alt="logo"
                className="img-fluid"
              />
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/free-kundali"
                    activeClassName="active"
                  >
                    Free Kundli
                  </NavLink>
                </li>

                {/* Dropdown: Daily Panchang */}
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/daily-panchang"
                    id="dailyPanchangDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Daily Panchang
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dailyPanchangDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/daily-panchang/sunrise-sunset"
                      >
                        Sunrise & Sunset
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/daily-panchang/rahukal"
                      >
                        Rahu Kaal Timings
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* Dropdown: Horoscope */}
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/horoscope"
                    id="horoscopeDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Horoscope
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="horoscopeDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/horoscope/daily">
                        Daily Horoscope
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/horoscope/weekly">
                        Weekly Horoscope
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/horoscope/monthly"
                      >
                        Monthly Horoscope
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/horoscope/yearly">
                        Yearly Horoscope
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/kundli-matching"
                    activeClassName="active"
                  >
                    Kundli Matching
                  </NavLink>
                </li>

                
              </ul>
            </div>
            <a className="">
                  {isLoggedIn ? (
                    <div className="user_dropdown">Welcome, User ▼</div>
                  ) : (
                    <CommonButton
                      text="Login"
                      className="ms-2 login_btn rounded-5 "
                      onClick={handleLoginClick}
                    />
                  )}
                </a>
          </div>
        </nav>
      </div>

      {showLoginPopup && (
        <LoginPopup onClose={() => setShowLoginPopup(false)} />
      )}
    </>
  );
};

export default Header;
