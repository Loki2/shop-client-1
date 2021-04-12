import React, { useContext, useEffect } from "react";
import Router from "next/router";
import { AuthContext } from "../../contexts/AuthProvider";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_USER } from "../../graphql/User";
// import { MY_CARTS } from '../../graphql/Carts';

const Navigation = () => {
  // const [menuActive, setMenuActive] = useState(false);
  const { user, signout, setAuthUser } = useContext(AuthContext); //
  const { data, error, loading } = useQuery(QUERY_USER)
  // console.log("User from Navigation:", user);

  
  useEffect(() => {
    if (data) {
      setAuthUser(data.user);
    }
  }, [data]);
  return (
    <>
      <nav className="nav">
        <div className="wrapper container">
          <div className="logo">
            <a href="/">
              <img src="https://res.cloudinary.com/swizce/image/upload/v1617715638/brands_logo/logo3_q32dge.png" alt="" height="38px"/>
            </a>
          </div>
          <ul className="nav__list">
            <div className="top">
              <label htmlFor="" className="btn btn__close">
                <i className="ti-close" />
              </label>
            </div>
            <li>
              <a href="/">ໜ້າຫຼັກ</a>
            </li>
            <li>
              <a href="/Products">ສິນຄ້າ</a>
            </li>
            <li>
              <a href="#" className="desktop__items">
                ຮ້ານຄ້າ
                <span>
                  <i className="ti-angle-down" />
                </span>
              </a>
              <input type="checkbox" name="showMega" id="showMega" />
              <label htmlFor="showMega" className="mobile__items">
                <span>
                  ຮ້ານທັງຫມົດ
                  <i className="ti-angle-down" />
                </span>
              </label>
              <div className="mega__box">
                <div className="content">
                  <div className="row">
                    <img
                      src="https://res.cloudinary.com/swizce/image/upload/v1617679139/promotion_tem/dailing_shop_fozhf2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="row">
                    {/* <header>Shops Layout</header> */}
                    <ul className="mega__links">
                      <li>
                        <a href="#">Electronica Category</a>
                      </li>
                      <li>
                        <a href="#">Fashion Category</a>
                      </li>
                      <li>
                        <a href="#">Compute Category</a>
                      </li>
                      <li>
                        <a href="#">Mobile Category</a>
                      </li>
                      <li>
                        <a href="#">Home Kitchen Category</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    {/* <header>Filter Layout</header> */}
                    <ul className="mega__links">
                      <li>
                        <a href="#">By Sidebar</a>
                      </li>
                      <li>
                        <a href="#">Filter Default</a>
                      </li>
                      <li>
                        <a href="#">Filter Drawer</a>
                      </li>
                      <li>
                        <a href="#">Filter Dropdown</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    {/* <header>Products Layout</header> */}
                    <ul className="mega__links">
                      <li>
                        <a href="#">Layout Zoom</a>
                      </li>
                      <li>
                        <a href="#">Layout Sticky</a>
                      </li>
                      <li>
                        <a href="#">Layout Flex</a>
                      </li>
                      <li>
                        <a href="#">Layout Scroll</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="desktop__items">
                Vendor{" "}
                <span>
                  <i className="ti-angle-down" />
                </span>
              </a>
              <input type="checkbox" name="showDropdown1" id="showDropdown1" />
              <label htmlFor="showDropdown1" className="mobile__items">
                <span>
                  Vendor
                  <i className="ti-angle-down" />
                </span>
              </label>
              <ul className="drop-menu1">
                <li>
                  <a href="/Store">Vendor Store List</a>
                </li>
                <li>
                  <a href="/Store/Detail">Store Detail</a>
                </li>
                <li>
                  <a href="/Store/Evo">Evo Store</a>
                </li>
                <li>
                  <a href="/Store/Orgs">Orgs Store</a>
                </li>
                <li>
                  <a href="/Store/Cafe">Cafe Style</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="desktop__items">
                ຊ່ວຍເຫລືອ{" "}
                <span>
                  <i className="ti-angle-down" />
                </span>
              </a>
              <input type="checkbox" name="showDropdown2" id="showDropdown2" />
              <label htmlFor="showDropdown2" className="mobile__items">
                <span>
                  Help
                  <i className="ti-angle-down" />
                </span>
              </label>
              <ul className="drop-menu2">
                <li>
                  <a href="/Service">Customer Service</a>
                </li>
                <li>
                  <a href="/Feedback">Feeds back</a>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  <a href="/Contact">Contact</a>
                </li>
                <li>
                  <a href="/Faq">Faq</a>
                </li>
              </ul>
            </li>
            <li>
              {user && (
                <>
                  <a href="#" className="desktop__items">
                    ບັນຊີຂ້ອຍ{" "}
                    <span>
                      <i className="ti-angle-down" />
                    </span>
                  </a>
                  <input
                    type="checkbox"
                    name="showDropdown2"
                    id="showDropdown3"
                  />
                  <label htmlFor="showDropdown3" className="mobile__items">
                    <span>
                      ບັນຊີຂ້ອຍ
                      <i className="ti-angle-down" />
                    </span>
                  </label>
                  <ul className="drop-menu3">
                    <li>
                      <a href="/admin">ໜ້າຮ້ານຂ້ອຍ</a>
                    </li>
                    <li>
                      <a href="/Profile/Notification">ແຈ້ງເຕືອນ(ຍັງບໍ່ທັນເປີດນຳໃຊ້)</a>
                    </li>
                    <li>
                      <a href="/User/Setting">ຕັ້ງຄ່າ(ຍັງບໍ່ທັນເປີດນຳໃຊ້)</a>
                    </li>
                    <li>
                      <a type="button" onClick={signout}>
                        ອອກລະບົບ
                      </a>
                    </li>
                  </ul>
                </>
              )}
              {!user && (
                <>
                  <a href="#" className="desktop__items">
                    ບັນຊີຂ້ອຍ{" "}
                    <span>
                      <i className="ti-angle-down" />
                    </span>
                  </a>
                  <input
                    type="checkbox"
                    name="showDropdown2"
                    id="showDropdown3"
                  />
                  <label htmlFor="showDropdown3" className="mobile__items">
                    <span>
                      ບັນຊີຂ້ອຍ
                      <i className="ti-angle-down" />
                    </span>
                  </label>
                  <ul className="drop-menu3">
                    <li>
                      <a href="/admin">ໜ້າຮ້ານຂ້ອຍ</a>
                    </li>
                    <li>
                      <a href="#">ແຈ້ງເຕືອນ(ຍັງບໍ່ທັນເປີດນຳໃຊ້)</a>
                    </li>
                    <li>
                      <a href="#">ຕັ້ງຄ່າ(ຍັງບໍ່ທັນເປີດນຳໃຊ້)</a>
                    </li>
                    <li>
                      <a href="/Signin">ເຂົ້າລະບົບ</a>
                    </li>
                    <li>
                      <a href="/signup">ສະໝັກ</a>
                    </li>
                  </ul>
                </>
              )}
            </li>
            <li className="icons">
              {user && (
                <>
                  <span>
                    <i
                      className="ti-shopping-cart"
                      onClick={() => Router.push("/Carts")}
                    >
                      <small className="count d-flex">
                        {user && user.carts && user.carts.length === 0 && 0}
                        {user &&
                          user.carts &&
                          user.carts.length > 0 &&
                          user.carts.reduce(
                            (sum, item) => sum + item.quantity,
                            0
                          )}
                      </small>
                    </i>
                  </span>
                </>
              )}
            </li>
            <li className="icons">
              <span>
                <i className="ti-world">
                  <small className="count d-flex">En</small>
                </i>
              </span>
            </li>
          </ul>

          <label htmlFor="" className="btn btn__open">
            <i className="ti-menu" />
          </label>
        </div>

        <div className="search__box">
          <select name="" id="">
            <option value="1" disabled>ປະເພດສິນຄ້າ</option>
            <option value="1">ເຄື່ອງໃຊ້ໄຟຟ້າ</option>
            <option value="1">ເຄື່ອງຄອມພີວເຕີ້</option>
            <option value="1">ເຄື່ອງມືເສີ່ມຄອມພີວເຕີ້</option>
            <option value="1">ອຸປະກອນໂທລະສັບ, ມືຖື</option>
            <option value="1">ເຄື່ອງໃຊ້ຊ່ອຍ</option>
            <option value="1">ເຄືອງນຸງຫົມ</option>
            <option value="1">ວັດສະດຸກໍ່ສ້າງ</option>
            <option value="1">ອຸປະກອນອາໄລລົດ</option>
            <option value="1">ເຄື່ອງຊຳອ່າງ</option>
            <option value="1">ເຄື່ອງກິລາ</option>
            <option value="1">ເຄື່ອງຫລີ້ນເດັກນ້ອຍ</option>
            <option value="1">ເຄື່ອງນຸງສຳລັບຜູ້ຍິງ</option>
            <option value="1">ເຄື່ອງຫັດຖະກຳ</option>
            <option value="1">ເຄື່ອງດີນປັ່ນ</option>
          </select>
          <input type="text" placeholder="ຄົ້ນຫາບາງຢ່າງ..."/>
          <span>
            <i className="ti-search"></i>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navigation;