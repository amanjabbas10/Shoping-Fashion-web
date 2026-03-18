import img03 from "../assets/logo-local-brand/san-vito.png";
import img4 from "../assets/logo-local-brand/SORANCLASS.png";
import img2 from "../assets/logo-local-brand/BUSINESSCLASS.png";
import img7 from "../assets/logo-local-brand/SHVAN CENTER.png";
// -------------------------------------------
import img14 from "../assets/logo-world-brand/cuccle.png";
import img3 from "../assets/logo-world-brand/versace.png";
import img1 from "../assets/logo-world-brand/zara.png";
import img9 from "../assets/logo-world-brand/dior.png";

const CartThree = () => {
  return (
    <div>
      <div className="all-card">
        {/* chapter one in card */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          className="card"
        >
          <img src={img4} />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>SORAN CLASS</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <button className="btn-card">
              <a href="/soranHome">زیاتر ببینە</a>
            </button>
          </div>
        </div>
        {/* -----------card-one-------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
          className="card"
        >
          <img
            style={{
              maxWidth: "190px",
              marginTop: "8px",
              marginLeft: "1.5rem",
            }}
            src={img14}
          />
          <br />
          <br />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1rem" }}>GUCCL</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <button className="btn-card">
              <a href="/GUCCLHome">زیاتر ببینە</a>
            </button>
          </div>
        </div>
        {/* -----------card-one-------- */}
        {/* -----------card-two-------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1400"
          className="card"
        >
          <img style={{ marginTop: "0.6rem" }} src={img2} />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.3rem" }}>BUSINESS CLASS</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <button className="btn-card">
              <a href="/bussnisHome">زیاتر ببینە</a>
            </button>
          </div>
        </div>
        {/* -----------card-one-------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1600"
          className="card"
        >
          <img style={{ maxWidth: "230px", marginTop: "19px" }} src={img3} />
          <br />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "2rem" }}>VERSACE</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <button className="btn-card">
              <a href="/tahirHome">زیاتر ببینە</a>
            </button>
          </div>
        </div>
        {/* ------------------- */}
      </div>
      {/* chapter one in card  end*/}
      <br />
      <br />
      <br />
      <div className="all-card">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1800"
          className="card"
        >
          <img style={{ marginTop: "1.7rem", maxWidth: "229px" }} src={img1} />
          <br />
          <br />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>ZARA</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <button className="btn-card">
              <a href="/shvanHome">زیاتر ببینە</a>
            </button>
          </div>
        </div>
        {/* ------------------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          className="card"
        >
          <img
            style={{ maxWidth: "180px", marginLeft: "20px", marginTop: "2px" }}
            src={img03}
          />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>SAN VITO</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <button className="btn-card">
              <a href="/sanvitoHome">زیاتر ببینە</a>
            </button>
          </div>
        </div>
        {/* ------------------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2200"
          className="card"
        >
          <img style={{ maxWidth: "239px", marginTop: "2.6rem" }} src={img9} />
          <br />
          <br />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>DIOR</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <button className="btn-card">
              <a href="/DIORHome">زیاتر ببینە</a>
            </button>
          </div>
        </div>
        {/* ------------------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2400"
          className="card"
        >
          <img style={{ marginTop: "7px" }} src={img7} />
          <br />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "2rem" }}>SHVAN CENTER</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <button className="btn-card">
              <a href="/shvanHome">زیاتر ببینە</a>
            </button>
          </div>
        </div>
        {/* ------------------- */}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default CartThree;
