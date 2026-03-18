import img2 from "../assets/Untitled21.png";
const footer = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1000"
    >
      <footer className="fot-2">
        <div className="row">
          <div className="col">
            <h3 style={{ marginLeft: "2.2rem" }}>
              <a href="#">پەیوەندیکردن </a>
            </h3>
            <hr style={{ marginLeft: "2rem" }} className="footer-hr" />
            <h4 style={{ marginTop: "30px", marginRight: "2rem" }}>
              کورانی نۆی،رێگای بەحرکە
            </h4>
            <h4 style={{ marginLeft: "25px" }}>کوردستان،هەولێر</h4>
            <h4 className="email">Program5B@gmail.com</h4>
            <h4 className="number-h4">+964 - 0751 184 39 30 </h4>
            <div className="social">
              <h4>
                <a
                  href="https://www.facebook.com/malik.amanj.7?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </h4>
              <h4>
                <a
                  href="https://www.facebook.com/malik.amanj.7?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </h4>
              <h4>
                <a
                  href="https://www.facebook.com/malik.amanj.7?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </h4>
              <h4>
                <a
                  href="https://www.facebook.com/malik.amanj.7?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <i class="fa-brands fa-tiktok"></i>
                </a>
              </h4>
            </div>
          </div>
          <div className="col">
            <h3 style={{ marginLeft: "12px" }}>
              <a href="#">براندی جیهانی</a>
            </h3>
            <hr style={{ marginLeft: "9px" }} className="footer-hr" />
            <h4 style={{ marginLeft: "10px" }}>ئیمپۆریۆ ئارمانی</h4>
            <h4 style={{ marginLeft: "18px" }}>لویس ڤیتۆن</h4>
            <h4 style={{ marginLeft: "24px" }}>ڤێرساچی</h4>
            <h4 style={{ marginLeft: "25px" }}>ئەدیداس</h4>
            <h4 style={{ marginLeft: "27px" }}>لاکۆست</h4>
            <h4 style={{ marginLeft: "28px" }}>گووتچی</h4>
            <h4 style={{ marginLeft: "34px" }}>جانێل</h4>
            <h4 style={{ marginLeft: "34px" }}>نایک</h4>
            <h4 style={{ marginLeft: "36px" }}>پۆلۆ</h4>
            <h4 style={{ marginLeft: "34px" }}>پرادا</h4>
            <h4 style={{ marginLeft: "34px" }}>دیۆر</h4>
            <h4 style={{ marginLeft: "36px" }}>زاڕا</h4>
          </div>
          <div className="col">
            <h3 style={{ marginLeft: "6px" }}>
              <a href="#">براندی ناوخۆ</a>
            </h3>
            <hr className="footer-hr" />
            <h4>ئێج ئار شوپین</h4>
            <h4>شڤان سەنتەر</h4>
            <h4>گەڵەر ڤێ ئاپی</h4>
            <h4>رەۆەز مەنسور</h4>
            <h4>کەی فاشێون</h4>
            <h4>سۆران کڵاس</h4>
            <h4>دیلمان براند</h4>
            <h4>بزنس کڵاس</h4>
            <h4>تاهیر کڵاس</h4>
            <h4 style={{ marginLeft: "15px" }}>سان ڤیتۆ</h4>
            <h4 style={{ marginLeft: "15px" }}>بای دەنێز</h4>
            <h4 style={{ marginLeft: "19px" }}>تاهیری</h4>
          </div>
          <div className="col">
            <img src={img2} />
            <p dir="rtl">
              کرێنی جلوبەرگ لەڕێگای ئۆنلاین شێوازێکی نوێ و گونجاوە بۆ ئەوانەی
              دەیانەوێت جلوبەرگی جوان بۆ بۆنە یان وێنەگرتن بەکاربهێنن.
              بەکارهێنەر دەتوانێت شێوە، قەبارە و نرخ هەڵبژێرێت و بە ئاسانی
              پارەدان بکات. ئەم ڕێگەیە کات و تێچوون کەم دەکات و هەڵبژاردن زۆر
              دەکات.
            </p>
          </div>
        </div>
        <hr />
        <p className="copy">
          Created By Group 5B Program © 2026 - All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default footer;
