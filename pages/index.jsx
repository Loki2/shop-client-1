import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_PRODUCTS } from "../graphql/Products";
import Navigation from "../components/Partials/Navigation";
import Footer from "../components/Partials/Footer";

function Home() {
  const { data, loading, error } = useQuery(QUERY_PRODUCTS); //, {pollInterval:3000} Add pollInterval to refresh page per second
  if (error) return <p>Ooops....! Something went wrong, Plz try again later</p>;
  if (loading) return <p>loading...</p>;

  return (
    <>
      <Navigation />
      {/* Hero  */}
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
      {/* Promotion Section */}
      <section className="section promotion">
        <div className="title">
          <h2>Shop Collections</h2>
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
      {/* Product Section */}
      <section className="section products">
        <div className="title">
          <h2>New Products</h2>
          <span>Select from the premiumproduct and save plenty money</span>
        </div>
        <div className="product__layouts">
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610533570/product1_izeg8n.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product14_fxegrl.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534027/product13_jeocrb.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product11_smupbk.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product5_hb1iim.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product4_rnvclc.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534024/product6_ridrxd.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610533570/product7_jfkluc.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product10_nv4hj3.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product14_fxegrl.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product5_hb1iim.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534024/product2_rnywnk.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product10_nv4hj3.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product12_aznyjk.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advert Section */}
      <section className="section advert">
        <div className="advert__layouts">
          <div className="advert__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610533564/promo7_kijl3e.jpg"
              alt=""
            />
            <div className="content left">
              <span>Exclusive Sales</span>
              <h3>Spring Collection</h3>
              <a href="#">View Collection! →</a>
            </div>
          </div>
          <div className="advert__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610533566/promo8_zpzzsr.jpg"
              alt=""
            />
            <div className="content right">
              <span>New Trending</span>
              <h3>Designer Bags</h3>
              <a href="#">Shop Now! →</a>
            </div>
          </div>
        </div>
      </section>
      {/* Trending Product */}

      <section className="section products">
        <div className="title">
          <h2>New Trending</h2>
          <span>Select from the premiumproduct and save plenty money</span>
        </div>
        <div className="product__layouts">
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610533570/product1_izeg8n.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product14_fxegrl.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534027/product13_jeocrb.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product11_smupbk.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product5_hb1iim.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product4_rnvclc.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534024/product6_ridrxd.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610533570/product7_jfkluc.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product10_nv4hj3.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product14_fxegrl.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product5_hb1iim.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534024/product2_rnywnk.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product10_nv4hj3.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product12_aznyjk.jpg"
                alt=""
              />
              <div className="addCart">
                <i className="ti-shopping-cart" />
              </div>
              <ul className="side__icons">
                <span>
                  <i className="ti-search" />
                </span>
                <span>
                  <i className="ti-heart" />
                </span>
                <span>
                  <i className="ti-layout-slider" />
                </span>
              </ul>
            </div>
            <div className="bottom">
              <a href="#">Bambi Print Mini Backpack</a>
              <div className="price">
                <span>$150</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Branding Section */}
      <section className="section brands">
        <div className="title">
          <h2>Brands Collection</h2>
          <span>Select from the premium product and save plenty money</span>
        </div>
        <div className="brand__layouts container">
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610534022/brand4_rrdzru.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610534022/brand2_vwi6l4.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610534022/brand3_gp5dva.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610534022/brand3_gp5dva.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610534022/brand1_ezhwzl.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1610534022/brand5_w7sksl.png"
              alt=""
            />
          </div>

          {/* <div class="brand_logo">
                <img src="/assets/images/brand7.png" alt=""="">
            </div> */}
        </div>
      </section>
      {/* Sponsor Section */}
      <section className="section sponsor">
        <div className="title">
          <h2>Our Sponsor</h2>
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
      {/* footer section */}
      <Footer />
    </>
  );
}

export default Home;
