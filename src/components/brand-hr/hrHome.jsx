import img02 from "../../assets/logo-male.png";
import img03 from "../../assets/logo-female.png";
const hrHome = () => {
  return (
    <div className="background-all-home-page">
      <br />
      <a className="back" href="/">
        <i className="fa-regular fa-circle-left">گەرانەوە </i>
      </a>
      <h1 style={{ textAlign: "center", color: "white", marginBottom: "9px" }}>
        کلیک لە بەشی دڵخوازت بکه
      </h1>
      <hr className="hr-hpme-page" />
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
        className="all-card"
      >
        {/* flex car  */}
        <div className="card-brand">
          <a href="/hrWomen">
            <img style={{ marginLeft: "1.7rem" }} src={img03} />
          </a>
          <div className="card-body-brand">
            <h3>بەشی ئافرەتان</h3>
          </div>
        </div>
        <div style={{ marginLeft: "2rem" }} className="card-brand">
          <a href="/hrMen">
            <img style={{ marginLeft: "1.8rem" }} src={img02} />
          </a>
          <div className="card-body-brand">
            <h3>بەشی پیاوان</h3>
          </div>
        </div>
        {/* end flex card */}
      </div>
      {/* ------------------- */}
    </div>
  );
};

export default hrHome;
