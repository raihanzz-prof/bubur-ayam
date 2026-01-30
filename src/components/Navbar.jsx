import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import Icon from '../assets/bubur/Icon.jpeg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Beranda', href: '#home' },
        { title: 'Tentang Kami', href: '#about' },
        { title: 'Menu', href: '#menu' },
        { title: 'Lokasi', href: '#contact' },
    ];

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/628777998511?text=Halo%20Mas%20Yanto,%20saya%20ingin%20memesan%20bubur%20ayam.', '_blank');
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-black/5'
                : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm'
                }`}
        >
            <div className="container">
                <div className="flex items-center justify-between py-5">
                    {/* Logo - Premium Design */}
                    <a
                        href="#"
                        className={`group flex items-center gap-3 text-2xl md:text-3xl font-bold font-display transition-all duration-300 ${isScrolled ? 'text-secondary' : 'text-white'
                            }`}
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${isScrolled ? 'shadow-orange-500/30' : 'shadow-orange-500/50'
                            }`}>
                            <img src={Icon} alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-base md:text-lg">Bubur Ayam</span>
                            <span className={`text-xs md:text-sm font-normal transition-colors ${isScrolled ? 'text-gray-500' : 'text-amber-300'
                                }`}>Mas Yanto</span>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl group ${isScrolled
                                    ? 'text-gray-700 hover:text-orange-600'
                                    : 'text-white/90 hover:text-white'
                                    }`}
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                <span className="relative z-10">{link.title}</span>
                                {/* Hover background effect */}
                                <div className={`absolute inset-0 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 ${isScrolled
                                    ? 'bg-gradient-to-r from-orange-50 to-amber-50'
                                    : 'bg-white/10 backdrop-blur-sm'
                                    }`}></div>
                                {/* Active indicator */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
                            </a>
                        ))}

                        {/* Premium CTA Button */}
                        <div className="ml-4 flex items-center gap-3">
                            <button
                                onClick={handleWhatsAppClick}
                                className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/40 hover:shadow-xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative flex items-center gap-2">
                                    <ShoppingBag className="w-4 h-4" />
                                    Pre Order
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Toggle - Premium Design */}
                    <button
                        className={`lg:hidden relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isScrolled
                            ? 'bg-gradient-to-br from-orange-50 to-amber-50 text-orange-600'
                            : 'bg-white/10 backdrop-blur-sm text-white'
                            } hover:scale-110 active:scale-95`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="relative w-6 h-6">
                            <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                }`}></span>
                            <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}></span>
                            <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                                }`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Premium Slide-in Design */}
            <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ${isMobileMenuOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}>
                <div className="container py-2">
                    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/10 p-6 border border-white/20">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="group relative px-6 py-4 text-base font-semibold text-gray-700 hover:text-orange-600 rounded-2xl transition-all duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                        animationDelay: `${index * 50}ms`
                                    }}
                                >
                                    <span className="relative z-10 flex items-center justify-between">
                                        {link.title}
                                        <ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                    </span>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                </a>
                            ))}

                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <button
                                    onClick={handleWhatsAppClick}
                                    className="w-full group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold shadow-lg shadow-orange-500/40 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative flex items-center justify-center gap-2">
                                        <ShoppingBag className="w-5 h-5" />
                                        Pesan Sekarang
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Wave SVG Bottom Decoration */}
            <div className={`absolute bottom-0 left-0 right-0 h-3 overflow-hidden transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'
                }`}>
                <svg
                    className="absolute bottom-0 w-full h-full"
                    viewBox="0 0 1440 20"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#EA580C" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,10 Q360,0 720,10 T1440,10 L1440,20 L0,20 Z"
                        fill="url(#waveGradient)"
                        className="animate-[wave_8s_ease-in-out_infinite]"
                    />
                    <path
                        d="M0,15 Q360,8 720,15 T1440,15 L1440,20 L0,20 Z"
                        fill="url(#waveGradient)"
                        opacity="0.5"
                        className="animate-[wave_6s_ease-in-out_infinite_reverse]"
                    />
                </svg>
            </div>
        </nav>
    );
};

export default Navbar;