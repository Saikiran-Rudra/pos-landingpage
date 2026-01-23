import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants/content';
import HeroIllustration from './HeroIllustration';

const Hero = () => {
    const handleDemoClick = (e) => {
        e.preventDefault();
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleWatchDemo = (e) => {
        e.preventDefault();
        const element = document.querySelector('#demo');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-[65px] overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-30" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/20 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                                🚀 Built for Modern Indian Businesses
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-6"
                        >
                            {HERO_CONTENT.headline.split('Indian').map((part, index) =>
                                index === 0 ? (
                                    <span key={index}>
                                        {part}
                                        <span className="gradient-text">Indian</span>
                                    </span>
                                ) : (
                                    <span key={index}>{part}</span>
                                )
                            )}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg sm:text-xl text-secondary-600 mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            {HERO_CONTENT.subheadline}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <button
                                onClick={handleDemoClick}
                                className="btn-shine inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-all duration-200 shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 hover:-translate-y-0.5"
                            >
                                {HERO_CONTENT.primaryCta}
                            </button>
                            <button
                                onClick={handleWatchDemo}
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary-300 text-secondary-700 font-semibold rounded-xl hover:border-primary-500 hover:text-primary-500 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                                {HERO_CONTENT.secondaryCta}
                            </button>
                        </motion.div>

                        {/* Feature Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            {[
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    label: 'GST Ready',
                                    color: 'from-green-500 to-emerald-600'
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                        </svg>
                                    ),
                                    label: 'Cloud Synced',
                                    color: 'from-blue-500 to-cyan-600'
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
                                        </svg>
                                    ),
                                    label: 'Works Offline',
                                    color: 'from-orange-500 to-amber-600'
                                },
                            ].map((feature) => (
                                <div
                                    key={feature.label}
                                    className="flex items-center gap-3 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-secondary-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${feature.color} text-white shadow-sm`}>
                                        {feature.icon}
                                    </span>
                                    <span className="text-sm font-semibold text-secondary-700">{feature.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="animate-float">
                            <HeroIllustration />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
