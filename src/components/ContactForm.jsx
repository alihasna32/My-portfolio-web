import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SendHorizontal } from 'lucide-react';

const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY
        )
            .then(async (result) => {
                console.log(result.text);

                // Save to Database
                try {
                    const formData = new FormData(form.current);
                    const messageData = {
                        name: formData.get('user_name'),
                        email: formData.get('user_email'),
                        subject: formData.get('subject'),
                        message: formData.get('message')
                    };

                    await fetch('https://my-portfolio-server-lnc3.onrender.com/api/messages', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(messageData)
                    });
                } catch (err) {
                    console.error("Failed to save message to DB", err);
                }

                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(''), 3000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus(''), 3000);
            });
    };

    return (
        <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-sm border border-white/10 shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Send Me A Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1" htmlFor="user_name">Name</label>
                        <input className="w-full h-9 bg-transparent border-1 rounded-xl border border-gray-600 focus:ring-0 focus:border-primary text-gray-200 px-2" id="user_name" name="user_name" type="text" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1" htmlFor="user_email">Email</label>
                        <input className="w-full h-9 bg-transparent border-1 rounded-xl border border-gray-600 focus:ring-0 focus:border-primary text-gray-200 px-2" id="user_email" name="user_email" type="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1" htmlFor="subject">Subject</label>
                    <input className="w-full h-9 bg-transparent border-1 rounded-xl border border-gray-600 focus:ring-0 focus:border-primary text-gray-200 px-2" id="subject" name="subject" type="text" placeholder="Subject" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1" htmlFor="message">Message</label>
                    <textarea className="w-full h-22 bg-transparent border-1 rounded-xl border border-gray-600 focus:ring-0 focus:border-primary text-gray-200 px-2 py-2" id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button disabled={status === 'sending'} className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white rounded-xl h-10 focus:ring-primary focus:border-primary px-4 hover:bg-blue-500 transition-colors disabled:opacity-50" type="submit">
                    {status === 'sending' ? (
                        'Sending...'
                    ) : (
                        <>
                            <SendHorizontal size={18} />
                            Send Message
                        </>
                    )}
                </button>
                {status === 'success' && <p className="text-green-500 text-sm mt-2 text-center">Message sent successfully!</p>}
                {status === 'error' && <p className="text-red-500 text-sm mt-2 text-center">Failed to send message. Please try again.</p>}
            </form>
        </div>
    );
};

export default ContactForm;
