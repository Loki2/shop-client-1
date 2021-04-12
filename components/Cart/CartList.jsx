import React, { useContext, useState, Component } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import CartItems from "./CartItems";
import CheckoutWithCreditCard from "../../components/Checkout/CheckoutWithCreditCard";
import QRCode from "qrcode";

const generateQRCode = async () => {
  const [total, setTotal] = useState();
  try {
    const response = await QRCode.toDataURL(
      "http://192.168.100.25:3000/Products/60177f074e272f0c67d7d05f"
    );
    console.log("Product QR Code:", response);
  } catch (error) {
    console.log(error);
  }
};

const CartList = () => {
  const { user, loading, error } = useContext(AuthContext);
  console.log("user data:", user);
  if (error)
    return (
      <>
        <main>
          <div className="cart__content">
            <p className="error__card">
              Ooops....! Something went wrong, Plz Login try again later
            </p>
          </div>
        </main>
      </>
    );
  if (loading) return <p>Empty Cart Loading...</p>;

  generateQRCode();

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th className="t__head">Product</th>
            <th className="t__head">Quantity</th>
            <th className="t__head">Subtotal</th>
          </tr>
          {user.carts.length > 0 &&
            user.carts.map((cart) => <CartItems key={cart.id} cart={cart} />)}
        </tbody>
      </table>
      <div className="total__price">
        <table>
          <tbody>
            <tr>
              <td>Subtotal:</td>
              <td>
                {user.carts.length > 0 &&
                  user.carts.reduce(
                    (sum, cart) => sum + cart.quantity * cart.product.price,
                    0
                  )}{" "} k
              </td>
            </tr>
            <tr>
              <td>Tax 10%:</td>
              <td>
                {user.carts.length > 0 &&
                  user.carts.reduce(
                    (sum, cart) =>
                      sum + (cart.quantity * cart.product.price * 10) / 100,
                    0
                  )}{" "} k
              </td>
            </tr>
            <tr>
              <td>Shipping:</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>
                {user.carts.length > 0 &&
                  user.carts.reduce(
                    (sum, cart) =>
                      sum +
                      cart.quantity * cart.product.price +
                      (sum * 10) / 100,
                    0
                  )}{" "} k
              </td>
            </tr>
          </tbody>
        </table>
        {/* <a
          href="/Checkout"
          className="checkout btn"
          disabled={user.carts.length === 0}
        >
          Checkout
        </a>
        <br />
        <CheckoutWithCreditCard carts={user.carts} /> */}
      </div>
    </>
  );
};

export default CartList;
