import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/Profile2.png';
import { Download } from 'lucide-react';
import MySkills from '../components/My-skills';
import Education from '../components/Education';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <main className="space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-sm border border-white/10 shadow-lg p-8 rounded-lg"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-1">
                            <img alt="Portrait of Ali Hasan" className="rounded-lg w-full object-cover" src={profile} />
                        </div>
                        <div className="lg:col-span-2">
                            <h1 className="text-4xl font-bold text-white mb-4">About Ali Hasan</h1>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Hi, I’m Ali Hasan — a passionate and dedicated MERN Stack Web Developer with strong skills in building modern, responsive, and user-friendly web applications.I enjoy transforming ideas into functional digital experiences using clean code, organized architecture, and smooth UI/UX.
                            </p>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                I specialize in <span className="font-semibold">JavaScript, React, Node.js, Express, MongoDB,</span> and I love creating fast, secure, and scalable full-stack applications.From crafting pixel-perfect <span className="font-semibold">frontend UI</span> to developing efficient <span className="font-semibold">backend APIs</span>, I aim to deliver complete solutions that actually solve real-world problems.
                            </p>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                I’m constantly learning new technologies, improving my development workflow, and staying updated with modern tools like <span className="font-semibold">Tailwind, DaisyUI, Firebase, Git, and more.</span>Beyond coding, I enjoy collaborating with teams, solving problems creatively, and building projects that showcase real functionality—whether it’s an e-commerce system, booking platform, dashboard, or portfolio website.
                            </p>
                            <a
                                className="inline-flex items-center gap-2 bg-primary text-white rounded-lg py-3 px-6 hover:bg-blue-500 transition-colors"
                                href="https://my-portfolio-server-lnc3.onrender.com/uploads/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Download />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-8"
                >
                    <MySkills />
                    <Education />
                </motion.div>
            </main>
        </motion.div>
    );
};

export default About;
