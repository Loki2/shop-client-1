import React, {useState} from "react";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import Sidebar from "../../../components/Partials/Sidebar";
import Header from "../../../components/Partials/Header";
import { useMutation } from "@apollo/react-hooks";
import {
  QUERY_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  MY_PRODUCTS,
} from "../../../graphql/Products";



const createProduct = () => {
    const [file, setFile] = useState(null);
    const [productData, setProductData] = useState({
      name: "",
      description: "",
      price: "",
      stockqty: "",
      imageUrl: "",
    });

    // console.log("product data from input:", productData)
    const [createProduct, { loading, error }] = useMutation(CREATE_PRODUCT, {
      refetchQueries: [{ query: QUERY_PRODUCTS }],
    });

    const handleChange = (e) =>
      setProductData({
        ...productData,
        [e.target.name]: e.target.value,
      });
    //Select image from Folder
    const selectFile = (e) => {
      const files = e.target.files;
      setFile(files[0]);
      console.log(files)
    };

    //Upload File to Cloudinary
    const uploadFile = async () => {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "shoppin");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/swizce/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const result = await res.json();
      console.log('image result',  result)
      return result.secure_url;
    };

    // Create Handle Submit
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        const url = await uploadFile();
        // console.log('image Url:', url)
        if (url) {
          const result = await createProduct({
            variables: {
              ...productData,
              price: +productData.price,
              stockqty: +productData.stockqty,
              imageUrl: url,
            },
          });
          // console.log('Product Data:', result)
          return result;
        }
        Router.push("/admin/products");
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <div className="view__header">
            <a onClick={() => Router.push("/admin/products")}>
              <span className="ti-angle-left"></span>
              <small>Back</small>
            </a>
            <h3 className="dash-title">ຂໍ້ມູນກ່ຽວກັບສີນຄ້າ</h3>
          </div>

          <section className="recent">
            <div className="product__info">
              {/* <h3 className="dash-title">Product Detail:</h3> */}
              <div className="product__info__card">
                <div className="card__tabs">
                  <h3>ຂໍ້ມູນທົ່ວໄປ:</h3>
                </div>
                <div className="card__info__form">
                
                  <form onSubmit={handleSubmit}>
                    <div className="form-control">
                      <label htmlFor="productname">Product Name:</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Product Name"
                        value={productData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="address">Product Desc:</label>
                      <textarea
                        type="text"
                        name="description"
                        placeholder="Product Description"
                        value={productData.description}
                        onChange={handleChange}
                        rows="4"
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="city">Price:</label>
                      <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={productData.price}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="stockqty">Stock Qty:</label>
                      <input
                        type="number"
                        name="stockqty"
                        placeholder="Stock Qualtity"
                        value={productData.stockqty}
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div className="form-control">
                      <label htmlFor="contact"> Select Categories: </label>
                      <input
                        type="text"
                        name="contact"
                        placeholder="__Select Category__"
                        disabled
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="contact"> Select Brands: </label>
                      <input
                        type="text"
                        name="contact"
                        placeholder="__Select Brand__"
                        disabled
                      />
                    </div> */}
                    <div className="form-control">
                      <label htmlFor="contact"> Product Image: </label>
                      <input
                        type="file"
                        name="file"
                        placeholder="file *.png, *.jpg..."
                        onChange={selectFile}
                      />
                    </div>
                    <div className="form-submit">
                      <a
                        className="btn__cancel"
                        onClick={() => Router.push("/admin/products")}
                      >
                        Cancel
                      </a>
                      <button
                        className="btn__submit"
                        type="submit"
                        style={{
                          cursor:
                            !productData.name ||
                            !productData.description ||
                            !productData.price ||
                            !file ||
                            loading
                              ? "not-allowed"
                              : "pointer",
                        }}
                        disabled={
                          !productData.name ||
                          !productData.description ||
                          !productData.price ||
                          !file ||
                          loading
                        }
                      >
                       
                        Submit {loading ? "Submiting..." : ""}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default createProduct;
