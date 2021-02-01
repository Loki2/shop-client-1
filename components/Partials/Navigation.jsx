import React, { useContext, useEffect } from 'react';
import Router  from 'next/router';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from '../../graphql/User';
// import { MY_CARTS } from '../../graphql/Carts';


const Navigation = () => {
    // const [menuActive, setMenuActive] = useState(false);
    const { user, signout, setAuthUser } = useContext(AuthContext);
    const { data } = useQuery(QUERY_USER);


    console.log("User from Navigation:", user)
    
    useEffect(() => {
        if (data) {
            setAuthUser(data.user)
        }
    }, [data])
    return (
        <>
            <nav className="nav">
                <div className="wrapper container">
                    <div className="logo"><a href="">Ozone Shoppy</a></div>
                    <ul className="nav__list">
                        <div className="top">
                            <label htmlFor="" className="btn btn__close"><i className="ti-close" /></label>
                        </div>
                        <li><a href="/">ຫນ້າຫລັກ</a></li>
                        <li><a href="/Products">ສີນຄ້າ</a></li>
                        <li>
                            <a href="#" className="desktop__items">ຮ້ານຄ້າ<span><i className="ti-angle-down" /></span></a>
                            <input type="checkbox" name="showMega" id="showMega" />
                            <label htmlFor="showMega" className="mobile__items">
                                <span>ຮ້ານທັງຫມົດ<i className="ti-angle-down" /></span>
                            </label>
                            <div className="mega__box">
                                <div className="content">
                                    <div className="row">
                                        <img src="https://www.changiairport.com/content/dam/cag/shop/world-class-shopping/shopping-directory-thumbnail.png" alt="" />
                                    </div>
                                    <div className="row">
                                        {/* <header>Shops Layout</header> */}
                                        <ul className="mega__links">
                                            <li><a href="#">Electronica Category</a></li>
                                            <li><a href="#">Fashion Category</a></li>
                                            <li><a href="#">Compute Category</a></li>
                                            <li><a href="#">Mobile Category</a></li>
                                            <li><a href="#">Home Kitchen Category</a></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        {/* <header>Filter Layout</header> */}
                                        <ul className="mega__links">
                                            <li><a href="#">By Sidebar</a></li>
                                            <li><a href="#">Filter Default</a></li>
                                            <li><a href="#">Filter Drawer</a></li>
                                            <li><a href="#">Filter Dropdown</a></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        {/* <header>Products Layout</header> */}
                                        <ul className="mega__links">
                                            <li><a href="#">Layout Zoom</a></li>
                                            <li><a href="#">Layout Sticky</a></li>
                                            <li><a href="#">Layout Flex</a></li>
                                            <li><a href="#">Layout Scroll</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="desktop__items">Vendor <span><i className="ti-angle-down" /></span></a>
                            <input type="checkbox" name="showDropdown1" id="showDropdown1" />
                            <label htmlFor="showDropdown1" className="mobile__items">
                                <span>Vendor<i className="ti-angle-down" /></span>
                            </label>
                            <ul className="drop-menu1">
                                <li><a href="#">Vendor Store List</a></li>
                                <li><a href="#">Store Detail</a></li>
                                <li><a href="#">Evo Store</a></li>
                                <li><a href="#">Orgs Store</a></li>
                                <li><a href="#">Cafe Style</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="desktop__items">ຊ່ວຍເຫລືອ <span><i className="ti-angle-down" /></span></a>
                            <input type="checkbox" name="showDropdown2" id="showDropdown2" />
                            <label htmlFor="showDropdown2" className="mobile__items">
                                <span>Help<i className="ti-angle-down" /></span>
                            </label>
                            <ul className="drop-menu2">
                                <li><a href="#">Customer Service</a></li>
                                <li><a href="#">Feeds back</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Faq</a></li>
                            </ul>
                        </li>
                        <li>
                            {
                                user && (
                                    <>
                                        <a href="#" className="desktop__items">My Account <span><i className="ti-angle-down" /></span></a>
                                        <input type="checkbox" name="showDropdown2" id="showDropdown3" />
                                        <label htmlFor="showDropdown3" className="mobile__items">
                                            <span>My Account<i className="ti-angle-down" /></span>
                                        </label>
                                        <ul className="drop-menu3">
                                            <li><a href="/admin">My Shop</a></li>
                                            <li><a href="/Profile/Notification">Notification</a></li>
                                            <li><a href="/User/Setting">Setting</a></li>
                                            <li><a type="button" onClick={signout}>Signout</a></li>
                                        </ul>
                                    </>
                                )
                            }
                            {
                                !user && (
                                    <>
                                        <a href="#" className="desktop__items">My Account <span><i className="ti-angle-down" /></span></a>
                                        <input type="checkbox" name="showDropdown2" id="showDropdown3" />
                                        <label htmlFor="showDropdown3" className="mobile__items">
                                            <span>My Account<i className="ti-angle-down" /></span>
                                        </label>
                                        <ul className="drop-menu3">
                                            <li><a href="/admin">My Shop</a></li>
                                            <li><a href="#">Notification</a></li>
                                            <li><a href="#">Setting</a></li>
                                            <li><a href="/Signin">Signin</a></li>
                                            <li><a href="/signup">Signup</a></li>
                                        </ul>
                                    </>
                                )
                            }

                        </li>
                        <li className="icons">
                            {
                                user && (
                                    <>
                                        <span>
                                            <i className="ti-shopping-cart"  onClick={() => Router.push('/Carts')}>
                                                <small className="count d-flex">
                                                {user && user.carts && user.carts.length === 0 && 0}
                                                {
                                                    user &&
                                                    user.carts &&
                                                    user.carts.length > 0 &&
                                                    user.carts.reduce((sum, item) => sum + item.qualtity, 0)
                                                }
                                                </small>
                                                </i>
                                        </span>
                                    </>
                                )
                            }
                        </li>
                        <li className="icons">
                            <span>
                                <i className="ti-world"><small className="count d-flex">En</small></i>
                            </span>
                        </li>
                    </ul>
                    <label htmlFor="" className="btn btn__open"><i className="ti-menu" /></label>
                </div>
            </nav>
        </>
    )
}

export default Navigation;