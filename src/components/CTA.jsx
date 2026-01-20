import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CTA_SECTION } from '../constants/content';

const CTA = () => {
    const handleDemoClick = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {CTA_SECTION.headline}
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        {CTA_SECTION.subtext}
                    </p>

                    <button
                        onClick={handleDemoClick}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-secondary-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
                    >
                        {CTA_SECTION.cta}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="mt-6 text-white/70 text-sm">
                        No credit card required • Free setup • Cancel anytime
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
