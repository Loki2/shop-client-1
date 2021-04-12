import React, { Component, useState } from "react";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import { useMutation } from "@apollo/react-hooks";
import Sidebar from "../../../components/Partials/Sidebar";
import Header from "../../../components/Partials/Header";
import Backdrop from "../../../components/Backdrop";
import Modal from "../../../components/Modal";
import CategoriesList from "../../../components/Categories/CategoriesList";
import { CREATE_CATEGORY, QUERY_CATEGORIES } from "../../../graphql/Category";

class Category extends Component {
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
  _renderCreateCategory = () => () => {
    const [file, setFile] = useState(null);
    const [cateData, setCateData] = useState({
      name: "",
      desc: "",
      imageUrl: "",
    });

    //console.log("cateDate", cateData)
    const [createCate, {loading, error}] = useMutation(CREATE_CATEGORY, {
      refetchQueries: [{ query: QUERY_CATEGORIES}],
    })

    //handle Change from input
    const handleChange = (e) =>
      setCateData({ ...cateData, [e.target.name]: e.target.value });

    //Select image from Folder
    const selectFile = (e) => {
      const files = e.target.files;
      setFile(files[0]);
      console.log(files);
    };

    // https://api.cloudinary.com/v1_1/swizce/image/upload
    //Upload File to Cloudinary
    const uploadFile = async () => {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "category");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/swizce/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const result = await res.json();
      //console.log("image result", result);
      return result.secure_url;
    };

    // Create Handle Submit
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        const url = await uploadFile();
        //console.log("Image url:", url)

        if(url){
          const result = await createCate({
            variables: {
              ...cateData,
              name: cateData.name,
              desc: cateData.desc,
              imageUrl: url
            },
          });

          //console.log("Category Response:", result)
          return result
        }
        Router.push('/admin/categories')
      } catch (error) {
        console.log(error)
      }
    }
    return (
      <div className="create-category__card">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Category Name"
              value={cateData.name}
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
              value={cateData.desc}
              onChange={handleChange}
              required  
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="image">Image</label>
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
    const CreateCategory = this._renderCreateCategory();
    return (
      <>
        <Sidebar />
        <div className="main-content">
          <Header />
          <main>
            <div className="view__header">
              <h3 className="dash-title">ປະເພດສີນຄ້າ</h3>
              <a onClick={this.CreateEventHandler}>
                <span className="ti-plus"></span>
                <small>ເພີ່ມປະເພດ</small>
              </a>
            </div>
            {this.state.creating && <Backdrop />}
            {this.state.creating && (
              <Modal
                title="Create Category"
                canCancel
                canConfirm
                onCancel={this.modalCancelHandler}
                onConfirm={this.modalConfirmHandler}
              >
                <CreateCategory />
              </Modal>
            )}
            <section className="recent-categories">
              <div className="categories-grid">
                <div className="categories-card">
                  <h3>Recently Categories List</h3>
                  <CategoriesList />
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

export default Category;
