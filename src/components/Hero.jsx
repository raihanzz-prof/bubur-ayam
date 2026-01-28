import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-600 to-amber-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Background Image with Premium Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Bubur Ayam NK Mas Yanto"
                    className="w-full h-full object-cover object-center scale-105 animate-[zoom_20s_ease-in-out_infinite_alternate]"
                />
                {/* Sophisticated Multi-layer Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                {/* Premium Vignette Effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
            </div>

            <div className="container relative z-10 pt-24 pb-20">
                <div className="max-w-4xl">
                    {/* Premium Badge with Glassmorphism */}
                    <div className="inline-flex items-center gap-3 py-2.5 px-5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl border border-amber-400/30 shadow-lg shadow-amber-500/20 mb-8 group hover:scale-105 transition-transform duration-300">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
                        <span className="text-amber-100 font-semibold text-sm tracking-widest uppercase">
                            Legendaris Sejak 2013
                        </span>
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></div>
                    </div>

                    {/* Premium Typography */}
                    <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] mb-8 animate-[fadeIn_0.8s_ease-out]" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="block text-white drop-shadow-2xl">
                            Nikmatnya
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 drop-shadow-lg animate-[shimmer_3s_ease-in-out_infinite]">
                            Legenda Pagi
                        </span>
                    </h1>

                    {/* Elegant Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light drop-shadow-lg animate-[fadeIn_1s_ease-out_0.2s_both]" style={{ fontFamily: 'var(--font-main)' }}>
                        Rasakan kehangatan
                        <span className="text-amber-300 font-semibold"> bubur ayam autentik </span>
                        dengan resep rahasia Mas Yanto yang telah dipercaya selama lebih dari 25 tahun.
                    </p>

                    {/* Premium CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center animate-[fadeIn_1.2s_ease-out_0.4s_both]">
                        <button
                            onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg shadow-2xl shadow-orange-600/50 hover:shadow-orange-600/70 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative flex items-center gap-2">
                                Lihat Menu Kami
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <button
                            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                            className="group px-10 py-4 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            <span className="flex items-center gap-2">
                                Kisah Kami
                                <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:animate-ping"></div>
                            </span>
                        </button>
                    </div>

                    {/* Elegant Trust Indicators */}
                    <div className="mt-16 flex flex-wrap items-center gap-8 text-gray-300 animate-[fadeIn_1.4s_ease-out_0.6s_both]">
                        <div className="flex items-center gap-2">
                            <span className="text-sm ml-2">
                                Bubur ayam favorit pelanggan
                            </span>
                        </div>
                        <div className="h-8 w-px bg-white/20"></div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <span className="text-sm">
                                <span className="font-bold text-white">4.9</span> Rating
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFFBEB] to-transparent z-[5]"></div>
        </section>
    );
};

export default Hero;
