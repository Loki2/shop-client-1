import React from 'react';
import Sidebar from '../../../components/Partials/Sidebar';
import Header from '../../../components/Partials/Header';


const UserProducts = () => {
    return (
        <>
        <Sidebar />

        <div className="main-content">
        <Header />
            <main>
            <h2>I am from User Products</h2>
            </main>
            
        </div>
        </>
    )
}

export default UserProducts;
