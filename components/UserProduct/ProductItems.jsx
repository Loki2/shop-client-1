import React from "react";
import Router from "next/router";

const ProductItems = ({ product }) => {
  console.log("Product:", product)
  return (
    <>
      <tr>
        <td className="td-team">
          <img src={product.imageUrl} alt={product.name} width="45px" />
        </td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>${product.price}</td>
        <td>{product.stockqty}</td>
        <td>Package</td>
        <td>
          <span onClick={() => Router.push("/admin/products/ProductInfo")} className="badge success">...</span>
        </td>
      </tr>
    </>
  );
};

export default ProductItems;