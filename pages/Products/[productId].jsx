import React from 'react'
import Footer from '../../components/Partials/Footer';
import Navigation from '../../components/Partials/Navigation';
import ProductDetail from '../../components/Products/ProductDetail';

const ProductPage = () => {
    return (
        <>
            <Navigation />
            <ProductDetail />
            <Footer />
        </>
    )
}

export default ProductPage;