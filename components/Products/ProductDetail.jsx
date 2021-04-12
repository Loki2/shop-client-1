import React, { useContext } from "react";
import Router, { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_PRODUCT, MY_PRODUCTS } from "../../graphql/Products";
import { AuthContext } from "../../contexts/AuthProvider";
import { ADD_TO_CART } from "../../graphql/Carts";

const ProductDetail = () => {
  const route = useRouter();
  const { data, loading, error } = useQuery(QUERY_PRODUCT, {
    variables: { id: route.query.productId },
  });
  console.log("ProductID:", route.query.productId);
  const { user } = useContext(AuthContext);
  console.log("produc Id", data);

  const [addToCart] = useMutation(ADD_TO_CART, {
    onCompleted: (data) => {
      console.log("data", data);
    },
    refetchQueries: [{ query: MY_PRODUCTS }],
  });

  const handleAddToCart = async (id) => {
    // console.log('product_id:',  id)

    if (!user) {
      return Router.push("/signin");
    }
    await addToCart({ variables: { id } });
  };

  //    console.log('result', data)
  if (error) return <p>Ooops....! Something went wrong, Plz try again later</p>;
  if (loading) return <p>loading...</p>;

  return (
    <>
      <section className="section product__detail">
        <div className="details container">
          <div className="left">
            <div className="main">
              <img src={data.product.imageUrl} alt={data.product.description} />
            </div>
            <div className="thumbnails">
              {/* <div className="thumbnail">
                <img
                  src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product12_aznyjk.jpg"
                  alt
                />
              </div>
              <div className="thumbnail">
                <img
                  src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product12_aznyjk.jpg"
                  alt
                />
              </div>
              <div className="thumbnail">
                <img
                  src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product12_aznyjk.jpg"
                  alt
                />
              </div>
              <div className="thumbnail">
                <img
                  src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product12_aznyjk.jpg"
                  alt
                />
              </div> */}
            </div>
          </div>
          <div className="right">
            <span>Home/Product_Detail</span>
            <h1>{data.product.name}</h1>
            <div className="price">kip {data.product.price}</div>
            <form>
              <div>
                <select>
                  <option value="Select Size" selected disabled>
                    Select Size
                  </option>
                  <option value={1}>32</option>
                  <option value={2}>42</option>
                  <option value={3}>52</option>
                  <option value={4}>62</option>
                </select>
                <span>
                  <i className="ti-angle-down" />
                </span>
              </div>
            </form>
            <form className="form">
              <input type="text" placeholder={1} />
              <a
                href={handleAddToCart}
                style={{ cursor: "pointer" }}
                className="addCart"
              >
                Add To Cart
              </a>
            </form>
            <h3>Product Detail</h3>
            <p>{data.product.description}</p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section related__products">
        <div className="title">
          <h2>Related Products</h2>
          <span>
            Select from the premium product brands and save plenty money
          </span>
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
    </>
  );
};

export default ProductDetail;
