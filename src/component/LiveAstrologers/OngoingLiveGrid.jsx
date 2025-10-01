const OngoingLiveGrid = () => {
  const ongoingList = [
    { name: "Mahesh", image: "/assets/image/live-astro.png" },
    { name: "Manoj Mehta", image: "/assets/image/live-astro.png" },
    { name: "Vishnu", image: "/assets/image/live-astro.png" },
    { name: "Dilkhush", image: "/assets/image/live-astro.png" },
  ];

  return (
    <div className="ongoing_live_grid">
      <div className="row">
        {ongoingList.map((item, index) => (
          <div className="col-6 col-lg-3 col-md-6 col-sm-12">
            <div className="ongoing_card" key={index}>
              <div className="ongoing_img_wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="ongoing_img img-fluid"
                />
                <button className="live_btn">LIVE</button>
              </div>
              <p className="ongoing_name">
                {item.name}
                <img
                  src="/assets/image/icon/check.png"
                  alt="verified"
                  className="verified_icon"
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingLiveGrid;
