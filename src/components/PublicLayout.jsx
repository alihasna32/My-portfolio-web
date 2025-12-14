import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './Layout';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import PageLoader from './PageLoader';

const PublicLayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = React.useCallback(() => {
        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading && <PageLoader onLoadingComplete={handleLoadingComplete} />}
            <Layout>
                <div className="container mx-auto px-2 sm:px-6 sm:py-6 lg:px-8 py-2">
                    <Header />
                    <Suspense fallback={<PageLoader />}>
                        <Outlet />
                    </Suspense>
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </>
    );
};

export default PublicLayout;
