import { FaShare } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { IoMdShare } from "react-icons/io";

const UpcomingLiveList = () => {
  const upcomingList = [
    {
      name: "Mahesh",
      image: "/assets/image/astro.png",
      date: "11 Dec, Wednesday",
      time: null,
    },
    {
      name: "Mahesh",
      image: "/assets/image/astro.png",
      date: "11 Dec, Wednesday",
      time: "05:43 am - 02:24 pm",
    },
    {
      name: "Mahesh",
      image: "/assets/image/astro.png",
      date: "11 Dec, Wednesday",
      time: "05:43 am - 02:24 pm",
    },
    {
      name: "Mahesh",
      image: "/assets/image/astro.png",
      date: "11 Dec, Wednesday",
      time: "05:43 am - 02:24 pm",
    },
    {
      name: "Mahesh",
      image: "/assets/image/astro.png",
      date: "11 Dec, Wednesday",
      time: "05:43 am - 02:24 pm",
    },
    {
      name: "Mahesh",
      image: "/assets/image/astro.png",
      date: "11 Dec, Wednesday",
      time: "05:43 am - 02:24 pm",
    },
  ];

  const handleShare = async () => {
    const shareData = {
      title: "Live Session with Mahesh",
      text: "Join Mahesh live on 11 Dec, Wednesday!",
      url: window.location.href, // Or any link you want to share
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Shared successfully!");
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("Sharing not supported on this device.");
    }
  };
  return (
    <div className="upcoming_list_wrapper">
      <div className="row g-lg-5">
        {upcomingList.map((item, index) => (
          <div className=" col-lg-6 col-md-6 col-sm-12">
            <div className="upcoming-live-card" key={index}>
              <span className="ribbon">CERTIFIED</span>
              <img
                src="/assets/image/astro.png"
                alt="profile"
                className="profile-img"
              />

              <div className="live-info">
                <h3>
                  Mahesh
                  <img
                    src="/assets/image/icon/check.png"
                    alt="verified"
                    className="verified-icon"
                  />
                </h3>
                <div className="date">11 Dec, Wednesday</div>
                <div className="no-time">No time set yet!</div>
              </div>

              <div className="share-icon" onClick={handleShare}>
                <IoMdShare />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingLiveList;
