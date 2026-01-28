import React from 'react';
import chefYanto from '../assets/bubur/About.png';
import { ChefHat, Award, Heart, TrendingUp } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Award, value: '4.9', label: 'Rating Terbaik', color: 'from-amber-500 to-orange-500' },
        { icon: TrendingUp, value: '13', label: 'Tahun Berpengalaman', color: 'from-green-500 to-emerald-500' },
    ];

    const highlights = [
        {
            icon: ChefHat,
            title: 'Kualitas Autentik',
            desc: 'Bahan lokal terpilih dan berkualitas',
            gradient: 'from-orange-500 to-amber-500'
        },
        {
            icon: Heart,
            title: 'Pelayanan Hangat',
            desc: 'Setiap mangkuk disajikan dengan kasih sayang',
            gradient: 'from-red-500 to-pink-500'
        },
    ];

    return (
        <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/40 to-amber-200/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-amber-200/40 to-orange-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 mb-6">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 animate-pulse"></div>
                        <span className="text-sm font-bold text-orange-700 tracking-widest uppercase">Tentang Kami</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-800 via-amber-700 to-orange-800">
                            Kisah Kami
                        </span>
                        <br />
                        <span className="text-gray-800">Sejak 2013</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
                    {/* Image Side - Premium Design */}
                    <div className="relative group animate-[fadeIn_1s_ease-out_0.2s_both]">
                        {/* Decorative Background Layers */}
                        <div className="absolute -inset-6 bg-gradient-to-br from-orange-400 to-amber-400 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="absolute -inset-3 bg-gradient-to-br from-orange-300 to-amber-300 rounded-[2rem] transform rotate-3 opacity-50"></div>

                        {/* Main Image Container */}
                        <div className="relative bg-white p-3 rounded-3xl shadow-2xl shadow-orange-500/20">
                            <img
                                src={chefYanto}
                                alt="Mas Yanto Memasak"
                                className="relative rounded-2xl w-full object-cover h-[550px] group-hover:scale-[1.02] transition-transform duration-500"
                            />

                            {/* Premium Overlay Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-white to-orange-50 p-6 rounded-2xl shadow-2xl border border-orange-100 backdrop-blur-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/50">
                                        <Award className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 font-semibold mb-1">Rating Terbaik</p>
                                        <div className="flex items-baseline gap-1">
                                            <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">4.9</p>
                                            <span className="text-gray-500 font-bold">/5.0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}

                    </div>

                    {/* Text Side - Premium Content */}
                    <div className="space-y-8 animate-[fadeIn_1s_ease-out_0.4s_both]">
                        <div>
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-main)' }}>
                                Berawal dari <span className="font-bold text-orange-700">gerobak sederhana</span> di Jl. Letjen M.T. Haryono, Cawang,
                                Bubur Ayam NK Mas Yanto kini telah menjadi <span className="font-bold text-orange-700">tempat sarapan pagi</span> warga setempat.
                            </p>
                        </div>

                        {/* Quote Box */}
                        <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 p-8 rounded-2xl border-l-4 border-orange-500 shadow-lg">
                            <div className="absolute top-4 right-4 text-6xl text-orange-200 font-serif">"</div>
                            <p className="text-lg text-gray-700 italic mb-4 relative z-10" style={{ fontFamily: 'var(--font-main)' }}>
                                Bagi saya, bubur bukan sekadar makanan, tapi cara menyapa pagi dengan kebahagiaan.
                            </p>
                            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-amber-700" style={{ fontFamily: 'var(--font-display)' }}>
                                — Mas Yanto
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid gap-4">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex items-start gap-5 p-5 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-orange-700 transition-colors">{item.title}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section - Premium Design */}
                <div className="flex flex-wrap justify-center gap-8 animate-[fadeIn_1s_ease-out_0.6s_both]">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 overflow-hidden w-full md:w-1/3 max-w-sm"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            <div className="relative z-10 text-center">
                                <div className={`inline-flex w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    <stat.icon className="w-10 h-10 text-white" />
                                </div>
                                <p className="text-5xl font-black text-gray-800 mb-2">{stat.value}</p>
                                <p className="text-base font-semibold text-gray-600">{stat.label}</p>
                            </div>

                            {/* Decorative Circle */}
                            <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
