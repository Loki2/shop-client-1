import React, { Component, useState } from "react";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import { useMutation } from "@apollo/react-hooks";
import Sidebar from "../../../components/Partials/Sidebar";
import Header from "../../../components/Partials/Header";
import Backdrop from "../../../components/Backdrop";
import Modal from "../../../components/Modal";
import BrandList from "../../../components/Brands/BrandList";
import { CREATE_BRAND, QUERY_BRANDS } from "../../../graphql/Brands";

class Brands extends Component {
  state = {
    creating: false,
  };

  CreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  /**
   * Create Form Component with Function
   */
  _renderCreateBrand = () => () => {
    const [file, setFile] = useState(null);
    const [brandData, setBrandData] = useState({
      name: "",
      desc: "",
      logo: "",
    });
    //console.log("handle Change:", brandData)
    //create brands function here
    const [createbrand, { loading, error }] = useMutation(CREATE_BRAND, {
      refetchQueries: [{ query: QUERY_BRANDS }],
    });

    // handle Change Input from filter
    const handleChange = (e) =>
      setBrandData({ ...brandData, [e.target.name]: e.target.value });

    //Select image from Folder
    const selectFile = (e) => {
      const files = e.target.files;
      setFile(files[0]);
      console.log(files);
    };

    //Upload File to Cloudinary
    const uploadFile = async () => {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "brands_logo");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/swizce/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const result = await res.json();
      console.log("image result", result);
      return result.secure_url;
    };

    // Create Handle Submit
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        const url = await uploadFile();
        //console.log("Image url:", url)

        if (url) {
          const result = await createbrand({
            variables: {
              ...brandData,
              name: brandData.name,
              desc: brandData.desc,
              logo: url,
            },
          });

          console.log("Brands Response:", result);
          return result;
        }
        Router.push("/admin/brands");
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div className="create-category__card">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Brand Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Brand Name"
              value={brandData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="desc">Description</label>
            <textarea
              type="text"
              name="desc"
              id="desc"
              placeholder="Description"
              rows="4"
              value={brandData.desc}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="image">Brand Logo</label>
            <input
              type="file"
              name="file"
              placeholder="file *.png, *.jpg..."
              onChange={selectFile}
            />
          </div>
          <div className="form-submit">
            <button className="btn__cancel">Cancel</button>
            <button className="btn__submit">Submit</button>
          </div>
        </form>
      </div>
    );
  };

  render() {
    const CreateBrand = this._renderCreateBrand();
    return (
      <>
        <Sidebar />
        <div className="main-content">
          <Header />
          <main>
            <div className="view__header">
              <h3 className="dash-title">ແບຣນສີນຄ້າ</h3>
              <a onClick={this.CreateEventHandler}>
                <span className="ti-plus"></span>
                <small>ເພີ່ມແບຣນ</small>
              </a>
            </div>
            {this.state.creating && <Backdrop />}
            {this.state.creating && (
              <Modal
                title="Create Brand"
                canCancel
                canConfirm
                onCancel={this.modalCancelHandler}
                onConfirm={this.modalConfirmHandler}
              >
                <CreateBrand />
              </Modal>
            )}
            <section className="recent-categories">
              <div className="categories-grid">
                <div className="categories-card">
                  <BrandList />
                </div>
                <div className="category-detail">
                  <div className="category-card">
                    <div className="category-single">
                      <span className="ti-id-badge"></span>
                      <h3>196</h3>
                      <small>Number Of Staff</small>
                    </div>

                    <div className="summary-single">
                      <span className="ti-calendar"></span>
                      <h3>16</h3>
                      <small>Number Of Leaves</small>
                    </div>

                    <div className="summary-single">
                      <span className="ti-face-smile"></span>
                      <h3>59</h3>
                      <small>Profile update requested</small>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </>
    );
  }
}

export default Brands;
