import React, { useContext } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { AuthContext } from '../../contexts/AuthProvider';
import { useMutation } from '@apollo/react-hooks';
import { ADD_TO_CART } from '../../graphql/Carts';
import { MY_PRODUCTS } from '../../graphql/Products';


const Products = ({ prod }) => {
    const { user } = useContext(AuthContext);
    //console.log("user", user)
    const [addToCart, { loading, error }] = useMutation(ADD_TO_CART, {
        onCompleted: data => {
            return data;
        },
        refetchQueries: [{ query: MY_PRODUCTS }]
    })
    const handleAddToCart = async (id) => {
        //console.log('product_id:', id)
        if (!user) {
            return Router.push('/Signin')
        }
        await addToCart({ variables: { id } })
    }
    return (
        <>
            <div className="product">
                <div className="img__container">
                    <img src={prod.imageUrl} alt={prod.description} />
                    <div className="addCart">
                        {
                            user && user.id === prod.user.id ?
                                <i className="ti-settings" onClick={() => Router.push('/admin/products')} />
                                :
                                <i className="ti-shopping-cart" onClick={() => handleAddToCart(prod.id)} as={loading ? 'Processing....' : 'Buy Now!'} />
                        }
                    </div>
                    <ul className="side__icons">
                        <span><i className="ti-search" onClick={() => Router.push('/products/collect')}/></span>
                        <span><i className="ti-heart" onClick={() => Router.push('/products/favourite')}/></span>
                        <span><i className="ti-layout-slider" onClick={() => Router.push('/products/category')}/></span>
                    </ul>
                </div>
                <div className="bottom">
                    <Link href='/Products/product_detail' as={`/Products/${prod.id}`}>
                        <a >{prod.name}</a>
                    </Link>

                    <div className="price">
                        <span>${prod.price}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;
