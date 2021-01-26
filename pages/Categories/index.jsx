import React from 'react';
import Categories from '../../components/Categories';
import Header from '../../components/Partials/Header';
import Sidebar from '../../components/Partials/Sidebar';

const Category = () => {
    return (
        <>
            <Sidebar />
            <div className="main-categories-content">
                <Header />

                <main>
                        <Categories />
                </main>
            </div>
        </>
    )
}

export default Category;
