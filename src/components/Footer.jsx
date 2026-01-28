import React from 'react';
import { MapPin, Phone, Clock, Instagram, MessageCircle, Video, ArrowRight, Heart, Star } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Beranda', href: '#home' },
        { label: 'Tentang Kami', href: '#about' },
        { label: 'Daftar Menu', href: '#menu' },
        { label: 'Lokasi', href: '#contact' },
    ];

    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram', gradient: 'from-purple-500 to-pink-500' },
        { icon: Video, href: '#', label: 'TikTok', gradient: 'from-blue-600 to-blue-400' },
        { icon: MessageCircle, href: 'https://wa.me/628777998511?text=Halo%20Mas%20Yanto,%20saya%20ingin%20bertanya%20tentang%20menu%20bubur%20ayam.', label: 'WhatsApp', gradient: 'from-green-500 to-emerald-500' },
    ];

    return (
        <footer id="contact" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-600/10 to-amber-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-600/10 to-orange-600/10 rounded-full blur-3xl"></div>

            {/* Wave Decoration at Top */}
            <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
                <svg
                    className="absolute bottom-0 w-full h-full"
                    viewBox="0 0 1440 20"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="footerWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#EA580C" stopOpacity="1" />
                            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,10 Q360,0 720,10 T1440,10 L1440,0 L0,0 Z"
                        fill="url(#footerWaveGradient)"
                    />
                </svg>
            </div>

            <div className="container relative z-10 pt-20 pb-8">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-xl shadow-orange-500/30">
                                <span className="text-white text-2xl font-black">NK</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                                        Bubur Ayam NK
                                    </span>
                                </h3>
                                <span className="text-xs text-gray-400">Mas Yanto</span>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Legenda sarapan pagi sejak 2013. Selalu hangat, selalu nikmat, selalu bikin kangen.
                        </p>

                        {/* Social Media */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className={`group relative w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:border-transparent transition-all duration-300 overflow-hidden`}
                                    aria-label={social.label}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    <social.icon className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>


                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full"></div>
                            Hubungi Kami
                        </h4>
                        <ul className="space-y-4">
                            <li className="group flex items-start gap-3 text-gray-400">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                                    <MapPin className="w-5 h-5 text-orange-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm leading-relaxed">
                                        Jl. Letjen M.T. Haryono, RT.4/RW.1, Cawang,<br />
                                        Kec. Kramat jati, Kota Jakarta Timur,<br />
                                        Daerah Khusus Ibukota Jakarta
                                    </p>
                                </div>
                            </li>
                            <li className="group flex items-center gap-3 text-gray-400">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                                    <Phone className="w-5 h-5 text-orange-400" />
                                </div>
                                <a href="https://wa.me/628777998511?text=Halo%20Mas%20Yanto,%20saya%20ingin%20bertanya%20tentang%20menu%20bubur%20ayam." target="_blank" rel="noopener noreferrer" className="text-sm hover:text-orange-400 transition-colors">+62 877 7998 511</a>
                            </li>
                        </ul>
                    </div>

                    {/* Operating Hours */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full"></div>
                            Jam Operasional
                        </h4>
                        <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Setiap Hari</p>
                                    <p className="text-xl font-black text-white">07.30 - 11.00</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 rounded-lg px-3 py-2">
                                <Star className="w-3 h-3 fill-amber-400" />
                                <span className="font-semibold">Atau sampai habis</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Maps Location Section */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                                Temukan Kami
                            </span>
                        </h3>
                        <p className="text-gray-400">Kunjungi warung kami untuk pengalaman sarapan terbaik</p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-500/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 pointer-events-none z-10"></div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.273275158513!2d106.85749330818003!3d-6.245718377580347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f31d225eb295%3A0xe3c358117a2c4ce2!2sBubur%20ayam%20NK%20mas%20yanto!5e0!3m2!1sid!2sid!4v1769583839677!5m2!1sid!2sid"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="relative z-0"
                        ></iframe>
                    </div>
                </div>


                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            © {currentYear} Bubur Ayam NK Mas Yanto. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>Dibuat dengan</span>
                            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                            <span>di Jakarta</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
