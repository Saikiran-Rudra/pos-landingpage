import { motion } from 'framer-motion';
import { WHY_CHOOSE_US } from '../constants/content';

const WhyChooseUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                            {WHY_CHOOSE_US.title}
                        </h2>
                        <p className="text-lg text-secondary-600 mb-8">
                            We've built a POS system that understands the unique needs of Indian businesses while maintaining global standards.
                        </p>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {WHY_CHOOSE_US.points.map((point, index) => {
                                const Icon = point.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <span className="text-lg text-secondary-800 font-medium">
                                            {point.text}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* Visual Comparison */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                            {/* Decorative gradient */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-50" />

                            <h3 className="text-2xl font-bold text-secondary-900 mb-8 relative">
                                Traditional POS vs <span className="text-primary-500">SyncServe</span>
                            </h3>

                            <div className="space-y-6 relative">
                                {/* Comparison Items */}
                                {[
                                    { traditional: 'Complex setup process', syncserve: 'Ready in minutes' },
                                    { traditional: 'Cluttered interface', syncserve: 'Clean, intuitive design' },
                                    { traditional: 'Limited customization', syncserve: 'Fully configurable' },
                                    { traditional: 'Slow customer support', syncserve: 'Priority support' },
                                    { traditional: 'Fixed pricing', syncserve: 'Flexible plans' },
                                ].map((item, index) => (
                                    <div key={index} className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                                            <span className="text-red-500 text-lg">✕</span>
                                            <span className="text-secondary-600 text-sm">{item.traditional}</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                            <span className="text-green-500 text-lg">✓</span>
                                            <span className="text-secondary-800 text-sm font-medium">{item.syncserve}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
