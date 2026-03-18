const Login = () => {
  return (
    <div>
      <div className="home-login">
        <br />
        <a className="back" href="/">
          <i className="fa-regular fa-circle-left">گەرانەوە </i>
        </a>
        <form
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <h1> چوونەژوورەوە</h1>
          <hr />
          <br />
          <label dir="rtl"> هەژماری ئەلیکترۆن</label>
          <input
            dir="rtl"
            type="email"
            placeholder="هەژماری ئەلیکترۆنی"
            required
          />
          <i style={{ color: "#1E293B" }} className="fa-solid fa-envelope"></i>
          <br />
          <label className="pass-lable-9" dir="rtl">
            وشەی نهێنی
          </label>
          <br />
          <input dir="rtl" type="password" placeholder=" وشەی نهێنی" required />
          <i style={{ color: "#1E293B" }} className="fa-solid fa-lock"></i>
          <a className="home-f" href="/forgetPassword">
            وشەی نهێنیت لەبیر کردووە؟
          </a>
          <br />
          <br />
          <button className="btn-f">
            <a href="/">چوونەژوورەوە</a>
          </button>
          <button className="btn-f-0">
            <a href="/sighnup">دروستکردنی ئەکاونت</a>
          </button>
          <br />
          <h5>.داخل بە بەڕێگای ئەمانە</h5>
          <hr className="hr-hr-0" />
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
        {/* ---------- */}
      </div>
      {/* ----------- */}
    </div>
  );
};
export default Login;
