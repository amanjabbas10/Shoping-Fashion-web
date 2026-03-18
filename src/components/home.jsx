import img2 from "../assets/newlogo.png";
import CartOne from "./CartOne";
import CartTwo from "./CartTwo";
import CartThree from "./CartThree";
import ReklamCart from "./reklamCart";
import ReklamCart2 from "./reklamCart2";
import Contact from "./contact";
import Footer from "./footer";
import { Link } from "react-router-dom";
const home = () => {
  return (
    <div>
      <div className="background-home">
        <nav>
          <img data-aos="fade-down" data-aos-duration="2400" src={img2} />

          <div className="nav-item" data-aos="fade-down" data-aos-duration="2200">
            <a href="#پەیوەندیکردن">
              پەیوەندیکردن <i className="fa-solid fa-phone"></i>
              <i className="fa-solid fa-angle-down"></i>
            </a>
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
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>

                  <a
                    href="https://www.facebook.com/malik.amanj.7?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a
                    href="https://www.facebook.com/malik.amanj.7?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            data-aos="fade-down"
            data-aos-duration="2000"
            href="#بەشەدڵخوازەکان"
          >
            بەشەدڵخوازەکان <i className="fa-solid fa-heart"></i>
          </a>
          <div className="nav-item" data-aos="fade-down" data-aos-duration="1800">
            <a href="#براندی جیهانی">
              براندی جیهانی <i className="fa-solid fa-globe"></i>
              <i className="fa-solid fa-angle-down"></i>
            </a>
            <div className="dropdown">
              <ul>
                <li>
                  <Link to="/EMPORIOARMANHome">ئیمپۆریۆ ئارمانی</Link>
                  <br />
                  <Link to="/LOUISVUITTONHome">لویس ڤیتۆن</Link>
                  <br />
                  <Link to="/VERSACEHome">ڤێرساچی</Link>
                  <br />
                  <Link to="/adidasHome">ئەدیداس</Link>
                  <br />
                  <Link to="/LACOSTEHome">لاکۆست</Link>
                  <br />
                  <Link to="/GUCCLHome">گووتچی</Link>
                  <br />
                  <Link to="/CHANELHome">جانێل</Link>
                  <br />
                  <Link to="/NIKEHome">نایک</Link>
                  <br />
                  <Link to="/PRADAHome">پرادا</Link>
                  <br />
                  <Link to="/DIORHome">دیۆر</Link>
                  <br />
                  <Link to="/POLOHome">پۆلۆ</Link>
                  <br />
                  <Link to="/ZARAHome">زاڕا</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-item" data-aos="fade-down" data-aos-duration="1600">
            <a href="#براندی ناوخۆ">
              براندی ناوخۆ <i className="fa-solid fa-earth-africa"></i>
              <i className="fa-solid fa-angle-down"></i>
            </a>
            <div className="dropdown">
              <ul>
                <li>
                  <Link to="/rawzHome">رەۆەز مەنسور</Link>
                  <br />
                  <Link to="/galarHome">گەڵەر ڤێ ئاپی</Link>
                  <br />
                  <Link to="/shvanHome">شڤان سەنتەر</Link>
                  <br />
                  <Link to="/hrHome">ئێج ئار شوپین</Link>
                  <br />
                  <Link to="/kHome">کەی فاشێون</Link>
                  <br />
                  <Link to="/delmanHome">دیلمان براند</Link>
                  <br />
                  <Link to="/soranHome">سۆران کڵاس</Link>
                  <br />
                  <Link to="/bussnisHome">بزنس کڵاس</Link>
                  <br />
                  <Link to="/tahirHome">تاهیر کڵاس</Link>
                  <br />
                  <Link to="/sanvitoHome">سان ڤیتۆ</Link>
                  <br />
                  <Link to="/bayHome">بای دەنێز</Link>
                  <br />
                  <Link to="/taherryHome">تاهیری</Link>
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <a data-aos="fade-down" data-aos-duration="1400" href="#سەرەکی">
            سەرەکی
            <i className="fa-regular fa-house"></i>
          </a>

          {/* ---------------------------------------------- */}

          <Link
            data-aos="fade-down"
            data-aos-duration="1200"
            className="btn-4"
            to="/login"
          >
            چوونەژوورەوە <i className="fa-solid fa-right-to-bracket"></i>
          </Link>

          {/* ---------------------------------------------- */}

          <Link
            data-aos="fade-down"
            data-aos-duration="1000"
            className="btn-5"
            to="/sighnUp"
          >
            دروستکردنی هەژمار <i className="fa-solid fa-user-plus"></i>
          </Link>
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
