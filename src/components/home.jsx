import img2 from "../assets/newlogo.png";
import CartOne from "./CartOne";
import CartTwo from "./CartTwo";
import CartThree from "./CartThree";
import ReklamCart from "./reklamCart";
import ReklamCart2 from "./reklamCart2";
import Contact from "./contact";
import Footer from "./footer";
const home = () => {
  return (
    <div>
      <div className="background-home">
        <nav>
          <img data-aos="fade-down" data-aos-duration="2400" src={img2} />

          <a data-aos="fade-down" data-aos-duration="2200" href="#پەیوەندیکردن">
            پەیوەندیکردن <i class="fa-solid fa-phone"></i>
            <i class="fa-solid fa-angle-down"></i>
            <div className="dropdown">
              <ul>
                <li>
                  <a href="#">Email</a>
                  <br />
                  <a href="#">Phone</a>
                  <br />
                  <a
                    href="https://www.facebook.com/malik.amanj.7?mibextid=LQQJ4d"
                    target="_blank"
                  >
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>

                  <a
                    href="https://www.facebook.com/malik.amanj.7?mibextid=LQQJ4d"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>

                  <a
                    href="https://www.facebook.com/malik.amanj.7?mibextid=LQQJ4d"
                    target="_blank"
                  >
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </a>
          <a
            data-aos="fade-down"
            data-aos-duration="2000"
            href="#بەشەدڵخوازەکان"
          >
            بەشەدڵخوازەکان <i className="fa-solid fa-heart"></i>
          </a>
          <a
            data-aos="fade-down"
            data-aos-duration="1800"
            href="#براندی جیهانی"
          >
            براندی جیهانی <i className="fa-solid fa-globe"></i>
            <i class="fa-solid fa-angle-down"></i>
            <div className="dropdown">
              <ul>
                <li>
                  <a href="/EMPORIOARMANHome">ئیمپۆریۆ ئارمانی</a>
                  <br />
                  <a href="/LOUISVUITTONHome">لویس ڤیتۆن</a>
                  <br />
                  <a href="/VERSACEHome">ڤێرساچی</a>
                  <br />
                  <a href="/adidasHome">ئەدیداس</a>
                  <br />
                  <a href="/LACOSTEHome">لاکۆست</a>
                  <br />
                  <a href="/GUCCLHome">گووتچی</a>
                  <br />
                  <a href="/CHANELHome">جانێل</a>
                  <br />
                  <a href="/NIKEHome">نایک</a>
                  <br />
                  <a href="/PRADAHome">پرادا</a>
                  <br />
                  <a href="/DIORHome">دیۆر</a>
                  <br />
                  <a href="/POLOHome">پۆلۆ</a>
                  <br />
                  <a href="/ZARAHome">زاڕا</a>
                </li>
              </ul>
            </div>
          </a>
          <a data-aos="fade-down" data-aos-duration="1600" href="#براندی ناوخۆ">
            براندی ناوخۆ <i class="fa-solid fa-earth-africa"></i>
            <i class="fa-solid fa-angle-down"></i>
            <div className="dropdown">
              <ul>
                <li>
                  <a href="/rawzHome">رەۆەز مەنسور</a>
                  <br />
                  <a href="/galarHome">گەڵەر ڤێ ئاپی</a>
                  <br />
                  <a href="/shvanHome">شڤان سەنتەر</a>
                  <br />
                  <a href="/hrHome">ئێج ئار شوپین</a>
                  <br />
                  <a href="/kHome">کەی فاشێون</a>
                  <br />
                  <a href="/delmanHome">دیلمان براند</a>
                  <br />
                  <a href="/soranHome">سۆران کڵاس</a>
                  <br />
                  <a href="/bussnisHome">بزنس کڵاس</a>
                  <br />
                  <a href="/tahirHome">تاهیر کڵاس</a>
                  <br />
                  <a href="/sanvitoHome">سان ڤیتۆ</a>
                  <br />
                  <a href="/bayHome">بای دەنێز</a>
                  <br />
                  <a href="/taherryHome">تاهیری</a>
                  <br />
                </li>
              </ul>
            </div>
          </a>
          <a data-aos="fade-down" data-aos-duration="1400" href="#سەرەکی">
            سەرەکی
            <i class="fa-regular fa-house"></i>
          </a>

          {/* ---------------------------------------------- */}

          <button
            data-aos="fade-down"
            data-aos-duration="1200"
            className="btn-4"
          >
            <a href="/login">
              چوونەژوورەوە <i className="fa-solid fa-right-to-bracket"></i>
            </a>
          </button>

          {/* ---------------------------------------------- */}

          <button
            data-aos="fade-down"
            data-aos-duration="1000"
            className="btn-5"
          >
            <a href="/sighnUp">
              دروستکردنی هەژمار <i className="fa-solid fa-user-plus"></i>
            </a>
          </button>
        </nav>

        <h1 data-aos="zoom-in-right" data-aos-duration="2000" dir="rtl">
          بازاڕکردنی مۆدیرنی ئۆنلاین
        </h1>
        <p data-aos="zoom-in-left" data-aos-duration="2000" dir="rtl">
          کرێنی جلوبەرگ لەڕێگای ئۆنلاین بەشێکی گرنگە لە بازاڕکردنی مۆدێرنی
          دیجیتاڵ کە لە ساڵانی دوایی زۆر پەرەی سەندووە. کڕیاران دەتوانن لە
          ماڵپەڕ و ئەپەکاندا بە ئاسانی جلوبەرگ هەڵبژێرن، قەبارە و ڕەنگ دیاری
          بکەن و نرخەکان بەراورد بکەن. هەروەها وێنە، ڤیدیۆ و هەڵسەنگاندنی
          بەکارهێنەران دەبینن پێش بڕیار. براندەکانیش بە ڕێکلامی سۆشیال میدیا و
          ئۆفەری تایبەت بازاڕکردن بە شێوەیەکی کاریگەرتر ئەنجام دەدەن. ئەم شێوازە
          کرێن و فرۆشتن خێراتر و فراوانتر کردووە.
        </p>
        <br />
        <button
          data-aos="fade-up-right"
          data-aos-duration="2000"
          dir="rtl"
          className="btn-2"
        >
          براندی جیهانی
        </button>
        <button
          data-aos="fade-up-left"
          data-aos-duration="2000"
          dir="rtl"
          className="btn-3"
        >
          براندی ناوخۆ
        </button>
      </div>
      {/* this part about cart start */}
      {/* -------------------------- */}
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        id="براندی ناوخۆ"
        className="type-one"
      >
        براندی ناوخۆ
      </h1>
      <hr
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="type-two"
      />
      <p
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="type-three"
      >
        .ئەو جۆرە براندانە زۆرجار لە کەلتور و دەستوور و پێویستی خەڵکی ناوچەکە
        دروست دەکرێن
      </p>
      <br />
      <br />
      <CartOne />
      <ReklamCart />
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        id="براندی جیهانی"
        className="type-one"
      >
        براندی جیهانی
      </h1>
      <hr
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="type-two"
      />
      <p
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="type-three"
      >
        .ئەو جۆرە براندانە زۆرجار لە کەلتور و دەستوور و پێویستی خەڵکی ناوچەکە
        دروست دەکرێن
      </p>
      <br />
      <br />
      <CartTwo />
      <ReklamCart2 />
      {/* this part about cart end */}
      {/* ----------------------------------- */}
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        id="بەشەدڵخوازەکان"
        className="type-one"
      >
        بەشەدڵخوازەکان
      </h1>
      <hr
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="type-two"
      />
      <p
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="type-three"
      >
        .ئەو جۆرە براندانە زۆرجار لە کەلتور و دەستوور و پێویستی خەڵکی ناوچەکە
        دروست دەکرێن
      </p>
      <br />
      <br />
      <CartThree />
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        id="پەیوەندیکردن"
        className="type-one"
      >
        پەیوەندیکردن
      </h1>
      <hr
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="type-two"
      />
      <p
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="type-three"
      >
        .ئەو جۆرە براندا زۆرجار لە کەلتورو دەستوورو پێویستی خەڵکی ناوچەکە دروست
        دەکەن
      </p>
      <br />
      <br />
      <Contact />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default home;
