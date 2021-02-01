import React from "react";
import Sidebar from "../../../components/Partials/Sidebar";
import Header from "../../../components/Partials/Header";

const Category = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <h1 className="dash-title">Category Information - Developing mode - ກຳລັງພັດທະນາໂມດ</h1>
        </main>
      </div>
    </>
  );
};

export default Category;
