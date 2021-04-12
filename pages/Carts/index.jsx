import React, { useState, useContext, Component } from "react";
import CartList from "../../components/Cart/CartList";
import Footer from "../../components/Partials/Footer";
import Navigation from "../../components/Partials/Navigation";
import Backdrop from "../../components/Backdrop";
import Modal from "../../components/Modal";
import { AuthContext } from "../../contexts/AuthProvider";
import Router from "next/router";

class Carts extends Component {
  state = {
    create: false,
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

  /*
   **  Create Payment bank Service
   */
  _renderCreateCheckout = () => () => {
    const { user, loading, error } = useContext(AuthContext);

    console.log("User Payment data:", user);
    if (error) {
      return (
        <p className="error__card">
          Ooops....! Something went wrong, Plz Login try again later
        </p>
      );
    }

    if (loading) return <p>Empty Cart Loading...</p>;

    return (
      <>
        <div className="checkout__card">
          <div className="summary-checkout-single">
            <form action="" method="post">
              <div className="info-state">
                <label htmlFor="fullname">Full Name:</label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter Fullname"
                  required
                />
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  required
                />
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  name="city"
                  placeholder="NY, New York"
                  required
                />
                <label htmlFor="state">Province:</label>
                <input
                  type="text"
                  name="province"
                  placeholder="Enter Province"
                  required
                />
                <label htmlFor="contact">Contact No:</label>
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact No."
                  required
                />
              </div>
              <div className="select-state">
                <label htmlFor="state">Coutry:</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter Country"
                  required
                />
                <label htmlFor="zip">Zip Code:</label>
                <input type="text" name="zip" placeholder="Zip Code" />
              </div>
              <div className="submit-state">
                <button
                  className="btn__cancel"
                  onClick={() => Router.push("/Carts")}
                  type=""
                >
                  Back Cart
                </button>
                <button className="btn__submit" type="submit">
                  ຈັດເກັບ
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
  render() {
    const CheckoutAddress = this._renderCreateCheckout();
    return (
      <>
        <Navigation />
        <div className="container cart">
          <CartList />
          {this.state.creating && <Backdrop />}
          {this.state.creating && (
            <Modal
              title="Checkout Service"
              canCancel
              canConfirm
              onCancel={this.modalCancelHandler}
              onConfirm={this.modalConfirmHandler}
            >
              <CheckoutAddress />
            </Modal>
          )}

          <div className="add_checkoutAddress">
            <button onClick={this.CreateEventHandler}>ໃສ່ທີຢູ່ຮັບເຄື່ອງ</button>
          </div>
          <div className="checkout_order">
            <button onClick={() => Router.push("/Checkout")}>
              Checkout Order
            </button>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Carts;
