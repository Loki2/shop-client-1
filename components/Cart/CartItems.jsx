import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_CART } from '../../graphql/Carts';
import { QUERY_USER } from '../../graphql/User';


const CartItems = ({cart}) => {
    const [deleteCart, {loading, error}] = useMutation(DELETE_CART, {
        onCompleted: data => {
            console.log("Prod ID:", data)
                // setProductData(data.updataProduct)
                // setEdit(false)
        },
        refetchQueries:[{ query: QUERY_USER}]
    })
    const handleSubmit = async() => {
         try {
             await deleteCart({ variables: {id: cart.id}})
         } catch (error) {
             console.log(error)
         }
    }


    return (
        <>
            <tr>
                <td>
                    <div className="cart-info">
                        <img src={cart.product.imageUrl} alt={cart.id} />
                        <div>
                            <p>{cart.product.name}</p>
                            <span>Price: ${cart.product.price}</span>
                            <br />
                            <br />
                            <br />
                            <a onClick={handleSubmit}>{loading ? 'Removing...': error ?  'Error' : 'Remove'}</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" defaultValue={cart.qualtity} min={1} /></td>
                <td>${cart.product.price * cart.qualtity}</td>
            </tr>
        </>
    )
}

export default CartItems;
