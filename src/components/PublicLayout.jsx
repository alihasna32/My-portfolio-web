import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './Layout';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const PublicLayout = () => {
    return (
        <Layout>
            <div className="container mx-auto px-2 sm:px-6 sm:py-6 lg:px-8 py-2">
                <Header />
                <Outlet />
                <Footer />
            </div>
            <ScrollToTop />
        </Layout>
    );
};

export default PublicLayout;
