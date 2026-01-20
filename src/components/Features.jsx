import { motion } from 'framer-motion';
import { FEATURES } from '../constants/content';

const Features = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="features" className="py-20 bg-gradient-to-b from-white to-secondary-50">
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
                        Features
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
                        Everything You Need to Run Your Business
                    </h2>
                    <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                        Powerful features designed to streamline your operations and boost your productivity.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {FEATURES.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
                            >
                                {/* Screenshot */}
                                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-secondary-100 to-secondary-200 p-3">
                                    <img
                                        src={feature.screenshot}
                                        alt={feature.title}
                                        className="w-full h-full object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-primary-600" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-secondary-900">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p className="text-secondary-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
