import React from "react";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import {
  FaUserTie,
  FaClock,
  FaCheckCircle,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import CommonButton from "../commonComp/CommonButton";
import LinkCommon from "../commonComp/LinkCommon";

const PujaBookDetails = () => {
  return (
    <>
      <HeaderBreadcrumb />
      <div className="puja_booking_details_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="puja-image">
                <img
                  src="https://cdn.anytimeastro.com/anytimeastro/puja/prodimg/live/Angarak-Yog-Shanti-Puja_1_result.webp?v=1712736789"
                  alt="Angarak Yog Puja"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="puja_booking_details_content_Side">
                <div className="puja-content">
                  <h2>Angarak Yog Shanti Puja</h2>
                  <div className="puja-rating">
                    <span>4.8</span>
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStarHalfAlt className="star" />
                  </div>

                  <div className="puja-price">₹ 21000</div>
                  <p className="puja-note">
                    An advanced payment will be required to make a booking
                  </p>

                  <div className="puja-action-buttons">
                    <CommonButton text="Add to cart" className="read-more" />
                    <LinkCommon to="/checkout" text="Book Puja" className="" />
                  </div>

                  <ul className="puja-benefits">
                    <li>
                      <FaUserTie /> Experienced Pandits
                    </li>
                    <li>
                      <FaClock /> 20+ Years of Experience
                    </li>
                    <li>
                      <FaCheckCircle /> Effective Solutions
                    </li>
                    <li>
                      <FaCheckCircle /> Performed Thousands of Puja
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="puja-details">
          <div className="container">
            <h3>Details of Puja</h3>
            <p>
              Performing the Angarak Yog Shanti Puja is beneficial because it
              helps alleviate the negative effects of the Angarak yoga formed
              when Mars and Rahu are conjoined in the birth chart. This yoga
              brings negative energy, leading to adverse effects in specific
              areas of life. By performing this puja, one can neutralize these
              negative energies and mitigate their impact, promoting positivity
              and harmony in those areas.
            </p>

            <p>
              <strong>Day(s) Of Puja:</strong> 5 days
            </p>

            <p>
              <strong>Ideal Day(s) For Puja:</strong> Muhurta will be calculated
              and determined by the Astrologers at Anytime Astro as per the
              Janam Kundali (Birth Chart) of the concerned person.
            </p>

            <p>
              <strong>Pooja God or Goddess:</strong> Lord Hanuman, Mangal, Rahu.
            </p>
            <p>
              <strong>Type of Mantra:</strong> Vedic.
            </p>
            <p>
              <strong>Gender:</strong> Both
            </p>

            <p>
              <strong>
                Enhance The Effect Of Puja By Following These Rules (Niyam):
              </strong>{" "}
              Perform self-practice or recitation at least 11 or 21 times daily
              to include your Karma with your Puja. Connect your actions with
              your practice, and continue the practice until completion. In the
              morning, after bathing, light a ghee lamp and humbly request your
              chosen deity to accept the worship being offered to you. Seek
              blessings and, if possible, observe a fast. If unable to observe a
              fast, at least abstain from meat, alcohol, smoking, etc., and
              consume a sattvic diet.
            </p>

            <p>
              <strong>Note:</strong> Dashansh refers to 10% extra Mantra Jaap.
            </p>
            <p>
              <strong>Important:</strong> Anytime Astro will send the Puja
              Images & Videos to your registered email.
            </p>

            <h4>Benefits</h4>
            <ul>
              <li>
                Puja of Lord Hanuman grants strength, courage, and protection
                against malefic influences, helping mitigate the adverse effects
                of Angarak yoga in the birth chart.
              </li>
              <li>
                Worshipping Mars alleviates the malefic effects of Angarak yoga,
                promoting resilience, assertiveness, and balanced energy in
                one's life.
              </li>
              <li>
                Performing Rahu puja helps counteract negative energies
                associated with Angarak yoga, fostering clarity of mind,
                spiritual growth, and protection from malevolent forces.
              </li>
              <li>
                Special rituals for Angarak Yog Shanti are conducted to pacify
                the malefic influence of Mars and Rahu conjunction, restoring
                harmony, peace, and positive energy in the affected areas of
                life.
              </li>
            </ul>

            <h4>Mantra & Strot</h4>
            <p>
              मंगल राहु बीज मंत्र जाप / पंचमुखी हनुमान रक्षा कवच + हनुमान जी
              अभिषेक + चोला
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PujaBookDetails;
