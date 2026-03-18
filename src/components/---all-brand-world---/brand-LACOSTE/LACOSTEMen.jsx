import img2 from "../../../assets/logo-world-brand/LACOSTE-men-home-logo.png";
import img3 from "../../../assets/image-home-all-brand/image-LACOSTE-fro-men.jpeg";
import LACOSTEcartformen from "./LACOSTEcartformen";
import Footer from "../../footer";
const LACOSTEMen = () => {
  return (
    <div>
      <header
        data-aos="fade-down"
        data-aos-duration="2200"
        className="header-part"
      >
        <img src={img2} />
        <div className="header-icons">
          <a href="/">
            <i class="fa-solid fa-house"></i>
          </a>
          {/* favorites */}
          <i className="fa-regular fa-heart"></i>
          {/* favorites */}
          <i className="fa-solid fa-cart-shopping"></i>
          <a href="/login">
            <i className="fa-regular fa-user"></i>
          </a>
        </div>
      </header>
      <nav data-aos="fade-down" data-aos-duration="2500" className="navbar-two">
        <a href="#">
          <i class="fa-solid fa-basket-shopping"></i>
          All
        </a>
        <a href="#Shirt">
          <i class="ph ph-shirt-folded"></i> Shirt
        </a>
        <a href="#T-Shirt">
          <i class="ph ph-t-shirt"></i> T-Shirt
        </a>
        <a href="#Jeans">
          <i className="ph ph-pants"></i> Jeans
        </a>
        <a href="#Jacket">
          <i class="ph ph-hoodie"></i> Jacket
        </a>
        <a href="#Shoes">
          <i class="ph ph-sneaker-move"></i> Shoes
        </a>
        <a href="#Bags">
          <i class="ph ph-handbag"></i> Bags
        </a>
      </nav>
      <a className="back-brand-home" href="/LACOSTEHome">
        <i className="fa-regular fa-circle-left"></i>
      </a>

      <div className="image-home-0">
        <img data-aos="zoom-in-right" data-aos-duration="2000" src={img3} />
        <div className="image-home-9">
          <div className="image-home-8">
            <h1 data-aos="zoom-in-right" data-aos-duration="2000" dir="rtl">
              لاکۆست
            </h1>
            <p data-aos="zoom-in-left" data-aos-duration="2000" dir="rtl">
              براندێکی ناوخۆییە لە دهۆک کە تایبەتە بە جل‌وبەرگی ئاستی بازرگانی و
              پێشەنگ. ئەم براندە دروستکراوە بۆ ئەو کەسانەی کە حەز دەکەن بە
              شێوازی ڕێک‌وپێک، ساده و بەرزی کارییان دەربڕن گرنگی زۆر دەدات بە
              کوالێتی، وردکاری، و هەڵبژاردنی مادەی باش، بۆ ئەوەی جل‌وبەرگێک
              پێشکەش بکات کە گونجاوە بۆ کار، کۆبوونەوە فەرمییەکان، و ژیانی
              ڕۆژانەی پێشەنگان. ئەم براندە وێنای پێشکەوتن، متمانە و سەرکەوتن
              نیشان دەدات و هەوڵ دەدات ناوی دهۆک و براندە ناوخۆییەکان بگەیەنێت
              بۆ ئاستێکی بەرزتر
            </p>
            <button
              data-aos="fade-up-right"
              data-aos-duration="2000"
              className="brand-btn-0"
              dir="rtl"
            >
              کڕین ئێستا
            </button>
            <button
              data-aos="fade-up-left"
              data-aos-duration="2000"
              className="brand-btn-9"
              dir="rtl"
            >
              بینینی کۆڵێکشن
            </button>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              dir="rtl"
              className="icons"
            >
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

      <br />
      <br />
      <br />
      <br />
      <LACOSTEcartformen />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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

export default LACOSTEMen;
