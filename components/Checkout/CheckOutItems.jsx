import React from 'react'

const CheckOutItems = ({item}) => {
    return (
        <>
            <tr>
                <td>{item.product.name}</td>
                <td>{item.product.price}{" "} k</td>
                <td>{item.quantity}</td>
                <td>{item.product.price * item.quantity}{" "} k</td>
            </tr>
        </>
    )
}

export default CheckOutItems
