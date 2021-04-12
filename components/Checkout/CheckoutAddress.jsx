import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Router from "next/router";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { MY_CHECKOUT_ADDRESS } from "../../graphql/CheckouAddress";
import { CUSTOM_ORDER } from '../../graphql/Carts';
import { QUERY_USER } from "../../graphql/User";


const calculateAmount = (carts) => {
  const amount = carts.reduce(
    (sum, cart) => sum + cart.quantity * cart.product.price,
    0
  );
  return amount * 100;
}


const CheckoutAddress = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useQuery(MY_CHECKOUT_ADDRESS);
  const [checkoutaddressData, setCheckoutaddressData] = useState({
    fullname: "",
    address: "",
    city: "",
    province: "",
    country: "",
    contact: "",
    postcode: ""
  })

  const handleChange = (e) => {
    setCheckoutaddressData({...checkoutaddressData, [e.target.name]: e.target.value })
  }

  const [customOrder] = useMutation(CUSTOM_ORDER, {
    refetchQueries: [{ query: QUERY_USER}]
  })

  const customerCheckout = async (amount, checkoutId) => {
    console.log("amount: ", amount)
    console.log("checkout ID: ", checkoutId)
    // const result = await customOrder({ variables: { amount, checkoutId }});
    // console.log("result: ", result)
  }

  if (error) return <>
    <div className="summary-checkout-single">
        <h3>1. ທີ່ຢູ່ສົ່ງເຄື່ອງຂອງຂ້ອຍ</h3>
        <button onClick={() => Router.push('/Carts')}>ເພີ່ມໃສ່</button>
    </div>
  </>;
  if (loading) return <p>Loading...!</p>;

  // console.log("user date from checkout: ", data)
  return (
    <>
    {
      data.user.checkout === null ||
      data.user.checkout === undefined ? (
        <div className="summary-checkout-single">
        <h3>1. ທີ່ຢູ່ສົ່ງເຄື່ອງຂອງຂ້ອຍ</h3>
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
      ) : (
        <div className="summary-checkout-single">
        <h3>1. ທີ່ຢູ່ສົ່ງເຄື່ອງຂອງຂ້ອຍ</h3>
        <form action="" method="post">
          <div className="info-state">
          <label htmlFor="fullname">Checkout ID: </label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter Fullname"
              required
              onChange={handleChange}
              disabled
              value={data.user.checkout.id}
            />
            <label htmlFor="fullname">Full Name: </label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter Fullname"
              required
              onChange={handleChange}
              value={data.user.checkout.fullname}
            />
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              required
              onChange={handleChange}
              value={data.user.checkout.address}
            />
            <label htmlFor="city">City: </label>
            <input
              type="text"
              name="city"
              placeholder="NY, New York"
              required
              onChange={handleChange}
              value={data.user.checkout.city}
            />
            <label htmlFor="state">Province/State:</label>
            <input
              type="text"
              name="province"
              placeholder="Enter Province"
              required
              onChange={handleChange}
              value={data.user.checkout.province}
            />
            <label htmlFor="contact">Contact No: </label>
            <input
              type="text"
              name="contact"
              placeholder="Contact No."
              required
              onChange={handleChange}
              value={data.user.checkout.contact}
            />
          </div>
          <div className="select-state">
            <label htmlFor="state">Coutry: </label>
            <input
              type="text"
              name="state"
              placeholder="Enter Country"
              required
              onChange={handleChange}
              value={data.user.checkout.country}
            />
            <label htmlFor="zip">Zip Code: </label>
            <input 
                type="text" name="zip" 
                placeholder="Zip Code" 
                onChange={handleChange}
                value={data.user.checkout.postcode}
                />
          </div>

          <div className="submit-state">
            <button
              className="btn__cancel"
              onClick={() => Router.push("/Carts")}
              type=""
            >
              ແກ້ໄຂຂໍ້ມູນ
            </button>
            <a 
              type="button" 
              className="btn__submit_order" 
              type="submit"
              onClick={() => {
                const amount = calculateAmount(user.carts);
                customerCheckout(amount, data.user.checkout.id)
              }}
              >
              ສັ່ງສິນຄ້າເລີຍ! 
            </a>
          </div>
        </form>
      </div>
      )
    }
      
    </>
  );
};

export default CheckoutAddress;
