import React, { useContext } from 'react';
import Router, { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_PRODUCT, MY_PRODUCTS } from '../../graphql/Products';
import { AuthContext } from '../../contexts/AuthProvider';
import { ADD_TO_CART } from '../../graphql/Carts';


const ProductDetail = () => {
    const route = useRouter()
    const { data, loading, error } = useQuery(QUERY_PRODUCT, { variables: { id: route.query.productId } })
    console.log('ProductID:', route.query.productId)
    const { user } = useContext(AuthContext)
    console.log("produc Id", data)

    const [addToCart] = useMutation(ADD_TO_CART, {
        onCompleted: data => {
            console.log('data', data)
        },
        refetchQueries: [{ query: MY_PRODUCTS }]
    })

    const handleAddToCart = async (id) => {
        // console.log('product_id:',  id)

        if (!user) {
            return Router.push('/signin')
        }
        await addToCart({ variables: { id } })
    }

    //    console.log('result', data)
    if (error) return <p>Ooops....! Something went wrong, Plz try again later</p>
    if (loading) return <p>loading...</p>


    return (
        <>
            <section className="section product__detail">
                <div className="details container">
                    <div className="left">
                        <div className="main">
                            <img src={data.product.imageUrl} alt={data.product.description} />
                        </div>
                        <div className="thumbnails">
                            <div className="thumbnail">
                                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product12_aznyjk.jpg" alt />
                            </div>
                            <div className="thumbnail">
                                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product12_aznyjk.jpg" alt />
                            </div>
                            <div className="thumbnail">
                                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product12_aznyjk.jpg" alt />
                            </div>
                            <div className="thumbnail">
                                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product12_aznyjk.jpg" alt />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <span>Home/T-shirt</span>
                        <h1>{data.product.name}</h1>
                        <div className="price">$50</div>
                        <form>
                            <div>
                                <select>
                                    <option value="Select Size" selected  disabled>
                                        Select Size
                                    </option>
                                    <option value={1}>32</option>
                                    <option value={2}>42</option>
                                    <option value={3}>52</option>
                                    <option value={4}>62</option>
                                </select>
                                <span><i className="ti-angle-down" /></span>
                            </div>
                        </form>
                        <form className="form">
                            <input type="text" placeholder={1} />
                            <a href="cart.html" className="addCart">Add To Cart</a>
                        </form>
                        <h3>Product Detail</h3>
                        <p>{data.product.description}</p>
                    </div>
                </div>
            </section>
            
            {/* Related Products */}
            <section className="section related__products">
                <div className="title">
                    <h2>Related Products</h2>
                    <span>Select from the premium product brands and save plenty money</span>
                </div>
                <div className="product__layouts container">
                <div className="product">
                        <div className="img__container">
                            <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product14_fxegrl.jpg" alt="" />
                            <div className="addCart">
                                <i className="ti-shopping-cart" />
                            </div>
                            <ul className="side__icons">
                                <span><i className="ti-search" /></span>
                                <span><i className="ti-heart" /></span>
                                <span><i className="ti-layout-slider" /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="#">Bambi Print Mini Backpack</a>
                            <div className="price">
                                <span>$150</span>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="img__container">
                            <img src="https://res.cloudinary.com/swizce/image/upload/v1610534027/product13_jeocrb.jpg" alt="" />
                            <div className="addCart">
                                <i className="ti-shopping-cart" />
                            </div>
                            <ul className="side__icons">
                                <span><i className="ti-search" /></span>
                                <span><i className="ti-heart" /></span>
                                <span><i className="ti-layout-slider" /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="#">Bambi Print Mini Backpack</a>
                            <div className="price">
                                <span>$150</span>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="img__container">
                            <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product11_smupbk.jpg" alt="" />
                            <div className="addCart">
                                <i className="ti-shopping-cart" />
                            </div>
                            <ul className="side__icons">
                                <span><i className="ti-search" /></span>
                                <span><i className="ti-heart" /></span>
                                <span><i className="ti-layout-slider" /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="#">Bambi Print Mini Backpack</a>
                            <div className="price">
                                <span>$150</span>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="img__container">
                            <img src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product5_hb1iim.jpg" alt="" />
                            <div className="addCart">
                                <i className="ti-shopping-cart" />
                            </div>
                            <ul className="side__icons">
                                <span><i className="ti-search" /></span>
                                <span><i className="ti-heart" /></span>
                                <span><i className="ti-layout-slider" /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="#">Bambi Print Mini Backpack</a>
                            <div className="price">
                                <span>$150</span>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="img__container">
                            <img src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product4_rnvclc.jpg" alt="" />
                            <div className="addCart">
                                <i className="ti-shopping-cart" />
                            </div>
                            <ul className="side__icons">
                                <span><i className="ti-search" /></span>
                                <span><i className="ti-heart" /></span>
                                <span><i className="ti-layout-slider" /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="#">Bambi Print Mini Backpack</a>
                            <div className="price">
                                <span>$150</span>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="img__container">
                            <img src="https://res.cloudinary.com/swizce/image/upload/v1610534024/product6_ridrxd.jpg" alt="" />
                            <div className="addCart">
                                <i className="ti-shopping-cart" />
                            </div>
                            <ul className="side__icons">
                                <span><i className="ti-search" /></span>
                                <span><i className="ti-heart" /></span>
                                <span><i className="ti-layout-slider" /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="#">Bambi Print Mini Backpack</a>
                            <div className="price">
                                <span>$150</span>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="img__container">
                            <img src="https://res.cloudinary.com/swizce/image/upload/v1610533570/product7_jfkluc.jpg" alt="" />
                            <div className="addCart">
                                <i className="ti-shopping-cart" />
                            </div>
                            <ul className="side__icons">
                                <span><i className="ti-search" /></span>
                                <span><i className="ti-heart" /></span>
                                <span><i className="ti-layout-slider" /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="#">Bambi Print Mini Backpack</a>
                            <div className="price">
                                <span>$150</span>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="img__container">
                            <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product10_nv4hj3.jpg" alt="" />
                            <div className="addCart">
                                <i className="ti-shopping-cart" />
                            </div>
                            <ul className="side__icons">
                                <span><i className="ti-search" /></span>
                                <span><i className="ti-heart" /></span>
                                <span><i className="ti-layout-slider" /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="#">Bambi Print Mini Backpack</a>
                            <div className="price">
                                <span>$150</span>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="img__container">
                            <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product14_fxegrl.jpg" alt="" />
                            <div className="addCart">
                                <i className="ti-shopping-cart" />
                            </div>
                            <ul className="side__icons">
                                <span><i className="ti-search" /></span>
                                <span><i className="ti-heart" /></span>
                                <span><i className="ti-layout-slider" /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="#">Bambi Print Mini Backpack</a>
                            <div className="price">
                                <span>$150</span>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="img__container">
                            <img src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product5_hb1iim.jpg" alt="" />
                            <div className="addCart">
                                <i className="ti-shopping-cart" />
                            </div>
                            <ul className="side__icons">
                                <span><i className="ti-search" /></span>
                                <span><i className="ti-heart" /></span>
                                <span><i className="ti-layout-slider" /></span>
                            </ul>
                        </div>
                        <div className="bottom">
                            <a href="#">Bambi Print Mini Backpack</a>
                            <div className="price">
                                <span>$150</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail;
