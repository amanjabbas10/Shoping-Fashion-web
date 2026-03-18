const Contact = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
        className="form-cont"
      >
        <div className="form-contact-1">
          <div className="form-contact-2">
            <div className="form-contact-3">
              <label dir="rtl" style={{ marginLeft: "18rem" }}>
                ناوی سێانی
              </label>
              <br />
              <input type="name" />
              <br />
              <label dir="rtl" style={{ marginLeft: "15.5rem" }}>
                هەژماری ئەلیکترۆن
              </label>
              <br />
              <input type="name" />
              <br />
              <br />
              <textarea
                dir="rtl"
                cols={50}
                rows={9}
                placeholder="کێشەکەت لێرە باسبکە ..."
              />
              <br />
              <br />
              <input className="sub" type="submit" />

              <a
                href="https://www.facebook.com/share/1Fz7F8tYXq/?mibextid=wwXIfr"
                target="_blank"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.tiktok.com/@business.class.duhok?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <i class="fa-brands fa-tiktok"></i>
              </a>
              <a
                href="https://www.instagram.com/business_class_officiall?igsh=MW5pYWRvbmw4YXIzbA=="
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
