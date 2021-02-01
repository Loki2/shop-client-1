import React from "react";
import Header from "../../components/Partials/Header";
import Sidebar from "../../components/Partials/Sidebar";
import UserProduct from "../../components/UserProduct";

const UserProducts = () => {
  return (
    <>
      <Sidebar />
      <div className="main-products-content">
        <Header />
        <main>
          <UserProduct />
        </main>
      </div>
    </>
  );
};

export default UserProducts;
