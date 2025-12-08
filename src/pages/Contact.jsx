import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Github, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <main className="space-y-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-2">Get In Touch</h1>
                    <p className="text-gray-300">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <ContactForm />
                    </div>
                    <div className="space-y-8">
                        <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-sm border border-white/10 shadow-lg p-8 rounded-lg">
                            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                            <div className="space-y-4 text-gray-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex-shrink-0 bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                                        <Mail />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-200">Email</p>
                                        <a
                                            onClick={handleEmailClick}
                                            className="hover:text-primary transition-colors cursor-pointer flex flex-wrap" href="mailto:muktermukter@gmail.com">muktermukter@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex-shrink-0 bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                                        <Phone />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-200">Phone</p>
                                        <a className="hover:text-primary transition-colors" href="tel:+8801793973722">+8801793973722</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex-shrink-0 bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                                        <MapPin />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-200">Address</p>
                                        <p>Bogura, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <a className="w-10 h-10 flex items-center justify-center bg-gray-800/60 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-colors" href="https://www.facebook.com/md.ali.hasan.164567/">
                                <Facebook className="w-5" />
                            </a>
                            <a className="w-10 h-10 flex items-center justify-center bg-gray-800/60 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-colors" href="https://www.instagram.com/md_ali_hasan121/">
                                <Instagram className="w-5" />
                            </a>
                            <a className="w-10 h-10 flex items-center justify-center bg-gray-800/60 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-colors" href="https://github.com/alihasna32">
                                <Github className="w-5" />
                            </a>
                            <a className="w-10 h-10 flex items-center justify-center bg-gray-800/60 rounded-full text-gray-300 hover:bg-primary hover:text-white transition-colors" href="https://www.linkedin.com/in/md-ali-hasan-1h/">
                                <Linkedin className="w-5" />
                            </a>
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
        </motion.div>
    );
};

export default Contact;
