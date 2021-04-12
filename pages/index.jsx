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
      {/* <Navbar /> */}



      {/* Hero  */}
      <hr/>
      <div className="hero">
        <div className="right">
          <img
            src="https://res.cloudinary.com/swizce/image/upload/v1617679102/promotion_tem/prom9_gptyy0.png"
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
              src="https://res.cloudinary.com/swizce/image/upload/v1617677413/assets_tem/promo1_ynjtti_joucoh.jpg"
              alt=""
            />
            <div className="promotion__content">
              <h3>For Men</h3>
              <a href="#">Shop Now! →</a>
            </div>
          </div>
          <div className="promotion__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1617677413/assets_tem/promo2_i72dtr_eozbbi.jpg"
              alt=""
            />
            <div className="promotion__content">
              <h3>Casual Shoes</h3>
              <a href="#">Shop Now! →</a>
            </div>
          </div>
          <div className="promotion__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1617677413/assets_tem/promo3_dmrvt9_awyth5.jpg"
              alt=""
            />
            <div className="promotion__content">
              <h3>For Women</h3>
              <a href="#">Shop Now! →</a>
            </div>
          </div>
          <div className="promotion__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1617677413/assets_tem/promo4_cvpcvv_xh5ci6.jpg"
              alt=""
            />
            <div className="promotion__content">
              <h3>Evo Belts</h3>
              <a href="#">Shop Now! →</a>
            </div>
          </div>
          <div className="promotion__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1617677413/assets_tem/promo5_bguu3c_hr6qic.jpg"
              alt=""
            />
            <div className="promotion__content">
              <h3>Evo Tech</h3>
              <a href="#">Shop Now! →</a>
            </div>
          </div>
          <div className="promotion__items">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1617677412/assets_tem/promo6_e3nqvo_bolv1y.jpg"
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
          <h2>New Trending</h2>
          <span>Select from the premiumproduct and save plenty money</span>
        </div>
        <div className="product__layouts">
          <div className="product">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product1_dv47mm_xomn9y.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product14_cnjfod_hq5dap.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product13_vekz3w_frn3lu.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product11_kxqazq_asnubu.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product9_jryhmf_z7ryvu.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product3_uz8mxd_z01epu.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product7_jfkluc_ffddxe.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product2_r8ts6g_lpob0m.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product5_ndgvhn_nmn9f7.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product10_oplnhc_sc5lpp.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product10_oplnhc_sc5lpp.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product4_qixtdj_st9kdr.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product12_aznyjk_bgwzaa.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product8_d9zy51_egsqbm.jpg"
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
              src="https://res.cloudinary.com/swizce/image/upload/v1617678184/promotion_tem/promo7_dajg7u_rz1n9a.jpg"
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
              src="https://res.cloudinary.com/swizce/image/upload/v1617678184/promotion_tem/promo8_tjebfg_zryspv.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product1_dv47mm_xomn9y.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product14_cnjfod_hq5dap.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product13_vekz3w_frn3lu.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product11_kxqazq_asnubu.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product9_jryhmf_z7ryvu.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product3_uz8mxd_z01epu.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product7_jfkluc_ffddxe.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product2_r8ts6g_lpob0m.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product5_ndgvhn_nmn9f7.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product10_oplnhc_sc5lpp.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product10_oplnhc_sc5lpp.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product4_qixtdj_st9kdr.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product12_aznyjk_bgwzaa.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677877/products_tem/product8_d9zy51_egsqbm.jpg"
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
              src="https://res.cloudinary.com/swizce/image/upload/v1617678090/brands_tem/brand7_m81bkt_ijtgxb.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1617678089/brands_tem/brand5_w7sksl_moh9sb.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1617678090/brands_tem/brand2_vwi6l4_glon7c.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1617678090/brands_tem/brand3_gp5dva_ym7pwa.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1617678090/brands_tem/brand6_qh1u62_ao2ncj.png"
              alt=""
            />
          </div>
          <div className="brand_logo">
            <img
              src="https://res.cloudinary.com/swizce/image/upload/v1617678090/brands_tem/brand1_f64n35_rqw2bl.png"
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
