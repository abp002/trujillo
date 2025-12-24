"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactV2() {
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Simulate submitting
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-neutral-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full text-center space-y-6 bg-white p-12 rounded-2xl shadow-sm border border-neutral-100"
                >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900">Message Sent</h2>
                    <p className="text-neutral-500">
                        Thanks for reaching out! We'll get back to you shortly.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="text-sm font-medium text-violet-600 hover:text-violet-700 underline underline-offset-4"
                    >
                        Send another message
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-neutral-50">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Column: Info */}
                <div className="space-y-8 lg:sticky lg:top-32">
                    <div>
                        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight sm:text-5xl mb-6">
                            Let’s talk.
                        </h1>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Have a project in mind or just want to explore what's possible?
                            We're here to help you build something amazing.
                        </p>
                    </div>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-neutral-500">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-neutral-900">Email</h3>
                                <p className="text-neutral-500">hello@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-neutral-500">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-neutral-900">Office</h3>
                                <p className="text-neutral-500">Madrid, Spain</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-neutral-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-neutral-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder:text-neutral-400"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder:text-neutral-400"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-neutral-700">Subject</label>
                            <select
                                id="subject"
                                className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all text-neutral-600"
                            >
                                <option>General Inquiry</option>
                                <option>Project Proposal</option>
                                <option>Support</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-neutral-700">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder:text-neutral-400 resize-none"
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 px-6 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold shadow-lg shadow-violet-200 hover:shadow-violet-300 transition-all transform hover:-translate-y-0.5"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
