import img6 from "../assets/logo-local-brand/bay-deniz.png";
import img3 from "../assets/logo-local-brand/san-vito.png";
import img4 from "../assets/logo-local-brand/SORANCLASS.png";
import img5 from "../assets/logo-local-brand/TAHIRCLASS.png";
import img2 from "../assets/logo-local-brand/BUSINESSCLASS.png";
import img7 from "../assets/logo-local-brand/SHVAN CENTER.png";
import img8 from "../assets/logo-local-brand/HR.png";
import img9 from "../assets/logo-local-brand/DE.png";
import img10 from "../assets/logo-local-brand/K FASHION.jpeg";
import img11 from "../assets/logo-local-brand/taheery.jpg";
import img12 from "../assets/logo-local-brand/GALAR.png";
import img13 from "../assets/logo-local-brand/rwaz.png";
import { Link } from "react-router-dom";
const CartOne = () => {
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
          <img style={{ marginTop: "1rem" }} src={img2} />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>BUSINESS CLASS</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <Link className="btn-card" to="/bussnisHome">
              زیاتر ببینە
            </Link>
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
            style={{ maxWidth: "180px", marginLeft: "20px", marginTop: "5px" }}
            src={img3}
          />
          <br />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>SAN VITO</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <Link className="btn-card" to="/sanvitoHome">
              زیاتر ببینە
            </Link>
          </div>
        </div>
        {/* -----------card-one-------- */}
        {/* -----------card-two-------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1200"
          className="card"
        >
          <img style={{ marginTop: "0.6rem" }} src={img4} />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.3rem" }}>SORAN CLASS</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <Link className="btn-card" to="/soranHome">
              زیاتر ببینە
            </Link>
          </div>
        </div>
        {/* -----------card-one-------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1400"
          className="card"
        >
          <img style={{ marginTop: "13px" }} src={img5} />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.1rem" }}>TAHIR CLASS</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <Link className="btn-card" to="/tahirHome">
              زیاتر ببینە
            </Link>
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
          data-aos-duration="1600"
          className="card"
        >
          <img style={{ marginTop: "1rem" }} src={img7} />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>SHVAN CENTER</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <Link className="btn-card" to="/shvanHome">
              زیاتر ببینە
            </Link>
          </div>
        </div>
        {/* ------------------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1800"
          className="card"
        >
          <img style={{ maxWidth: "155px", marginLeft: "2.4rem" }} src={img8} />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>HR SHOPING</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <Link className="btn-card" to="/hrHome">
              زیاتر ببینە
            </Link>
          </div>
        </div>
        {/* ------------------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          className="card"
        >
          <img style={{ marginTop: "2px" }} src={img9} />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>DELMAN BRAND</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <Link className="btn-card" to="/delmanHome">
              زیاتر ببینە
            </Link>
          </div>
        </div>
        {/* ------------------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2200"
          className="card"
        >
          <img style={{ marginTop: "3px" }} src={img10} />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>K FASHION</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <Link className="btn-card" to="/kHome">
              زیاتر ببینە
            </Link>
          </div>
        </div>
        {/* ------------------- */}
      </div>
      <br />
      <br />
      <br />
      <div className="all-card">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2400"
          className="card"
        >
          <img style={{ maxWidth: "185px", marginLeft: "1.4rem" }} src={img6} />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>BAY DENIZ</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <Link className="btn-card" to="/bayHome">
              زیاتر ببینە
            </Link>
          </div>
        </div>
        {/* ------------------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2600"
          className="card"
        >
          <img
            style={{ marginTop: "1rem", maxWidth: "220px", marginLeft: "4px" }}
            src={img11}
          />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>TAHERRY</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <Link className="btn-card" to="/taherryHome">
              زیاتر ببینە
            </Link>
          </div>
        </div>
        {/* ------------------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2800"
          className="card"
        >
          <img style={{ maxWidth: "200px", marginLeft: "13px" }} src={img12} />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>GALAR VIP</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <Link className="btn-card" to="/galarHome">
              زیاتر ببینە
            </Link>
          </div>
        </div>
        {/* ------------------- */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="3000"
          className="card"
        >
          <img
            style={{ maxWidth: "158px", marginLeft: "2.4rem" }}
            src={img13}
          />
          <hr />
          <div className="card-body">
            <h5 style={{ marginTop: "1.5rem" }}>RAWZ MENSUR</h5>
            <p>talk about brand Lorem ipsum dolor sit amet consectetur</p>
            <Link className="btn-card" to="/rawzHome">
              زیاتر ببینە
            </Link>
          </div>
        </div>
        {/* ------------------- */}
      </div>
      {/* chapter three in card  end*/}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default CartOne;
