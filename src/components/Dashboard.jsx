import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

import dashboardImg from '../assets/dashboard.jpg'

function Dashboard(props) {

    // handle click event of logout button
    const handleLogout = () => {
        props.history.push('/login');
    }
    const handleCovertToCrypto = () => {
        //props.history.push('/login');
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='object-cover h-full w-full' src={dashboardImg} alt="" />
            </div>
            <div className='bg-gray-800 justify-center'>
                <div class='text-right'>
                    <div class='text-center my-3 py-1.5 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg w-32'>
                        <NavLink id='logout' activeClassName="active" to="/login">Log Out</NavLink>
                    </div>
                </div>
                <h2 className='text-4xl text-white font-bold text-center'>Welcome Sri !</h2>
                <div class="grid grid-rows-2 grid-flow-col gap-2 text-white my-10 px-4 text-center font-bold">
                    <div>Savings Balance: </div>
                    <div>Crypto Balance: </div>
                    <div>£25,000.00</div>
                    <div>0.00</div>
                </div>
                <div class="text-center">
                    <button class='py-1 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg w-100 px-2' onClick={handleCovertToCrypto}>Convert Savings to Crypto</button>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;