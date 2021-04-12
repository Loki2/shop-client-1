import React from "react";
import Navigation from "../../components/Partials/Navigation";
import Footer from "../../components/Partials/Footer";

const Cates = () => {
  return (
    <>
      <Navigation />
      <div className="hero">
        <div className="right">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/girl-doing-online-shopping-on-mobile-2709762-2268087.png"
            alt=""
          />
        </div>
        <div className="left">
          <span>Exclusive Sales</span>
          <h1>UP TO 50% OFF ON SALES</h1>
          <small>Get all exclusive offers for theseasons</small>
          <a href="#">View Collection →</a>
        </div>
      </div>

      <section className="section promotion">
        <div className="title">
          <h2>Shop Categories Collections</h2>
          <span>Select from the premium product and save plenty money</span>
        </div>
        <div className="promotion__layout container">
          <div className="promotion__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610533566/promo1_tv1xoe.jpg"
              alt=""
            />
            <div className="promotion__content">
              <h3>For Men</h3>
              <a href="#">Shop Now! →</a>
            </div>
          </div>
          <div className="promotion__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610533566/promo2_aj97nv.jpg"
              alt=""
            />
            <div className="promotion__content">
              <h3>Casual Shoes</h3>
              <a href="#">Shop Now! →</a>
            </div>
          </div>
          <div className="promotion__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610533564/promo3_ujnpmx.jpg"
              alt=""
            />
            <div className="promotion__content">
              <h3>For Women</h3>
              <a href="#">Shop Now! →</a>
            </div>
          </div>
          <div className="promotion__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610534027/promo4_cvpcvv.jpg"
              alt=""
            />
            <div className="promotion__content">
              <h3>Evo Belts</h3>
              <a href="#">Shop Now! →</a>
            </div>
          </div>
          <div className="promotion__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610533565/promo5_tdvs55.jpg"
              alt=""
            />
            <div className="promotion__content">
              <h3>Evo Tech</h3>
              <a href="#">Shop Now! →</a>
            </div>
          </div>
          <div className="promotion__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610533565/promo6_b3yk68.jpg"
              alt=""
            />
            <div className="promotion__content">
              <h3>Watches</h3>
              <a href="#">Shop Now! →</a>
            </div>
          </div>
        </div>
      </section>


      <section className="section sponsor">
        <div className="title">
          <h2>Our Sponsor</h2>
          <h2>Contact Us Page developping mode-ໂມດກຳລັງພັດທະນາ </h2>
          <span>Select from the premium product and save plenty money</span>
        </div>
        <div className="sponsor__layouts container">
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610950189/New/ptt_oreulb.jpg"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610950188/New/logo_n_wyv9yu.jpg"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610950188/New/LTC_logo_sign_suh03r.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610950188/New/ECME_Logo_jehzxt.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610950188/New/sacombank_w0a50d.jpg"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610950188/New/IizxahMNJxNnO2LmdBXqYIwyDJoWAfbaGzXlZgnX_wj8iwb.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610950187/New/2-4_uasdql.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610950188/New/images_zfrpcd.jpg"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610950187/New/a95ec5fde2b841c082b05f676290307f_zfyahu.jpg"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610950187/New/images_k8spru.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cates;
