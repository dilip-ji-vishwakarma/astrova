const ReferralCard = () => {
  const referralData = [
    {
      id: 1,
      name: "Mahesh",
      date: "23 Oct 2024",
      amount: 100,
      image: "/assets/image/astro.png",
    },
    {
      id: 2,
      name: "Mahesh",
      date: "23 Oct 2024",
      amount: 100,
      image: "/assets/image/astro.png",
    },
    {
      id: 3,
      name: "Mahesh",
      date: "23 Oct 2024",
      amount: 100,
      image: "/assets/image/astro.png",
    },
  ];
  return (
    <>
      <div className="All_Referrals_wrapper">
        <h2>All Referrals</h2><div className="row">
        {referralData.map((item) => (
          <div className="col-md-4">
          <div key={item.id} className="All_Referrals_card">
            <div className="All_Referrals_card_inner">
              <img src={item.image} alt="avatar" className="img-fluid" />
              <div>
                <h6>{item.name}</h6>
                <p>{item.date}</p>
              </div>
            </div>
            <div
              className="All_Referrals_card_amount_box"
              //   style={{
              //     backgroundColor: "#fff",
              //     padding: "5px 10px",
              //     borderRadius: "20px",
              //     fontWeight: "bold",
              //     fontSize: "14px",
              //   }}
            >
              ₹ {item.amount}
            </div>
          </div></div>
        ))}
      </div>
          </div>
    </>
  );
};

export default ReferralCard;
