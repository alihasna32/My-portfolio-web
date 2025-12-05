import React from 'react';
import profile from '../assets/Profile.png';
import { Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react';
const Hero = () => {

    const email = 'muktermukter555@gmail.com';

    const showToast = () => {
        const toast = document.getElementById("customToast");
        toast.classList.remove("opacity-0");
        toast.classList.add("opacity-100");

        setTimeout(() => {
            toast.classList.add("opacity-0");
            toast.classList.remove("opacity-100");
        }, 1500);
    };

    const handleEmailClick = async () => {
        navigator.clipboard.writeText("muktermukter555@gmail.com");
        showToast();
        setTimeout(() => {
            window.location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new";
        }, 1000);
    };

    return (
        <div className="bg-gray-200/30 dark:bg-gray-900/40 p-6 rounded-lg border border-gray-300 dark:border-gray-700">
            <img alt="Portrait of Mark Alexander" className="rounded-lg mb-6 mx-auto w-full max-w-xs h-full" src={profile} />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Md. Ali Hasan</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Motivated Full-Stack developer (MERN Stack) aiming to start a professional career in the tech industry. I
                want to apply my skills in building efficient and user‐friendly web applications and grow through continuous
                learning.</p>
            <div className="bg-gray-300/30 dark:bg-gray-800/40 p-4 rounded-lg mb-6 text-sm">
                <p className="text-gray-700 dark:text-gray-300">Email: {email}</p>
                <p className="text-gray-700 dark:text-gray-300">Phone: +8801793973722</p>
            </div>
            <div className="flex gap-4 mb-6">
                <a
                    href="https://wa.me/8801793973722"
                    target="_blank"
                    rel="Ali Hasan Whats app"
                    className="btn btn-success flex-1 flex items-center justify-center gap-2 border border-gray-400 dark:border-gray-600 rounded-lg py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-sm">
                    <Mail className='w-4'></Mail> WhatsApp SMS
                </a>
                <button
                    onClick={handleEmailClick}
                    className="flex-1 flex items-center justify-center gap-2 border border-gray-400 dark:border-gray-600 rounded-lg py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-sm">
                    <Mail className='w-4'></Mail> Copy & Send  Email
                </button>
            </div>
            <div className="flex justify-center gap-4">
                <a className="w-10 h-10 flex items-center justify-center bg-gray-300/50 dark:bg-gray-800/60 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors" href="https://www.facebook.com/md.ali.hasan.164567/">
                    <Facebook className="w-5" />
                </a>
                <a className="w-10 h-10 flex items-center justify-center bg-gray-300/50 dark:bg-gray-800/60 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors" href="https://www.instagram.com/md_ali_hasan121/">
                    <Instagram className="w-5" />
                </a>
                <a className="w-10 h-10 flex items-center justify-center bg-gray-300/50 dark:bg-gray-800/60 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors" href="https://github.com/alihasna32">
                    <Github className="w-5" />
                </a>
                <a className="w-10 h-10 flex items-center justify-center bg-gray-300/50 dark:bg-gray-800/60 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors" href="#">
                    <Linkedin className="w-5" />
                </a>
            </div>

            {/* 🔔 CUSTOM TOAST */}
            <div
                id="customToast"
                className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-500 opacity-0 pointer-events-none"
            >
                Email Copied!
            </div>

        </div>
    );
};

export default Hero;
