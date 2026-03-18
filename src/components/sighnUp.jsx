import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="home-login">
        <br />
        <Link className="back" to="/login">
          <i className="fa-regular fa-circle-left">گەرانەوە </i>
        </Link>

        <form
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <h1>دروستکردنی ئەکاونت</h1>
          <hr />
          <label className="sghn-lable-9" dir="rtl">
            ناوی سێانی
          </label>
          <br />
          <input dir="rtl" type="email" placeholder=" ناوی سێانی" required />
          <i
            style={{ color: "#1E293B" }}
            className="fa-regular fa-circle-user"
          ></i>
          <br />
          <label dir="rtl"> هەژماری ئەلیکترۆن</label>
          <br />
          <input
            dir="rtl"
            type="email"
            placeholder="هەژماری ئەلیکترۆنی"
            required
          />
          <i
            style={{ color: "#1E293B" }}
            className="fa-regular  fa-envelope"
          ></i>
          <br />
          <label dir="rtl" className="pass-lable-9">
            وشەی نهێنی
          </label>
          <br />
          <input dir="rtl" type="password" placeholder=" وشەی نهێنی" required />
          <i style={{ color: "#1E293B" }} className="fa-solid fa-lock"></i>
          <br />
          <br />
          <Link className="btn-f" to="/login">
            چوونەژوورەوە
          </Link>
          <br />
          <h5>داخل بە بەڕێگای ئەمانە</h5>
          <div className="all-icon">
            <div className="icon-0">
              <i className="fa-brands fa-google">Google</i>
            </div>
            <div className="icon-9">
              <i className="fa-brands fa-facebook">Facebook</i>
            </div>
            <div className="icon-8">
              <i className="fa-brands fa-apple">Apple</i>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
