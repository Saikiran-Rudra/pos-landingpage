const HeroIllustration = () => {
    return (
        <svg
            viewBox="0 0 600 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-w-lg mx-auto"
        >
            {/* Background Gradient Circle */}
            <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fed7aa" />
                    <stop offset="100%" stopColor="#fdba74" />
                </linearGradient>
                <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f8fafc" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="10" stdDeviation="20" floodColor="#0f172a" floodOpacity="0.15" />
                </filter>
            </defs>

            {/* Main Circular Background */}
            <circle cx="300" cy="250" r="200" fill="url(#bgGradient)" opacity="0.3" />

            {/* Main POS Terminal/Tablet */}
            <g filter="url(#shadow)">
                {/* Tablet Frame */}
                <rect x="150" y="80" width="300" height="340" rx="20" fill="#1e293b" />
                <rect x="160" y="90" width="280" height="310" rx="12" fill="url(#screenGradient)" />

                {/* Screen Header */}
                <rect x="160" y="90" width="280" height="50" rx="12" fill="#f97316" />
                <rect x="160" y="120" width="280" height="20" fill="#f97316" />
                <text x="185" y="120" fill="white" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">SyncServe POS</text>
                <circle cx="405" cy="115" r="12" fill="#ea580c" />
                <text x="401" y="119" fill="white" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">S</text>

                {/* Menu Items Grid */}
                <g>
                    {/* Row 1 */}
                    <rect x="175" y="155" width="80" height="70" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                    <rect x="183" y="163" width="30" height="30" rx="4" fill="#fef3c7" />
                    <text x="193" y="183" fill="#92400e" fontSize="14">🍔</text>
                    <text x="183" y="205" fill="#334155" fontSize="9" fontWeight="500">Burger</text>
                    <text x="183" y="217" fill="#f97316" fontSize="10" fontWeight="600">₹40</text>

                    <rect x="260" y="155" width="80" height="70" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                    <rect x="268" y="163" width="30" height="30" rx="4" fill="#fce7f3" />
                    <text x="278" y="183" fill="#9d174d" fontSize="14">🍕</text>
                    <text x="268" y="205" fill="#334155" fontSize="9" fontWeight="500">Pizza</text>
                    <text x="268" y="217" fill="#f97316" fontSize="10" fontWeight="600">₹120</text>

                    <rect x="345" y="155" width="80" height="70" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                    <rect x="353" y="163" width="30" height="30" rx="4" fill="#dbeafe" />
                    <text x="363" y="183" fill="#1e40af" fontSize="14">☕</text>
                    <text x="353" y="205" fill="#334155" fontSize="9" fontWeight="500">Coffee</text>
                    <text x="353" y="217" fill="#f97316" fontSize="10" fontWeight="600">₹50</text>

                    {/* Row 2 */}
                    <rect x="175" y="235" width="80" height="70" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                    <rect x="183" y="243" width="30" height="30" rx="4" fill="#dcfce7" />
                    <text x="193" y="263" fill="#166534" fontSize="14">🥗</text>
                    <text x="183" y="285" fill="#334155" fontSize="9" fontWeight="500">Salad</text>
                    <text x="183" y="297" fill="#f97316" fontSize="10" fontWeight="600">₹80</text>

                    <rect x="260" y="235" width="80" height="70" rx="8" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
                    <rect x="268" y="243" width="30" height="30" rx="4" fill="#fed7aa" />
                    <text x="278" y="263" fill="#c2410c" fontSize="14">🍜</text>
                    <text x="268" y="285" fill="#334155" fontSize="9" fontWeight="500">Noodles</text>
                    <text x="268" y="297" fill="#f97316" fontSize="10" fontWeight="600">₹90</text>
                    {/* Selected indicator */}
                    <circle cx="330" cy="243" r="8" fill="#f97316" />
                    <text x="327" y="247" fill="white" fontSize="8" fontWeight="600">1</text>

                    <rect x="345" y="235" width="80" height="70" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                    <rect x="353" y="243" width="30" height="30" rx="4" fill="#fef9c3" />
                    <text x="363" y="263" fill="#854d0e" fontSize="14">🧃</text>
                    <text x="353" y="285" fill="#334155" fontSize="9" fontWeight="500">Juice</text>
                    <text x="353" y="297" fill="#f97316" fontSize="10" fontWeight="600">₹35</text>
                </g>

                {/* Bottom Action Bar */}
                <rect x="175" y="320" width="250" height="65" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                <text x="190" y="342" fill="#64748b" fontSize="10">Total</text>
                <text x="190" y="365" fill="#0f172a" fontSize="18" fontWeight="700">₹90.00</text>
                <rect x="305" y="330" width="105" height="45" rx="8" fill="url(#primaryGradient)" />
                <text x="325" y="358" fill="white" fontSize="12" fontWeight="600">Pay Now</text>
            </g>

            {/* Floating Analytics Card */}
            <g filter="url(#shadow)">
                <rect x="420" y="60" width="150" height="100" rx="12" fill="white" />
                <text x="435" y="85" fill="#64748b" fontSize="10">Today's Sales</text>
                <text x="435" y="110" fill="#0f172a" fontSize="20" fontWeight="700">₹12,450</text>
                <path d="M435 130 L450 120 L465 125 L480 115 L495 118 L510 108 L525 112 L540 100" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
                <text x="435" y="148" fill="#22c55e" fontSize="10" fontWeight="500">↑ 12% from yesterday</text>
            </g>

            {/* Floating Order Card */}
            <g filter="url(#shadow)">
                <rect x="30" y="180" width="130" height="120" rx="12" fill="white" />
                <rect x="45" y="195" width="40" height="40" rx="8" fill="#fef3c7" />
                <text x="55" y="222" fill="#92400e" fontSize="18">📋</text>
                <text x="95" y="210" fill="#64748b" fontSize="10">Order #1234</text>
                <text x="95" y="225" fill="#0f172a" fontSize="12" fontWeight="600">Table 4</text>
                <rect x="45" y="250" width="100" height="35" rx="6" fill="#dcfce7" />
                <text x="55" y="272" fill="#166534" fontSize="11" fontWeight="500">✓ Completed</text>
            </g>

            {/* Floating Receipt */}
            <g filter="url(#shadow)">
                <rect x="70" y="320" width="80" height="110" rx="6" fill="white" />
                <rect x="70" y="320" width="80" height="25" rx="6" fill="#f97316" />
                <rect x="70" y="335" width="80" height="10" fill="#f97316" />
                <text x="85" y="338" fill="white" fontSize="8" fontWeight="600">RECEIPT</text>
                <line x1="80" y1="355" x2="140" y2="355" stroke="#e2e8f0" strokeWidth="1" />
                <text x="80" y="368" fill="#64748b" fontSize="7">Noodles x1</text>
                <text x="130" y="368" fill="#0f172a" fontSize="7" textAnchor="end">₹90</text>
                <line x1="80" y1="380" x2="140" y2="380" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2" />
                <text x="80" y="395" fill="#0f172a" fontSize="8" fontWeight="600">Total</text>
                <text x="130" y="395" fill="#0f172a" fontSize="8" fontWeight="600" textAnchor="end">₹90</text>
                <rect x="80" y="405" width="60" height="15" rx="3" fill="#f1f5f9" />
                <text x="110" y="415" fill="#64748b" fontSize="6" textAnchor="middle">Thank You!</text>
            </g>

            {/* Decorative Elements */}
            <circle cx="500" cy="400" r="40" fill="#f97316" opacity="0.1" />
            <circle cx="530" cy="180" r="25" fill="#f97316" opacity="0.15" />
            <circle cx="80" cy="120" r="30" fill="#f97316" opacity="0.1" />

            {/* Connection Lines */}
            <path d="M160 230 C 100 230, 100 250, 100 250" stroke="#f97316" strokeWidth="2" strokeDasharray="4" opacity="0.3" />
            <path d="M450 150 C 470 140, 475 130, 495 110" stroke="#f97316" strokeWidth="2" strokeDasharray="4" opacity="0.3" />
        </svg>
    );
};

export default HeroIllustration;
