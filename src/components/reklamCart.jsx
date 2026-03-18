import img002 from "../assets/images-all-bran-logo-reklam/reklam-01.png";
import img003 from "../assets/images-all-bran-logo-reklam/reklam-02.png";
import img004 from "../assets/images-all-bran-logo-reklam/reklam-03.png";
import img005 from "../assets/images-all-bran-logo-reklam/reklam-4.png";
import img006 from "../assets/images-all-bran-logo-reklam/reklam-05.png";
import img007 from "../assets/images-all-bran-logo-reklam/reklam-06.png";
import img008 from "../assets/images-all-bran-logo-reklam/reklam-07.png";
import img009 from "../assets/images-all-bran-logo-reklam/reklam-08.png";
import img0010 from "../assets/images-all-bran-logo-reklam/reklam-09.png";
import img0011 from "../assets/images-all-bran-logo-reklam/reklam-10.png";
import img0012 from "../assets/images-all-bran-logo-reklam/reklam-11.png";
import img0013 from "../assets/images-all-bran-logo-reklam/reklam-12.png";

const reklamCart = () => {
  return (
    <div>
      <div className="reklam">
        {/* reklam div */}
        <div className="groupe-brand">
          {/* groupe brand mean all brand here */}
          <div className="logo-all-brand">
            <img src={img002} />
          </div>
          <div className="logo-all-brand">
            <img src={img003} />
          </div>
          <div className="logo-all-brand">
            <img style={{ maxWidth: "130px" }} src={img004} />
          </div>
          <div className="logo-all-brand">
            <img style={{ maxWidth: "135px" }} src={img005} />
          </div>
          <div className="logo-all-brand">
            <img style={{ maxWidth: "175px", marginTop: "9px" }} src={img006} />
          </div>
          <div className="logo-all-brand">
            <img src={img007} />
          </div>
        </div>
        {/* this is part two */}
        <div aria-hidden className="groupe-brand">
          <div className="logo-all-brand">
            <img style={{ maxWidth: "135px", marginTop: "6px" }} src={img008} />
          </div>
          <div className="logo-all-brand">
            <img style={{ maxWidth: "130px", marginTop: "5px" }} src={img009} />
          </div>
          <div className="logo-all-brand">
            <img
              style={{ maxWidth: "150px", marginTop: "12px" }}
              src={img0010}
            />
          </div>
          <div className="logo-all-brand">
            <img
              style={{ maxWidth: "220px", marginTop: "2.6rem" }}
              src={img0011}
            />
          </div>
          <div className="logo-all-brand">
            <img style={{ maxWidth: "140px" }} src={img0012} />
          </div>
          <div className="logo-all-brand">
            <img src={img0013} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default reklamCart;
