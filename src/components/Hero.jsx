import React, { useState, useEffect } from 'react';
import profileImg from '../assets/Profile.png';
import { Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/profile');
                if (response.ok) {
                    const data = await response.json();
                    setProfileData(data);
                }
            } catch (error) {
                console.error('Failed to fetch profile', error);
            }
        };
        fetchProfile();
    }, []);

    // Fallback values or empty strings
    const {
        name,
        description,
        email,
        phone,
        whatsapp,
        facebook,
        instagram,
        github,
        linkedin
    } = profileData || {};

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
        navigator.clipboard.writeText(email || "muktermukter555@gmail.com");
        showToast();
        setTimeout(() => {
            window.location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new";
        }, 1000);
    };

    return (
        <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-sm border border-white/10 shadow-lg p-6 rounded-lg">
            <img alt="Portrait of Ali Hasan" className="rounded-lg mb-6 mx-auto w-full max-w-xs h-full" src={profileImg} />
            <h1 className="text-3xl font-bold text-white mb-2">{name || "Md. Ali Hasan"}</h1>
            <p className="text-gray-300 mb-6">
                {description || "Motivated Full-Stack developer (MERN Stack) aiming to start a professional career in the tech industry. I want to apply my skills in building efficient and user‐friendly web applications and grow through continuous learning."}
            </p>
            <div className="border border-gray-600 p-4 rounded-lg mb-6 text-sm space-y-2">
                <p className="text-gray-300">Email: {email || 'muktermukter555@gmail.com'}</p>
                <p className="text-gray-300">Phone: {phone || '+8801793973722'}</p>
            </div>
            <div className="flex max-sm:flex-col lg:flex-col xl:flex-row gap-4 mb-6">
                <a
                    href={whatsapp || "https://wa.me/8801793973722"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 hover:bg-primary hover:text-white transition-colors text-sm">
                    <Mail className='w-4'></Mail> WhatsApp SMS
                </a>
                <button
                    onClick={handleEmailClick}
                    className="flex-1 flex items-center justify-center gap-2 border border-gray-600 rounded-lg py-2 px-4 text-gray-300 hover:bg-primary transition-colors text-sm">
                    <Mail className='w-4'></Mail> Copy & Send  Email
                </button>
            </div>
            <div className="flex justify-center gap-4">
                <a className="w-10 h-10 flex items-center justify-center bg-gray-800/60 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-colors" href={facebook || "https://www.facebook.com/md.ali.hasan.164567/"} target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-5" />
                </a>
                <a className="w-10 h-10 flex items-center justify-center bg-gray-800/60 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-colors" href={instagram || "https://www.instagram.com/md_ali_hasan121/"} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5" />
                </a>
                <a className="w-10 h-10 flex items-center justify-center bg-gray-800/60 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-colors" href={github || "https://github.com/alihasna32"} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5" />
                </a>
                <a className="w-10 h-10 flex items-center justify-center bg-gray-800/60 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-colors" href={linkedin || "https://www.linkedin.com/in/md-ali-hasan-1h/"} target="_blank" rel="noopener noreferrer">
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
