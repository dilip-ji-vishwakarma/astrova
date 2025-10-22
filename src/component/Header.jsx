import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPopup from "./commonComp/LoginPopup";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if session exists
  useEffect(() => {
    const token = localStorage.getItem("sessionToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLoginClick = () => {
    if (!isLoggedIn) setShowLoginPopup(true);
  };

  const handleLogout = () => {
    setIsLoggingOut(true); // 🔹 loader start

    setTimeout(() => {
      localStorage.removeItem("sessionToken");
      localStorage.removeItem("userId");
      setIsLoggingOut(false); // 🔹 loader stop
      setIsLoggedIn(false);
      navigate("/");
      window.location.reload()
    }, 2000); // 2 second delay
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
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/free-kundali"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
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
                <li className="nav-item">
                  {isLoggedIn && (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      to="/my-profile"
                    >
                      My Profile
                    </NavLink>
                  )}
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
                  {isLoggedIn && (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      to="/kundli-matching"
                    >
                       Kundli Matching
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>

            <div>
              {isLoggedIn ? (
                <button
                  className="ms-2 login_btn rounded-5 log-out"
                  onClick={handleLogout}
                  disabled={isLoggingOut} 
                >
                  {isLoggingOut ? (
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    "Logout"
                  )}
                </button>
              ) : (
                <button
                  className="ms-2 login_btn rounded-5 log-out"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              )}
            </div>
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
