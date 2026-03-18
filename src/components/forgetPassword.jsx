const ForgetPassword = () => {
  return (
    <div>
      <div className="home-login">
        <br />
        <a className="back" href="/login">
          <i className="fa-regular fa-circle-left">گەرانەوە </i>
        </a>
        {/* --------------- */}
        <form
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <h1 className="pass-part">وشەی نهێنیم لەبیر کردویە</h1>
          <hr />
          <label className="pass-lable" dir="rtl">
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
            className="fa-regular fa-envelope"
          ></i>
          <br />
          <label dir="rtl" className="pass-lable-0">
            ژمارەی تەڵەفۆن
          </label>
          <br />
          <input
            dir="rtl"
            type="number"
            placeholder="ژمارەی تەڵەفۆن"
            required
          />
          <i style={{ color: "#1E293B" }} className="fa-solid fa-phone"></i>
          <br />
          <label dir="rtl" className="pass-lable-9">
            وشەی نهێنی
          </label>
          <br />
          <input dir="rtl" type="password" placeholder=" وشەی نهێنی" required />
          <i style={{ color: "#1E293B" }} className="fa-solid fa-lock"></i>
          <br />
          <br />
          <button className="btn-f">
            <a href="/login">چوونەژوورەوە</a>
          </button>
          <button className="btn-f-0">
            <a href="/sighnup">دروستکردنی ئەکاونت</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
