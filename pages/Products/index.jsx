import React from "react";
import Footer from "../../components/Partials/Footer";
import Navigation from "../../components/Partials/Navigation";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_PRODUCTS } from "../../graphql/Products";
import Products from "../../components/Products";

const AllProducts = () => {
  const { data, loading, error } = useQuery(QUERY_PRODUCTS); //, {pollInterval:3000} Add pollInterval to refresh page per second
  if (error) return <p>Ooops....! Something went wrong, Plz try again later</p>;
  if (loading) return <p>loading...</p>;
  return (
    <>
      <Navigation />
      {/* Product Section */}
      <section className="section products">
        <div className="title">
          <h2>All Products</h2>
          <span>Select from the premiumproduct and save plenty money</span>
          {/* <form action="">
                            <div classNames="item">
                                <label for="sort-by">Sort By</label>
                                <select name="sort-by" id="sort-by">
                                <option value="title" selected="selected">Name</option>
                                <option value="number">Price</option>
                                <option value="search_api_relevance">Relevance</option>
                                <option value="created">Newness</option>
                                </select>
                            </div>
                            <div className="item">
                                <label for="order-by">Order</label>
                                <select name="order-by" id="sort-by">
                                <option value="ASC" selected="selected">ASC</option>
                                <option value="DESC">DESC</option>
                                </select>
                            </div>
                        <a href="">Apply</a>
                        </form> */}
        </div>
        <div className="product__layouts">
          {data.products.map((prod) => (
            <Products key={prod.id} prod={prod} />
          ))}

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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product6_gufj32_dqrl3o.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product6_gufj32_dqrl3o.jpg"
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
                src="https://res.cloudinary.com/swizce/image/upload/v1617677878/products_tem/product6_gufj32_dqrl3o.jpg"
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
        {/* <!-- PAGINATION --> */}
        <div>
          <ul className="pagination">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span className="icon">››</span>
            <span className="last">Last »</span>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllProducts;
