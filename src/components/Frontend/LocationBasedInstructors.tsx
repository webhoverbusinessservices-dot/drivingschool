"use client"
import React, { useState } from 'react';
import { LayoutGrid, Star, Clock, PiggyBank, Car, Settings, ShieldCheck, User } from 'lucide-react';

// Sample instructor data
const allInstructors = [
    {
        id: 1,
        name: "Sarah Johnson",
        rating: 4.9,
        reviews: 156,
        price: 65,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        badge: "Top Rated",
        tags: ["AUTO", "FEMALE", "10+ YEARS"],
        bio: "Experienced instructor with a calm teaching style. Specializes in helping nervous students build confidence.",
        category: ["all", "topRated", "female", "auto"]
    },
    {
        id: 2,
        name: "Michael Chen",
        rating: 4.8,
        reviews: 203,
        price: 58,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        badge: "Next Available",
        tags: ["MANUAL", "MALE", "8 YEARS"],
        bio: "Patient and thorough instructor. Excellent track record with first-time test passers.",
        category: ["all", "nextAvailable", "lowestPrice", "manual"]
    },
    {
        id: 3,
        name: "Emma Williams",
        rating: 5.0,
        reviews: 89,
        price: 70,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        badge: "Top Rated",
        tags: ["AUTO", "FEMALE", "5 YEARS"],
        bio: "Friendly and encouraging instructor who makes learning to drive fun and stress-free.",
        category: ["all", "topRated", "female", "auto"]
    },
    {
        id: 4,
        name: "David Martinez",
        rating: 4.7,
        reviews: 178,
        price: 55,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        tags: ["MANUAL", "MALE", "12 YEARS"],
        bio: "Veteran instructor with decades of experience. Specializes in advanced driving techniques.",
        category: ["all", "lowestPrice", "manual"]
    },
    {
        id: 5,
        name: "Lisa Anderson",
        rating: 4.9,
        reviews: 142,
        price: 62,
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
        badge: "Next Available",
        tags: ["AUTO", "FEMALE", "7 YEARS"],
        bio: "Compassionate instructor known for helping anxious learners overcome their fears.",
        category: ["all", "nextAvailable", "female", "auto"]
    }
];

type TabType = 'all' | 'topRated' | 'nextAvailable' | 'lowestPrice' | 'female' | 'auto' | 'manual';

const InstructorTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('all');

    const filteredInstructors = allInstructors.filter(instructor =>
        instructor.category.includes(activeTab)
    );

    const tabs = [
        { id: 'all' as TabType, label: 'All Instructors', icon: LayoutGrid, color: '' },
        { id: 'topRated' as TabType, label: 'Top Rated', icon: Star, color: 'text-yellow-500' },
        { id: 'nextAvailable' as TabType, label: 'Next Available', icon: Clock, color: 'text-green-500' },
        { id: 'lowestPrice' as TabType, label: 'Lowest Price', icon: PiggyBank, color: 'text-blue-500' },
        { id: 'female' as TabType, label: 'Female Instructors', icon: User, color: 'text-purple-500' },
        { id: 'auto' as TabType, label: 'Auto', icon: Car, color: '' },
        { id: 'manual' as TabType, label: 'Manual', icon: Settings, color: '' }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 sm:p-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-text-light dark:text-text-dark mb-4">
                    Driving lessons in Perth 
                </h2>
                <p className="text-subtext-light dark:text-subtext-dark text-md">
                    TrueWay has connected 24,000 learners to the best instructors in Perth.
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Tabs Navigation */}
                <div className="top-16 z-40 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-slate-200 dark:border-slate-800 mb-8 transition-all">
                    <nav aria-label="Filter Tabs" className="flex gap-6 sm:gap-8 overflow-x-auto hide-scrollbar">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`group flex items-center gap-2 py-4 text-md font-medium whitespace-nowrap border-b-2 transition-all cursor-pointer ${isActive
                                        ? 'font-bold border-gray-800 dark:text-yellow-400 border-gray-800 dark:border-gray-800 '
                                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-transparent hover:border-slate-300 dark:hover:border-slate-600'
                                        }`}
                                >
                                    <Icon
                                        size={20}
                                        className={`${tab.color} ${!isActive && 'group-hover:scale-110'} transition-transform`}
                                    />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full">
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
                        {filteredInstructors.length > 0 ? (
                            filteredInstructors.map((instructor) => (
                                <div
                                    key={instructor.id}
                                    className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row gap-6"
                                >
                                    {/* Image */}
                                    <div className="relative shrink-0 w-full sm:w-40 h-40">
                                        <div className="relative w-full h-full rounded-lg overflow-hidden">
                                            <img
                                                src={instructor.image}
                                                alt={instructor.name}
                                                className="w-full h-full object-cover object-center"
                                            />
                                        </div>

                                        {instructor.badge && (
                                            <div className="absolute -bottom-2 -right-2 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md border border-green-200">
                                                {instructor.badge}
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                                        {instructor.name}
                                                    </h3>
                                                    <p className="text-yellow-400 text-sm font-bold mt-1 flex items-center gap-1">
                                                        <Star size={15} className="text-yellow-300 fill-yellow-500" />
                                                        {instructor.rating} ({instructor.reviews} reviews)
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-400">
                                                        ${instructor.price}
                                                    </p>
                                                    <p className="text-xs text-slate-500">per hour</p>
                                                </div>
                                            </div>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {instructor.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded uppercase"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                                                {instructor.bio}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-12 text-center">
                                <p className="text-slate-500 dark:text-slate-400 text-lg">
                                    No instructors found for this category.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="hidden lg:block lg:col-span-5 xl:col-span-4 h-full">
                        <div className="sticky top-40 flex flex-col gap-4">
                            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
                                <div className="absolute top-1/4 left-1/3 size-3 bg-blue-600 rounded-full ring-4 ring-white shadow-md"></div>
                                <div className="absolute top-1/2 left-1/2 size-3 bg-blue-600 rounded-full ring-4 ring-white shadow-md"></div>
                                <div className="absolute bottom-1/3 right-1/4 size-3 bg-blue-600 rounded-full ring-4 ring-white shadow-md"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <button className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl shadow-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                        <span>🗺️</span>
                                        View Interactive Map
                                    </button>
                                </div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg text-blue-600 dark:text-blue-300">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Verified Instructors</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">All instructors have passed a Working with Children Check and are fully accredited.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorTabs;