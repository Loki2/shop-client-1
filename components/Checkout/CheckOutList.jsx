import React from 'react';
import CheckOutItems from './CheckOutItems';



const CheckOutList = ({ carts }) => {
    
    return (
        <>
            <div className="summary-checkout">
                <h3 className="bill-title">Summary Product:</h3>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                    carts.map(item =>
                                    <CheckOutItems key={item.id} item={item} />
                                )
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Total Amount:</th>
                                <th>$
                                {
                                   carts.length > 0 &&
                                    carts.reduce(
                                        (sum, cart) => sum + cart.qualtity * cart.product.price, 0
                                    )}
                                </th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>VAT 10%:</th>
                                <th>$
                                {
                                   carts.length > 0 &&
                                    carts.reduce((sum, cart) => sum + cart.qualtity * cart.product.price *10/100, 0)}
                                </th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Shipping:</th>
                                <th>$10</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Total Charge:</th>
                                <th>$
                                {
                                   carts.length > 0 &&
                                    carts.reduce((sum, cart) => (sum + cart.qualtity * cart.product.price) + sum * 10/100, 0)}
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CheckOutList;
