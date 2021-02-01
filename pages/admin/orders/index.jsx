import React from "react";
import Sidebar from "../../../components/Partials/Sidebar";
import Header from "../../../components/Partials/Header";

const Orders = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <h1 className="dash-title">Orders Information - Developing mode - ກຳລັງພັດທະນາໂມດ</h1>
        </main>
      </div>
    </>
  );
};

export default Orders;
