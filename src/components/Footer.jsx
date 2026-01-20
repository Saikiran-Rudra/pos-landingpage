import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { FOOTER, NAV_LINKS } from '../constants/content';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation (Indian - 10 digits)
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        // Business type validation
        if (!formData.businessType) {
            newErrors.businessType = 'Please select your business type';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '7982e5b4-fbcd-40f0-9c8e-077951dd39e3',
                    to_email: 'saikiran.techsonance@gmail.com',
                    from_name: 'SyncServe POS Website',
                    subject: `New Demo Request from ${formData.name}`,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    business_type: formData.businessType,
                    message: formData.message || 'No message provided',
                }),
            });

            const result = await response.json();

            if (result.success) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', phone: '', businessType: '', message: '' });
                setErrors({});
            } else {
                setSubmitError('Failed to send. Please try again.');
            }
        } catch (err) {
            setSubmitError('Failed to send. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer id="contact" className="bg-secondary-900 text-white">
            {/* Contact Form Section */}
            <div className="border-b border-secondary-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <img
                                src="/images/Powered_by_TechSonance_InfoTech_LLP__1_-removebg-preview.png"
                                alt="SyncServe POS"
                                className="h-14 w-auto mb-6 brightness-0 invert"
                            />
                            <p className="text-secondary-400 text-lg mb-8 max-w-md">
                                {FOOTER.tagline}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-primary-500" />
                                    </div>
                                    <div>
                                        <p className="text-secondary-500 text-sm">Email</p>
                                        <a href="mailto:saikiran.techsonance@gmail.com" className="text-white hover:text-primary-400 transition-colors">
                                            saikiran.techsonance@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-primary-500" />
                                    </div>
                                    <div>
                                        <p className="text-secondary-500 text-sm">Phone</p>
                                        <p className="text-white">{FOOTER.contact.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-primary-500" />
                                    </div>
                                    <div>
                                        <p className="text-secondary-500 text-sm">Location</p>
                                        <p className="text-white">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-secondary-800 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>

                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                    <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                                    <p className="text-secondary-400">We'll get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-6 px-6 py-2 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-all"
                                    >
                                        Send Another Request
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Your Name *"
                                                className={`w-full px-4 py-3 bg-secondary-700 border rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${errors.name ? 'border-red-500' : 'border-secondary-600'}`}
                                            />
                                            {errors.name && (
                                                <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                                                    <AlertCircle className="w-3 h-3" /> {errors.name}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Email Address *"
                                                className={`w-full px-4 py-3 bg-secondary-700 border rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-secondary-600'}`}
                                            />
                                            {errors.email && (
                                                <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                                                    <AlertCircle className="w-3 h-3" /> {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number (10 digits) *"
                                            maxLength={10}
                                            className={`w-full px-4 py-3 bg-secondary-700 border rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${errors.phone ? 'border-red-500' : 'border-secondary-600'}`}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" /> {errors.phone}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <select
                                            name="businessType"
                                            value={formData.businessType}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 bg-secondary-700 border rounded-lg text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${errors.businessType ? 'border-red-500' : 'border-secondary-600'}`}
                                        >
                                            <option value="">Select Business Type *</option>
                                            <option value="restaurant">Restaurant</option>
                                            <option value="cafe">Café</option>
                                            <option value="retail">Retail Store</option>
                                            <option value="cloud-kitchen">Cloud Kitchen</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.businessType && (
                                            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" /> {errors.businessType}
                                            </p>
                                        )}
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your business... (optional)"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                    />

                                    {submitError && (
                                        <p className="text-red-400 text-sm flex items-center gap-2">
                                            <AlertCircle className="w-4 h-4" /> {submitError}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200 shadow-lg shadow-primary-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            'Request Free Demo'
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {FOOTER.quickLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-secondary-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-secondary-500 text-sm text-center">
                        {FOOTER.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

