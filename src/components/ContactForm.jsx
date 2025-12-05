import React from 'react';

const ContactForm = () => {
    return (
        <div className="bg-gray-200/30 dark:bg-gray-900/40 p-6 rounded-lg border border-gray-300 dark:border-gray-700">
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1" htmlFor="email">Email</label>
                    <input className="w-full bg-transparent border-0 border-b border-gray-400 dark:border-gray-600 focus:ring-0 focus:border-primary text-gray-800 dark:text-gray-200 px-0" id="email" name="email" type="email" />
                </div>
                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1" htmlFor="message">Message</label>
                    <textarea className="w-full bg-transparent border-0 border-b border-gray-400 dark:border-gray-600 focus:ring-0 focus:border-primary text-gray-800 dark:text-gray-200 px-0" id="message" name="message" rows="3"></textarea>
                </div>
                <button className="w-full border border-gray-400 dark:border-gray-600 rounded-lg py-2.5 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
