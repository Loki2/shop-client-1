import React from 'react';
import Header from '../../components/Partials/Header';
import Sidebar from '../../components/Partials/Sidebar';
import UserProfile from '../../components/UserProfile';

const Profile = () => {
    return (
        <>
            <Sidebar />
            <div className="main-profile-content">
                <Header />
                <UserProfile />
            </div>
            </>
    )
}

export default Profile;