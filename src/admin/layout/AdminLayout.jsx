import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import GlowingBackground from '../../components/GlowingBackground';

const AdminLayout = () => {
    // We can use a checkbox for CSS-only toggle or React state.
    // Given the complexity of "mini" sidebar, state is useful.
    // However, sticking to the DaisyUI drawer structure requested:

    return (
        <div className="drawer lg:drawer-open font-display text-gray-100 min-h-screen">
            <input id="admin-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col min-h-screen relative">
                <GlowingBackground />
                {/* Content Wrapper */}
                <div className="relative z-10 flex flex-col h-full">
                    <Header />
                    <main className="flex-1 p-6 overflow-y-auto">
                        <Outlet />
                    </main>
                </div>
            </div>

            <div className="drawer-side z-50">
                <label htmlFor="admin-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <Sidebar />
            </div>
        </div>
    );
};

export default AdminLayout;
