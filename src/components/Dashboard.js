import { useState,useEffect } from 'react';
import '../style/style.css'
import Profile from './Profile'
import Sections from './Sections';

const Dashboard = () => {
    return (
        <>
            <section className="dashboard">
                <Profile />
                <Sections />
            </section >
        </>
    );
}

export default Dashboard;