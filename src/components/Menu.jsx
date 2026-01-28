import React, { useState } from 'react';
import buburSpesial from '../assets/bubur/Bubur+Sate.png';
import buburBiasa from '../assets/bubur/Original.png';
import sate from '../assets/bubur/Sate.png';
import { Star, Plus, Flame, Award, Clock, ShoppingBag } from 'lucide-react';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const menuItems = [
        {
            id: 1,
            name: 'Bubur Ayam Biasa',
            price: 'Rp 12.000',
            description: 'Bubur nikmat dengan ayam suwir, cakwe, dan kerupuk. Sederhana tapi menggugah selera.',
            image: buburBiasa,
            rating: '4.8',
            category: 'food',
            prepTime: '8 menit',
        },
        {
            id: 2,
            name: 'Bubur Ayam + Sate',
            price: 'Rp 15.000',
            description: 'Bubur dengan topping lengkap: ayam suwir, aneka sate, telur puyuh, cakwe, dan kerupuk.',
            image: buburSpesial,
            rating: '5.0',
            category: 'food',
            isPopular: true,
            prepTime: '10 menit',
        },
        {
            id: 3,
            name: 'Aneka Sate',
            price: 'Rp 3.000',
            description: 'Pilihan sate usus, ati ampela, dan telur puyuh dengan bumbu bacem gurih.',
            image: sate,
            rating: '4.9',
            category: 'food',
            prepTime: '5 menit',
        },
    ];

    const filteredItems = activeCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <section id="menu" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 animate-[fadeIn_0.8s_ease-out]">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 mb-6">
                        <Flame className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-bold text-orange-700 tracking-widest uppercase">Daftar Menu</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="text-gray-800">Kehangatan di</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600">
                            Setiap Suapan
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Dibuat dengan bahan berkualitas dan resep turun temurun untuk menemani pagi Anda.
                    </p>
                </div>

                {/* Menu Grid - Premium Cards */}
                <div className="flex flex-wrap justify-center gap-8">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col w-full md:max-w-[340px]"
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            {/* Image Container with Overlay */}
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Popular Badge */}
                                {item.isPopular && (
                                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-lg">
                                        <Flame className="w-3.5 h-3.5 text-white" />
                                        <span className="text-xs font-bold text-white">Populer</span>
                                    </div>
                                )}

                                {/* Rating Badge */}
                                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                    <span className="text-xs font-bold text-gray-800">{item.rating}</span>
                                </div>

                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Header */}
                                <div className="mb-3">
                                    <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-orange-700 transition-colors min-h-[28px]" style={{ fontFamily: 'var(--font-display)' }}>
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed h-10 line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Price & CTA */}
                                <div className="mt-auto flex items-center justify-between gap-3">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 mb-0.5">Harga</span>
                                        <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                                            {item.price}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            const message = encodeURIComponent(`Halo Mas Yanto, saya mau pesan ${item.name}. Apakah masih tersedia?`);
                                            window.open(`https://wa.me/628777998511?text=${message}`, '_blank');
                                        }}
                                        className="group/btn px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-sm shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                                    >
                                        <span className="flex items-center gap-2">
                                            Pesan
                                            <ShoppingBag className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
