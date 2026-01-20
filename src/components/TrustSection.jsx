import { motion } from 'framer-motion';
import { TRUST_SECTION } from '../constants/content';

const TrustSection = () => {
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-secondary-600 text-lg mb-10"
                >
                    {TRUST_SECTION.tagline}
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                >
                    {TRUST_SECTION.industries.map((industry) => {
                        const Icon = industry.icon;
                        return (
                            <motion.div
                                key={industry.name}
                                variants={itemVariants}
                                className="flex flex-col items-center p-6 bg-secondary-50 rounded-2xl hover:bg-primary-50 hover:shadow-lg transition-all duration-300 card-hover cursor-default"
                            >
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
                                    <Icon className="w-7 h-7 text-primary-500" />
                                </div>
                                <span className="text-secondary-700 font-medium text-center">
                                    {industry.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustSection;
