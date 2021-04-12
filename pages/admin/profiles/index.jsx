import React, { Component } from "react";
import Sidebar from "../../../components/Partials/Sidebar";
import Header from "../../../components/Partials/Header";

export class index extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className="main-content">
          <Header />
          <main>
              <div className="cover-image">
                <div></div>
              </div>
              <div className="profile-image">
                <div></div>
              </div>
            <h1 className="dash-title">User Information - Developing mode - ກຳລັງພັດທະນາໂມດ</h1>
          </main>
        </div>
      </>
    );
  }
}

export default index;
