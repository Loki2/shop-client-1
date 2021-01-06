import React from 'react';
import Banner from '../components/Banner';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from '../graphql/Products';
import ProductItem from '../components/Products/ProductItem';


function Home() {
    const { data, loading, error } = useQuery(QUERY_PRODUCTS) //, {pollInterval:3000} Add pollInterval to refresh page per second
    if (error) return <p>Ooops....! Something went wrong, Plz try again later</p>
    if (loading) return <p>loading...</p>

    return (
        <>
            <div className="home-page">
                <main>
                    {/* <Banner /> */}
                    {/* main Product grids */}
                    <section className="recent-product">
                        <h2 className="dash-title">Recently Products</h2>
                        <div className="home-product-cards">

                            {
                                data.products.map(prod =>
                                    <ProductItem key={prod.id} prod={prod} />
                                )
                            }
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Home;
