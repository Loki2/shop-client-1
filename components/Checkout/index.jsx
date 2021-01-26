import React, {useContext, useEffect} from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { QUERY_USER } from '../../graphql/User';
import { CREATE_ORDER } from '../../graphql/Carts';
import CheckOutList from './CheckOutList';
import CheckoutWithCreditCard from './CheckoutWithCreditCard';
import { useQuery, useMutation } from '@apollo/react-hooks';
// import CheckoutStripe from './CheckoutStripe';
// import CheckoutWithInternetbanking from './CheckoutInternetBanking';
// import ReactCheckout from './ReactCheckout';

//Function Calculate Amount
const calculateAmount = carts =>{
    const amount =  carts.reduce(
        (sum, cart) => sum + cart.qualtity * cart.product.price, 0
    ) 
    return amount * 100;
}

const CheckOut = () => {

    const { user } = useContext(AuthContext);
    const { data, loading, error } = useQuery(QUERY_USER);

    // console.log(user)

    const [createOrder ] = useMutation(CREATE_ORDER, {refetchQueries: [{query: QUERY_USER}]})


    const creditCardCheckout = async (amount, cardId, token) => {
        const result = await createOrder({ variables: { amount, cardId, token}})
        console.log("Result -->", result)
        //i am stay with here 41.43mns
    }

    
    // console.log("Checkout User", user)
    if (error) return <p>Ooops....! Something went wrong, Plz Login try again later</p>
    if (loading) return <p>Empty Cart Loading...</p>

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
                                                    <h4>$30,405.00</h4>
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
                                                    <h4>$21,249.00</h4>
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
                                                    <h4>$74,905.00</h4>
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
                                                    <h4>$174,905.00</h4>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <a href="">View all</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="checkout-info-cards">
                                    <div className="summary-checkout-single">
                                        <h3>1. Billing Address</h3>
                                        <form action="" method="post">
                                            <div className="info-state">
                                                <label htmlFor="fullname">Full Name:</label>
                                                <input type="text" name="fullname" placeholder="Enter Fullname" />
                                                <label htmlFor="address">Address:</label>
                                                <input type="text" name="address" placeholder="Enter Address" />
                                                <label htmlFor="city">City:</label>
                                                <input type="text" name="city" placeholder="NY, New York" />
                                                <label htmlFor="contact">Contact No:</label>
                                                <input type="text" name="contact" placeholder="Contact No." />
                                            </div>
                                            <div className="select-state">
                                                <label htmlFor="state">Province:</label>
                                                <input type="text" name="state" placeholder="Enter Province" />
                                                <label htmlFor="zip">Zip Code:</label>
                                                <input type="text" name="zip" placeholder="Zip Code" />
                                            </div>
                                            <div className="submit-state">
                                                <button className="btn__cancel" type="">Back Cart</button>
                                                <button  className="btn__submit" type="submit" >Submit!</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="summary-checkout-single">
                                        <h3>2. Credit Card No</h3>

                                        {/* <CheckoutStripe /> */}
                                        <CheckoutWithCreditCard 
                                            amount={calculateAmount(user.carts)}
                                            // carts={data.user.carts} 
                                            creditCardCheckout={creditCardCheckout} 
                                            />
                                        {/* <CheckoutWithInternetbanking carts={data.user.carts} /> */}
                                        {/* <ReactCheckout /> */}
                                           {
                                               user &&
                                               user.cards &&
                                               user.cards.map(card => (
                                                <form action=""  key={card.id}>
                                                    <div className="credit__header">
                                                        <h2>I already have card?</h2>
                                                    </div>
                                                    <div className="credit-info" >
                                                        <label htmlFor="card_name">Card Brand:</label><br />
                                                        <input type="text" name="card_name" placeholder={card.cardInfo.brand} disabled/>
                                                        <label htmlFor="card_no">Card No:</label>
                                                        <input type="text" name="card_no" placeholder={`****-****-****-${card.cardInfo.last_digits}`} disabled />
                                                        <p>Expire: {card.cardInfo.expiration_month}/{card.cardInfo.expiration_year}</p>
                                                        <a type="button"  className="btn__submit" onClick={() => {
                                                            const amount = calculateAmount(user.carts)
                                                            creditCardCheckout(amount, card.id)
                                                        }} >Pay with Ready Card!</a>
                                                    </div>
                                                </form>
                                               ))
                                           }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                {/* <Footer />   */}
            </div>  
    )
}

export default CheckOut;
