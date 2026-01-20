import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING } from '../constants/content';

const Pricing = () => {
    const handleContactClick = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="pricing" className="py-20 bg-gradient-to-b from-secondary-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                        Pricing
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
                        {PRICING.title}
                    </h2>
                    <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                        {PRICING.subtitle}
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {PRICING.plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative bg-white rounded-2xl p-8 ${plan.highlighted
                                ? 'ring-2 ring-primary-500 shadow-2xl shadow-primary-500/20 scale-105'
                                : 'shadow-lg hover:shadow-xl'
                                } transition-all duration-300`}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center px-4 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full shadow-lg">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-secondary-600 text-sm mb-4">
                                    {plan.description}
                                </p>
                                <div className="mb-2">
                                    <span className="text-4xl font-bold text-secondary-900">
                                        {plan.price}
                                    </span>
                                </div>
                                {plan.period && (
                                    <p className="text-sm font-medium text-primary-600">{plan.period}</p>
                                )}
                                {plan.note && (
                                    <p className="text-xs text-secondary-500 mt-2">{plan.note}</p>
                                )}
                            </div>

                            {/* Includes Note for Enterprise */}
                            {plan.includesNote && (
                                <p className="text-sm font-medium text-primary-600 mb-4 text-center">
                                    {plan.includesNote}
                                </p>
                            )}

                            {/* Features */}
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlighted ? 'bg-primary-100' : 'bg-secondary-100'
                                            }`}>
                                            <Check className={`w-3 h-3 ${plan.highlighted ? 'text-primary-600' : 'text-secondary-600'
                                                }`} />
                                        </div>
                                        <span className="text-secondary-700 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* After Trial Note */}
                            {plan.afterTrial && (
                                <p className="text-xs text-secondary-500 text-center mb-4 italic">
                                    After 7 days: {plan.afterTrial}
                                </p>
                            )}

                            {/* CTA Button */}
                            {plan.ctaLink ? (
                                <a
                                    href={plan.ctaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 rounded-xl font-semibold text-center transition-all duration-200 bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5"
                                >
                                    {plan.cta}
                                </a>
                            ) : (
                                <button
                                    onClick={handleContactClick}
                                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 ${plan.highlighted
                                        ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40'
                                        : 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Additional info */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center text-secondary-500 mt-12"
                >
                    All plans include free setup assistance. No hidden charges.
                </motion.p>
            </div>
        </section>
    );
};

export default Pricing;
