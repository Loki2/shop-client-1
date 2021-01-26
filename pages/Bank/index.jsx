import React from 'react';
import Header from '../../components/Partials/Header';
import Sidebar from '../../components/Partials/Sidebar';
import UserBankAc from '../../components/UserBankAc';


const UserBankAcs = () => {
    return (
        <>
            <Sidebar />
            <div className="main-bankAcs-content">
                    <Header />
                    <main>
                        <UserBankAc />
                    </main>
            </div>
        </>
    )
}

export default UserBankAcs;
