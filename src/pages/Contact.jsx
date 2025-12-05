import React from 'react';

const showToast = () => {
    const toast = document.getElementById("customToast");
    toast.classList.remove("opacity-0");
    toast.classList.add("opacity-100");

    setTimeout(() => {
        toast.classList.add("opacity-0");
        toast.classList.remove("opacity-100");
    }, 1500);
};
const Contact = () => {
    const handleEmailClick = async () => {
        navigator.clipboard.writeText("muktermukter555@gmail.com");
        showToast();
        setTimeout(() => {
            window.location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new";
        }, 1000);
    };
    return (
        <main className="space-y-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Get In Touch</h1>
                <p className="text-gray-600 dark:text-gray-400">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-gray-200/30 dark:bg-gray-900/40 p-8 rounded-lg border border-gray-300 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me A Message</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
                                <input className="w-full bg-gray-300/40 dark:bg-gray-800/60 border-gray-400 dark:border-gray-600 rounded-xl h-9 focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-200 px-2" id="name" placeholder="Your Name" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
                                <input className="w-full bg-gray-300/40 dark:bg-gray-800/60 border-gray-400 dark:border-gray-600 rounded-xl h-9 focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-200 px-2" id="email" placeholder="Your Email" type="email" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="subject">Subject</label>
                            <input className="w-full bg-gray-300/40 dark:bg-gray-800/60 border-gray-400 dark:border-gray-600 rounded-xl h-9 focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-200 px-2" id="subject" placeholder="Subject" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
                            <textarea className="w-full bg-gray-300/40 dark:bg-gray-800/60 border-gray-400 dark:border-gray-600 rounded-xl h-24 focus:ring-primary focus:border-primary text-gray-700 dark:text-gray-200 px-2" id="message" placeholder="Your Message" rows="5"></textarea>
                        </div>
                        <div>
                            <button className="inline-flex items-center gap-2 bg-primary text-white rounded-xl h-9 focus:ring-primary focus:border-primary px-2 hover:bg-blue-500 transition-colors" type="submit">
                                <span className="material-icons-outlined">send</span>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className="space-y-8">
                    <div className="bg-gray-200/30 dark:bg-gray-900/40 p-8 rounded-lg border border-gray-300 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                        <div className="space-y-4 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 flex-shrink-0 bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                                    <span className="material-icons-outlined">email</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">Email</p>
                                    <a
                                        onClick={handleEmailClick}
                                        className="hover:text-primary transition-colors cursor-pointer flex flex-wrap" href="mailto:muktermukter@gmail.com">muktermukter@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 flex-shrink-0 bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                                    <span className="material-icons-outlined">phone</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">Phone</p>
                                    <a className="hover:text-primary transition-colors" href="tel:+8801793973722">+8801793973722</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 flex-shrink-0 bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                                    <span className="material-icons-outlined">location_on</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">Address</p>
                                    <p>Bogura, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200/30 dark:bg-gray-900/40 p-8 rounded-lg border border-gray-300 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-300 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors" href="#">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"></path></svg>
                            </a>
                            <a className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-300 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors" href="#">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                            </a>
                            <a className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-300 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors" href="#">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.8h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.634zM6.936 6.953c-1.134 0-2.05- .916-2.05-2.05s.916-2.05 2.05-2.05 2.05.916 2.05 2.05-.916 2.05-2.05 2.05zm1.778 13.499h-3.554v-11.8h3.554z"></path></svg>
                            </a>
                            <a className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 bg-gray-300 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors" href="#">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.022 17.828c-1.216 0-2.18-.98-2.18-2.196 0-1.23.964-2.212 2.18-2.212s2.216.982 2.216 2.212c0 1.217-.998 2.196-2.216 2.196zm7.262-4.116c-1.363 0-2.152-1.21-2.152-2.248 0-.964.57-1.636 1.48-1.636.924 0 1.397.673 1.397 1.545 0 .285-.228.497-.533.497s-.532-.212-.532-.497c0-.44-.228-.772-.85-.772-.544 0-.85.456-.85.867 0 .544.47 1.437 1.706 1.437.285 0 .506.212.506.496s-.22.497-.506.497zm-3.266-7.712c-.285 0-.44-.212-.44-.497v-1.68c0-.285.155-.496.44-.496h3.45c.285 0 .44.21.44.496v1.68c0 .285-.155.497-.44.497h-3.45z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 🔔 CUSTOM TOAST */}
            <div
                id="customToast"
                className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-500 opacity-0 pointer-events-none"
            >
                Email Copied!
            </div>
        </main>
    );
};

export default Contact;
