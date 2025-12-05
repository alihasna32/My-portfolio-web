import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <main className="space-y-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-2">My Portfolio</h1>
                    <p className="text-lg text-gray-300">A collection of my favorite projects.</p>
                </div>
                <div className="flex justify-center mb-8">
                    <div className="flex bg-gray-900/30 space-x-2 p-1.5 rounded-lg border border-gray-700">
                        <button className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary rounded-md">All</button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:bg-primary rounded-md transition-colors">Web Development</button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:bg-primary rounded-md transition-colors">Mobile Apps</button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:bg-primary rounded-md transition-colors">UI/UX Design</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-md border border-white/10 shadow-lg rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <a href="#">
                            <img alt="Project 1: E-commerce Platform" className="w-full h-56 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg0obGj8rmcZs7fl7oUqFSuWfwt6wD8me5dcgslOQXFsSqZXPwBbNm-educW0aRnd3-zmr7GIWaKwDDa75pOGS-OkYSDhG0Bwd87IUduhSAFVyyN7lwg567sK3cdNBZiZJHzB5TE_gyRXrT93JaODOpaoWQoXeI1Ny-74dKG4LZYXFPaeUk9-qo1ccPB5juWlpv47yfGOMxpOgGRv6eNVz9vfgir3qqXYTqHzchnHdvEbz-iP_5RDIGLf5Aw9nZ5R9iOyyQfbf2BM" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">E-commerce Platform</h3>
                                <p className="text-gray-300 text-sm mb-4">A full-stack e-commerce solution with a custom CMS and payment integration.</p>
                                <span className="text-xs font-semibold inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-primary/20 text-primary rounded-full">Web Development</span>
                            </div>  
                        </a>
                    </div>
                    <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-md border border-white/10 shadow-lg rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <a href="#">
                            <img alt="Project 2: Mobile Banking App" className="w-full h-56 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5pN7apFeM77u0loA_onk2eWI_z_aIpoU_zQafBxkMpKFXtwNANhlfkViswAsj-zX1w9UynwEPmLPP68MHww5N08PoZ4-rSo42R4Z0-cpmNyLdxZ4Als8pMobWv4-5lh0vMjVenRfldFanBG1IbFGIVQ-yDKhSxsNJbfM_2HciSc6q62nWMy6lel5tjceodfiP7GyLEu4neRj1qvdKQuVcuZAXSSYumnCs7odiPK8wjPClOTyYE_cz1mK-yxBLI40kFRrDB4HvKmo" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Mobile Banking App</h3>
                                <p className="text-gray-300 text-sm mb-4">Secure and intuitive mobile banking app for iOS and Android.</p>
                                <span className="text-xs font-semibold inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-500/20 text-green-400 rounded-full">Mobile Apps</span>
                            </div>
                        </a>
                    </div>
                    <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-md border border-white/10 shadow-lg rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <a href="#">
                            <img alt="Project 3: SaaS Dashboard Design" className="w-full h-56 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyDAF2V8THuXmoetQ9ouGRMT18dm-dfxHo35VRYxBDYez9K0bVxIeNcGQ_WA1bXCIyWOJ9e-KKtFTBOnyK4S5HANgDudg3RifTEauYEIlIqLA0Fgm0j4CMk-OLLppyu2Q5apFG6rkE7wVSs5JYNZS0k-MnQb9RLCz9c2CizA6PUHhWcGKRPo05guTpOYkd4m7l5yWD4X_FSkAQGuIbQC1KTtDQFpR-ykBP8npEu0FtEwJwO_10AiL-OR9R-jRoNzHSQyM_Cbvi8Dw" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">SaaS Dashboard Design</h3>
                                <p className="text-gray-300 text-sm mb-4">A complete UI/UX overhaul for a data analytics SaaS platform.</p>
                                <span className="text-xs font-semibold inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-purple-500/20 text-purple-400 rounded-full">UI/UX Design</span>
                            </div>
                        </a>
                    </div>
                    <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-md border border-white/10 shadow-lg rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <a href="#">
                            <img alt="Project 4: Travel Planning Website" className="w-full h-56 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlE77tHAtuAYDJck_xo094gxtphQGRnNv5xZxv9Dd5qm-saubf7B8tiimb_G3J41f1QcPGDk36NhPeVkTszxRW38XRZ9_DI-4-QhHEnXy4QOIVG7QoZJOri-2QOpFTqSLtYKGUnK3lij75GbUGNNoy-DwvcYUjb_yn2mZtJiq6z0GjRubqk5XqGO7mDr6y_WPdLtjkNFIE27raA4JY1peliS115Vnbbig_aF2UZA4tlHZEl7omn4AUlnBvZuDTJKUIE9m-tGAZKEM" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Travel Planning Website</h3>
                                <p className="text-gray-300 text-sm mb-4">An interactive web application for planning and booking trips.</p>
                                <span className="text-xs font-semibold inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-primary/20 text-primary rounded-full">Web Development</span>
                            </div>
                        </a>
                    </div>
                    <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-md border border-white/10 shadow-lg rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <a href="#">
                            <img alt="Project 5: Health & Fitness Tracker" className="w-full h-56 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3MZe-4hy4F2jS-Cuzh_9TwcBnGz-IfHt7P3eTBH9wwBWCXxgpCNET2wNHzo8cZut1ua7_DMkH27xYHGviphB6dVTrqqsDHqEDJcPp_kIONbzsQuw2JMRCIkYEfqVFLyt2PTmMxHN81-1fyt7twfmOM_TXEHTCuLY7zPeLAh-q5smmnc9pShc0Fx0uh7VOLrqa2h-NM84K1367wJSVr0_3bcRp_FNxhvz6wPPdrF1G0wa4XHpeDPZgVj3mY3EP6XR1Pyi5EQ0a1aw" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Health & Fitness Tracker</h3>
                                <p className="text-gray-300 text-sm mb-4">A cross-platform mobile app to track workouts and nutrition.</p>
                                <span className="text-xs font-semibold inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-green-500/20 text-green-400 rounded-full">Mobile Apps</span>
                            </div>
                        </a>
                    </div>
                    <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-md border border-white/10 shadow-lg rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                        <a href="#">
                            <img alt="Project 6: Corporate Website Redesign" className="w-full h-56 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_hwXujsntvuyg998Fb10tRuoKCA7fSjGBVcK3G4FV6YLXaSU0SIRwwH2vlNan8URroajn_LuFhf5w6LPmGbzpulUGY6D09nmo3AhUrLK-T5sU7E8phiWrVkQStCPrIiuL8Bxezt1TV-lGFZdt0ZpIkal-PFpME3fLffleFDJYK-Dej0TbAMplJF6gntAe76PHtC3T_EmPqmPi4GyNEW8g_YwUv1eyU5QLfb4sRpI9tpYUVe8lOF5CsJdWVbq3iyVC1kugYtj3xH0" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Corporate Website Redesign</h3>
                                <p className="text-gray-300 text-sm mb-4">Redesigning a major corporate website for better user engagement.</p>
                                <span className="text-xs font-semibold inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline bg-purple-500/20 text-purple-400 rounded-full">UI/UX Design</span>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
        </motion.div>
    );
};

export default Portfolio;
