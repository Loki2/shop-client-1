import React from 'react';
import Router  from 'next/router';


const Header = () => {
    return (
        <>
            {/* Header */}
            <header>
                <div className="search-wrapper">
                    <span className="ti-search" />
                    <input type="search" name="search" id="search" placeholder="Search..." />
                </div>
                <div className="social-icons">
                    <span className="ti-home" onClick={() => Router.push('/')}></span>
                    <span className="ti-bell" />
                    <span className="ti-comment" />
                    <span className="ti-shopping-cart" onClick={() => Router.push('/Cart')}><span>3</span></span>
                    <div></div>
                </div>
            </header>
        </>
    )
}

export default Header;
