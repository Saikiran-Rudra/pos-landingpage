import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { VIDEO_DEMO } from '../constants/content';

const VideoDemo = () => {
    return (
        <section id="demo" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                        <Play className="w-4 h-4 mr-2" />
                        Live Demo
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
                        {VIDEO_DEMO.title}
                    </h2>
                    <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                        {VIDEO_DEMO.description}
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Decorative background */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl blur-xl opacity-20" />

                    {/* Video Frame */}
                    <div className="relative bg-secondary-900 rounded-2xl p-2 shadow-2xl">
                        {/* Browser-like header */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-secondary-800 rounded-t-xl">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="bg-secondary-700 rounded-lg px-4 py-1.5 text-secondary-400 text-sm text-center">
                                    SyncServe POS Demo
                                </div>
                            </div>
                        </div>

                        {/* YouTube Embed */}
                        <div className="relative aspect-video rounded-b-xl overflow-hidden">
                            <iframe
                                src={VIDEO_DEMO.youtubeUrl}
                                title="SyncServe POS Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Feature highlights below video */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                                text: 'Quick Setup',
                                subtext: 'Get started in minutes',
                                gradient: 'from-amber-400 to-orange-500'
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                ),
                                text: 'Real-time Analytics',
                                subtext: 'Track your business live',
                                gradient: 'from-blue-400 to-indigo-500'
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                ),
                                text: 'Easy Billing',
                                subtext: 'One-click invoices',
                                gradient: 'from-green-400 to-emerald-500'
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-secondary-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${item.gradient} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-secondary-900">{item.text}</h4>
                                    <p className="text-xs text-secondary-500">{item.subtext}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoDemo;
