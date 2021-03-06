import React from "react";
import Navigation from "../../components/Partials/Navigation";
import Footer from "../../components/Partials/Footer";

const Service = () => {
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

      <section className="section sponsor">
        <div className="title">
          <h2>Our Sponsor</h2>
          <h2>Service Page developping mode-ໂມດກຳລັງພັດທະນາ</h2>
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

export default Service;
