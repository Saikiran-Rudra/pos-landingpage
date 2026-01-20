import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCT_PREVIEW } from '../constants/content';

const ProductPreview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === PRODUCT_PREVIEW.screenshots.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? PRODUCT_PREVIEW.screenshots.length - 1 : prev - 1
        );
    };

    return (
        <section id="product" className="py-20 bg-secondary-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-4">
                        Product Preview
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {PRODUCT_PREVIEW.title}
                    </h2>
                    <p className="text-lg text-secondary-400 max-w-2xl mx-auto">
                        {PRODUCT_PREVIEW.caption}
                    </p>
                </motion.div>

                {/* Main Carousel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Browser Frame */}
                    <div className="bg-secondary-800 rounded-2xl p-2 shadow-2xl">
                        {/* Browser Header */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-secondary-700 rounded-t-xl">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="bg-secondary-600 rounded-lg px-4 py-1.5 text-secondary-400 text-sm text-center">
                                    app.syncserve.com
                                </div>
                            </div>
                        </div>

                        {/* Screenshot Display */}
                        <div className="relative h-[70vh] max-h-[600px] overflow-hidden rounded-b-xl bg-secondary-100">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={PRODUCT_PREVIEW.screenshots[currentIndex]}
                                    alt={`SyncServe POS Screenshot ${currentIndex + 1}`}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full object-contain"
                                />
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                                aria-label="Previous screenshot"
                            >
                                <ChevronLeft className="w-6 h-6 text-secondary-700" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                                aria-label="Next screenshot"
                            >
                                <ChevronRight className="w-6 h-6 text-secondary-700" />
                            </button>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-6">
                        {PRODUCT_PREVIEW.screenshots.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-primary-500 w-8'
                                    : 'bg-secondary-600 hover:bg-secondary-500'
                                    }`}
                                aria-label={`Go to screenshot ${index + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Thumbnail Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12 grid grid-cols-4 md:grid-cols-8 gap-3 max-w-5xl mx-auto"
                >
                    {PRODUCT_PREVIEW.screenshots.map((screenshot, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${index === currentIndex
                                ? 'ring-2 ring-primary-500 ring-offset-2 ring-offset-secondary-900'
                                : 'opacity-60 hover:opacity-100'
                                }`}
                        >
                            <img
                                src={screenshot}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-contain bg-secondary-800"
                            />
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductPreview;
