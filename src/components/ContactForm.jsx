import React from 'react';

const ContactForm = () => {
    return (
        <div className="bg-gray-500/10 shadow-[inset_1px_1px_15px_rgba(155,155,155,0.1)] backdrop-blur-md border border-white/10 shadow-lg p-6 rounded-lg">
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-400 mb-1" htmlFor="email">Email</label>
                    <input className="w-full h-9 bg-transparent border-1 rounded-xl border border-gray-600 focus:ring-0 focus:border-primary text-gray-200 px-2" id="email" name="email" type="email" />
                </div>
                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-400 mb-1" htmlFor="message">Message</label>
                    <textarea className="w-full h-22 bg-transparent border-1 rounded-xl border border-gray-600 focus:ring-0 focus:border-primary text-gray-200 px-2 py-2" id="message" name="message" rows="3"></textarea>
                </div>
                <button className="w-full border border-gray-600 rounded-lg py-2.5 px-4 text-gray-300 hover:bg-primary transition-colors" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
