import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Footer from '../../components/Partials/Footer';
import Navigation from '../../components/Partials/Navigation';
import CartItems from '../../components/Cart/CartItems';
import CheckoutWithCreditCard from '../../components/Checkout/CheckoutWithCreditCard';

const Carts = () => {
    const { user, loading, error } = useContext(AuthContext)
    // console.log("user data:", user)
    if (error) return (
        <>
            <main>
                <div className="cart__content">
                    <p className="error__card">Ooops....! Something went wrong, Plz Login try again later</p>
                </div>
            </main>
        </>
    )
    if (loading) return <p>Empty Cart Loading...</p>

    return (
        <>
            <Navigation />

            <div className="container cart">
                <table>
                    <tbody>
                        <tr>
                            <th className="t__head">Product</th>
                            <th className="t__head">Quantity</th>
                            <th className="t__head">Subtotal</th>
                        </tr>
                        {
                            user.carts.length > 0 &&
                            user.carts.map(cart =>
                                <CartItems key={cart.id} cart={cart} />
                            )
                        }
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="https://res.cloudinary.com/swizce/image/upload/v1610533570/product1_izeg8n.jpg" alt="" />
                                    <div>
                                        <p>Bambi Print Mini Backpack</p>
                                        <span>Price: $500.00</span>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <a href="#">remove</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" value="1" min="1" /></td>
                            <td>$50.00</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product14_fxegrl.jpg" alt="" />
                                    <div>
                                        <p>Bambi Print Mini Backpack</p>
                                        <span>Price: $900.00</span>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <a href="#">remove</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" value="1" min="1" /></td>
                            <td>$90.00</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="https://res.cloudinary.com/swizce/image/upload/v1610534027/product13_jeocrb.jpg" alt="" />
                                    <div>
                                        <p>Bambi Print Mini Backpack</p>
                                        <span>Price: $700.00</span>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <a href="#">remove</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" value="1" min="1" /></td>
                            <td>$60.00</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product11_smupbk.jpg" alt="" />
                                    <div>
                                        <p>Bambi Print Mini Backpack</p>
                                        <span>Price: $600.00</span>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <a href="#">remove</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" value="1" min="1" /></td>
                            <td>$60.00</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product5_hb1iim.jpg" alt="" />
                                    <div>
                                        <p>Bambi Print Mini Backpack</p>
                                        <span>Price: $600.00</span>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <a href="#">remove</a>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" value="1" min="1" /></td>
                            <td>$60.00</td>
                        </tr>
                    </tbody>
                </table>
                <div className="total__price">
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal:</td>
                                <td>$
                                        {
                                        user.carts.length > 0 &&
                                        user.carts.reduce(
                                            (sum, cart) => sum + cart.qualtity * cart.product.price, 0
                                        )
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Tax 10%:</td>
                                <td>$
                                    {
                                        user.carts.length > 0 &&
                                        user.carts.reduce((sum, cart) => sum + cart.qualtity * cart.product.price * 10 / 100, 0)
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Shipping:</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td>$
                                    {
                                        user.carts.length > 0 &&
                                        user.carts.reduce((sum, cart) => (sum + cart.qualtity * cart.product.price) + sum * 10 / 100, 0)
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="/Checkout" className="checkout btn" disabled={user.carts.length === 0}>Proceed To Checkout</a>
                    <CheckoutWithCreditCard carts={user.carts}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Carts;
