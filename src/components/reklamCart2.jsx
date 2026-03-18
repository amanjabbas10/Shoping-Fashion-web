import img002 from "../assets/images-all-bran-logo-reklam.2/reklam-1.png";
import img004 from "../assets/images-all-bran-logo-reklam.2/reklam-3.png";
import img005 from "../assets/images-all-bran-logo-reklam.2/reklam-4.png";
import img006 from "../assets/images-all-bran-logo-reklam.2/reklam-5.png";
import img007 from "../assets/images-all-bran-logo-reklam.2/reklam-6.png";
import img008 from "../assets/images-all-bran-logo-reklam.2/reklam-7.png";
import img009 from "../assets/images-all-bran-logo-reklam.2/reklam-8.png";
import img0010 from "../assets/images-all-bran-logo-reklam.2/reklam-9.png";
import img0011 from "../assets/images-all-bran-logo-reklam.2/reklam-10.png";
import img0012 from "../assets/images-all-bran-logo-reklam.2/reklam-11.png";

const ReklamCart2 = () => {
  return (
    <div>
      <div className="reklam">
        {/* reklam div */}
        <div className="groupe-brand">
          {/* groupe brand mean all brand here */}
          <div className="logo-all-brand">
            <img
              style={{ maxWidth: "160px", marginTop: "12px" }}
              src={img002}
            />
          </div>
          <div className="logo-all-brand">
            <img
              style={{ maxWidth: "210px", marginTop: "20px" }}
              src={img008}
            />
          </div>
          <div className="logo-all-brand">
            <img
              style={{ maxWidth: "140px", marginTop: "19px" }}
              src={img004}
            />
          </div>
          <div className="logo-all-brand">
            <img
              style={{ maxWidth: "180px", marginTop: "19px" }}
              src={img006}
            />
          </div>
          <div className="logo-all-brand">
            <img style={{ maxWidth: "135px" }} src={img005} />
          </div>
        </div>
        {/* this is part two */}
        <div aria-hidden className="groupe-brand">
          <div className="logo-all-brand">
            <img
              style={{ maxWidth: "210px", marginTop: "20px" }}
              src={img007}
            />
          </div>
          <div className="logo-all-brand">
            <img
              style={{ maxWidth: "120px", marginTop: "12px" }}
              src={img0010}
            />
          </div>
          <div className="logo-all-brand">
            <img
              style={{ maxWidth: "240px", marginTop: "35px" }}
              src={img009}
            />
          </div>
          <div className="logo-all-brand">
            <img
              style={{ maxWidth: "190px", marginTop: "2.6rem" }}
              src={img0011}
            />
          </div>
          <div className="logo-all-brand">
            <img style={{ maxWidth: "140px" }} src={img0012} />
          </div>
          {/* <div className="logo-all-brand">
            <img src={img0013} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ReklamCart2;
