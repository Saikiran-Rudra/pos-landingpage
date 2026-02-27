import {
    UtensilsCrossed,
    Coffee,
    Store,
    CloudCog,
    Building2,
    LayoutDashboard,
    ClipboardList,
    Printer,
    BarChart3,
    Package,
    Settings,
    Check,
    Zap,
    Shield,
    TrendingUp,
    Users
} from 'lucide-react';

export const NAV_LINKS = [
    { name: 'Features', href: '#features' },
    { name: 'Product', href: '#product' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Demo', href: '#demo' },
    { name: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
    headline: 'Smart Billing & POS System Built for Modern Indian Businesses',
    subheadline: 'Manage orders, billing, inventory, and analytics from one powerful dashboard.',
    primaryCta: 'Get Free Demo',
    secondaryCta: 'Watch Live Demo',
};

export const TRUST_SECTION = {
    tagline: 'Built for restaurants, cafés, retail & fast-growing businesses',
    industries: [
        { name: 'Restaurants', icon: UtensilsCrossed },
        { name: 'Cafés', icon: Coffee },
        { name: 'Retail Stores', icon: Store },
        { name: 'Cloud Kitchens', icon: CloudCog },
        { name: 'Small Businesses', icon: Building2 },
    ],
};

export const FEATURES = [
    {
        title: 'Menu Management',
        description: 'Easily create, organize, and update your menu with categories, pricing, and availability toggles.',
        icon: LayoutDashboard,
        screenshot: '/images/Menu Management.jpg',
    },
    {
        title: 'Table-wise & Direct Order Punching',
        description: 'Quickly punch orders for dine-in tables or walk-in customers with an intuitive interface.',
        icon: ClipboardList,
        screenshot: '/images/Table Managemet.jpg',
    },
    {
        title: 'Fast Billing & Printing',
        description: 'Generate bills instantly and print receipts with one click. Supports multiple payment modes.',
        icon: Printer,
        screenshot: '/images/NEW ORDER.jpg',
    },
    {
        title: 'Real-time Analytics & Reports',
        description: 'Track sales, top items, and business performance with comprehensive daily, weekly, and monthly reports.',
        icon: BarChart3,
        screenshot: '/images/Analytics.jpg',
    },
    {
        title: 'Dashboard Overview',
        description: 'Get a complete view of your business at a glance with real-time order status, daily sales summary, and quick actions.',
        icon: LayoutDashboard,
        screenshot: '/images/Dashbaord.jpg',
    },
    {
        title: 'Business Settings',
        description: 'Customize your store profile, logo, currency, printer settings, and multi-outlet management.',
        icon: Settings,
        screenshot: '/images/More Options.jpg',
    },
];

export const PRODUCT_PREVIEW = {
    title: "Powerful POS Interface That's Easy to Use",
    caption: 'Designed to reduce billing time & increase efficiency.',
    screenshots: [
        '/images/Dashbaord.jpg',
        '/images/Table Managemet.jpg',
        '/images/NEW ORDER.jpg',
        '/images/Recent orders.jpg',
        '/images/Hold Orders.jpg',
        '/images/Menu Management.jpg',
        '/images/Store Management.jpg',
        '/images/Analytics.jpg',
        '/images/Notifications.jpg',
        '/images/More Options.jpg',
    ],
};

export const WHY_CHOOSE_US = {
    title: 'Why Choose SyncServe POS?',
    points: [
        { text: 'Simple & fast UI', icon: Zap },
        { text: 'No unnecessary complexity', icon: Check },
        { text: 'Built for Indian business workflows', icon: Users },
        { text: 'Scales from small shops to multi-outlet businesses', icon: TrendingUp },
        { text: 'Reliable & secure system', icon: Shield },
    ],
};

export const VIDEO_DEMO = {
    title: 'Watch How the POS Works in Real Time',
    description: 'See billing, order management & reports in action.',
    youtubeUrl: 'https://www.youtube.com/embed/2tLQvgvg3hg?si=lOlhBksTKyrMj7G5',
};

export const PRICING = {
    title: 'Simple, Transparent Pricing',
    subtitle: 'Choose the plan that fits your business',
    plans: [
        {
            name: 'Starter',
            price: '₹0',
            period: '7 Days Free Trial',
            description: 'Try everything. Decide later.',
            note: 'No credit card required',
            features: [
                '1 outlet',
                'Advanced menu management',
                'Order & billing (Dine-in / Takeaway)',
                'Table management',
                'Full analytics & reports',
                'Hold & resume orders',
                'Kitchen Order Tickets (KOT)',
                'GST-ready billing',
                'Priority support',
            ],
            afterTrial: 'Upgrade to Professional Plan',
            cta: 'Start Free Trial',
            ctaLink: 'https://pos.techsonance.co.in',
            highlighted: false,
        },
        {
            name: 'Professional',
            price: '₹15,000',
            period: '/year',
            description: 'Best for growing restaurants & cafés',
            note: 'No monthly plan – flat yearly pricing',
            features: [
                'Up to 3 outlets',
                'Advanced menu management',
                'Table management',
                'Full analytics suite',
                'Hold & resume orders',
                'Kitchen order flow (KOT)',
                'GST billing & reports',
                'Priority support',
                'Regular feature updates',
            ],
            cta: 'Request Demo',
            highlighted: true,
            badge: 'Most Popular',
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: 'Pricing',
            description: 'For large chains & multi-outlet businesses',
            includesNote: 'Everything in Professional +',
            features: [
                'Unlimited outlets',
                'Advanced & custom reporting',
                'Dedicated account manager',
                'On-site training',
                '24/7 phone & WhatsApp support',
                'Custom user roles & permissions',
                'High-volume performance optimization',
                'Data security & role-based access',
            ],
            cta: 'Contact Sales',
            highlighted: false,
        },
    ],
};

export const CTA_SECTION = {
    headline: 'Ready to Simplify Your Billing Process?',
    subtext: 'Switch to a smarter, faster POS system today.',
    cta: 'Request a Free Demo',
};

export const FOOTER = {
    tagline: 'Sync every order, serve with speed.',
    quickLinks: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Demo', href: '#demo' },
        { name: 'Contact', href: '#contact' },
    ],
    contact: {
        email: 'hello@syncserve.com',
        phone: '+91 91731 01711',
    },
    copyright: `© ${new Date().getFullYear()} SyncServe POS. Powered by TechSonance InfoTech LLP. All rights reserved.`,
};
