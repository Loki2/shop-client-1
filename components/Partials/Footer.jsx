import React from 'react';

const Footer = () => {
    return (
        <>
            {/* footer section */}
            <footer id="footer" className="section footer">
                <div className="container">
                    <div className="footer-container">
                        <div className="footer-center">
                            <h3>EXTRAS</h3>
                            <a href="/Brands">Brands</a>
                            <a href="/Categories">Categories</a>
                            <a href="/Specials">Specials</a>
                            <a href="/Recruit">Recruitment</a>
                            <a href="/Feeds">Feeds</a>
                        </div>
                        <div className="footer-center">
                            <h3>INFORMATION</h3>
                            <a href="/About">About Us</a>
                            <a href="/Service">Customer Service</a>
                            <a href="/Privacy">Privacy Policy</a>
                            <a href="/Terms">Terms &amp; Conditions</a>
                            <a href="/Contact">Contact Us</a>
                            <a href="/Feedback">Feedback</a>
                        </div>
                        <div className="footer-center">
                            <h3>Customer Care</h3>
                            <a href="/">Help Center</a>
                            <a href="/">Orders & Payment</a>
                            <a href="/">Return & Refunds</a>
                            <a href="/">Shipping & Delivery</a>
                            <a href="/">Contact Us</a>
                        </div>
                        <div className="footer-center">
                            <h3>MY ACCOUNT</h3>
                            <a href="/admin">My Store</a>
                            <a href="/Orders">Order History</a>
                            <a href="/WishList">Wish List</a>
                            <a href="/Subscriber">Newsletter</a>
                            <a href="/">Returns</a>
                        </div>
                        <div className="footer-center">
                            <h3>CONTACT US</h3>
                            <div>
                                <span>
                                    <i className="ti-location-pin" />
                                </span>
                                42 House, Dreammy str, Dreamville, LA
                            </div>
                                        <div>
                                            <span>
                                                <i className="ti-email" />
                                            </span>
                                rixnickl2@gmail.com
                            </div>
                                        <div>
                                            <span>
                                                <i className="ti-mobile" />
                                            </span>
                                (+856)-202-8222-732
                            </div>
                            <div className="payment-methods">
                                <img src="https://res.cloudinary.com/swizce/image/upload/v1617678350/brands_tem/payment_jufugo_wxkip5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
