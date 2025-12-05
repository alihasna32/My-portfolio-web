import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WorkExperience from '../components/WorkExperience';
import ExpertArea from '../components/ExpertArea';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import AvailableForHire from '../components/Available-for-hire';

const Home = () => {
    return (
        <>
            <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-8">
                    <Hero />
                    <Services />
                </div>
                <div className="lg:col-span-2 space-y-8">
                    <div className='w-full'>
                        <AvailableForHire />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <WorkExperience />
                        <ExpertArea />
                    </div>
                    <Gallery />
                    <ContactForm />
                </div>
            </main>
        </>
    );
};

export default Home;
