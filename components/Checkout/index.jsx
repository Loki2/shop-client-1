import React, { useContext, useEffect } from "react";
import Router from "next/router";
import { AuthContext } from "../../contexts/AuthProvider";
import { QUERY_USER } from "../../graphql/User";
import { CREATE_ORDER } from "../../graphql/Carts";
import CheckOutList from "./CheckOutList";
import CheckoutWithCreditCard from "./CheckoutWithCreditCard";
import { useQuery, useMutation } from "@apollo/react-hooks";
import CheckoutAddress from "./CheckoutAddress";
// import CheckoutStripe from './CheckoutStripe';
// import CheckoutWithInternetbanking from './CheckoutInternetBanking';
// import ReactCheckout from './ReactCheckout';

//Function Calculate Amount
const calculateAmount = (carts) => {
  const amount = carts.reduce(
    (sum, cart) => sum + cart.quantity * cart.product.price,
    0
  );
  return amount * 100;
};

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useQuery(QUERY_USER);

  // const checkoutId = data.user.checkout;
  // console.log("user checkout ID: ", checkoutId)

  const [createOrder] = useMutation(CREATE_ORDER, {
    refetchQueries: [{ query: QUERY_USER }],
  });

  const creditCardCheckout = async (amount, cardId, token) => {
    const result = await createOrder({ variables: { amount, cardId, token } });
    console.log("Result -->", result);
    //i am stay with here 41.43mns
  };

  // console.log("Checkout User", user)
  if (error)
    return <p>Ooops....! Something went wrong, Plz Login try again later</p>;
  if (loading) return <p>Empty Cart Loading...</p>;

  return (
    <div className="checkout-content">
      <main>
        <section className="recent-checkout">
          <div className="checkout-grid">
            <CheckOutList carts={user.carts} />
            <div className="checkout-card">
              <h3 className="bill-title">Billing Information:</h3>
              <div className="checkout-card-item">
                <div className="checkout-header-cards">
                  <div className="checkout-header-card-single">
                    <div className="card-body">
                      <span className="ti-briefcase"></span>
                      <div>
                        <h5>Master Card</h5>
                        <h4>$0</h4>
                      </div>
                    </div>
                    <div className="card-footer">
                      <a href="">View all</a>
                    </div>
                  </div>
                  <div className="checkout-header-card-single">
                    <div className="card-body">
                      <span className="ti-reload"></span>
                      <div>
                        <h5>BCEL Account</h5>
                        <h4>$0</h4>
                      </div>
                    </div>
                    <div className="card-footer">
                      <a href="">View all</a>
                    </div>
                  </div>
                  <div className="checkout-header-card-single">
                    <div className="card-body">
                      <span className="ti-check-box"></span>
                      <div>
                        <h5>Paypal Account</h5>
                        <h4>$0</h4>
                      </div>
                    </div>
                    <div className="card-footer">
                      <a href="">View all</a>
                    </div>
                  </div>
                  <div className="checkout-header-card-single">
                    <div className="card-body">
                      <span className="ti-book"></span>
                      <div>
                        <h5>Union Pay</h5>
                        <h4>$0</h4>
                      </div>
                    </div>
                    <div className="card-footer">
                      <a href="">View all</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="checkout-info-cards">
                <CheckoutAddress carts={user.carts}/>

                <div className="summary-checkout-single">
                  <h3>2. ບ່ອນຈ່າຍເງິນ</h3>

                  {/* <CheckoutStripe /> */}
                  <CheckoutWithCreditCard
                    amount={calculateAmount(user.carts)}
                    // carts={data.user.carts}
                    creditCardCheckout={creditCardCheckout}
                  />
                  {/* <CheckoutWithInternetbanking carts={data.user.carts} /> */}
                  {/* <ReactCheckout /> */}
                  <form action="">
                        <div className="credit__header">
                          <h2>I already have card?</h2>
                        </div>
                        <div className="credit-info">
                          <label htmlFor="card_name">Card Brand:</label>
                          <br />
                          <input
                            type="text"
                            name="card_name"
                            placeholder=""
                            disabled
                          />
                          <label htmlFor="card_no">Card No:</label>
                          <input
                            type="text"
                            name="card_no"
                            placeholder={`****-****-****-4242`}
                            disabled
                          />
                          <p>
                            Expire: 03/25
                          </p>
                          <a
                            type="button"
                            className="btn__submit"
                            onClick={() => {
                              const amount = calculateAmount(user.carts);
                              creditCardCheckout(amount, card.id);
                            }}
                          >
                            Order Now!
                          </a>
                        </div>
                      </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer />   */}
    </div>
  );
};

export default CheckOut;
