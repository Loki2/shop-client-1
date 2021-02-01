import React, { Component, useContext } from "react";
import Sidebar from "../../../components/Partials/Sidebar";
import Header from "../../../components/Partials/Header";
import { AuthContext } from "../../../contexts/AuthProvider";
import ProductItems from "../../../components/UserProduct/ProductItems";
import Router from "next/router";
// import { MY_PRODUCTS } from '../../../graphql/Products';
// import { useQuery } from '@apollo/react-hooks';


const UserProducts = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          {/* <UserProduct /> */}
          <div className="view__header">
            <h3 className="dash-title">ສີນຄ້າທັງຫມົດໃນສ່າງ</h3>

            <a onClick={() => Router.push("/admin/products/create")}>
              <span className="ti-plus"></span>
              <small>ເພີ່ມສີນຄ້າໃຫມ່</small>
            </a>
          </div>
          
          <section className="recent">
            <div className="activity-card">
              <h3>Recently Activity</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Products Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Stock Qty</th>
                      <th>Unit</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      user &&
                      user.products.map(product => (
                        <ProductItems key={product.id} product={product} />
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default UserProducts;
