import React from "react";
import Sidebar from "../../../components/Partials/Sidebar";
import Header from "../../../components/Partials/Header";
import Router from "next/router";

const ProductInfo = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <div className="view__header">
            <a onClick={() => Router.push("/admin/products")}>
              <span className="ti-angle-left"></span>
              <small>ກັບຄືນ</small>
            </a>
            <h3 className="dash-title">ຂໍ້ມູນກ່ຽວກັບສີນຄ້າ</h3>
          </div>

          <section className="recent">
            <div className="product__info">
              {/* <h3 className="dash-title">Product Detail:</h3> */}
              <div className="product__info__card">
                <div className="card__tabs">
                  <h3>ຂໍ້ມູນທົ່ວໄປ:</h3><br/>
                  <h3>ຂໍ້ມູນທົ່ວໄປ:</h3><br/>
                  <h3>ຂໍ້ມູນທົ່ວໄປ:</h3>
                </div>
                <div className="card__info"> <h3>ລາຍລະອຽດ:</h3></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProductInfo;
