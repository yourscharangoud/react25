"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // Toggle state
    const pathname = usePathname(); // Get current path
    const sidebarRef = useRef(null); // Ref for sidebar

    const pages = [
        { name: "Home", url: "/" },
        { name: "Accordion", url: "/accordion" },
        { name: "Random Color", url: "/random-color" },
        { name: "Star Rating", url: "/star-rating" },
        { name: "Image Slider", url: "/image-slider" },
        { name: "Load More", url: "/load-more" },
        { name: "Tree View", url: "/tree-view" },
        { name: "QR Code", url: "/qr-code" },
        { name: "Scroll Indicator", url: "/scroll-indicator" },
        { name: "Tabs", url: "/tabs" },
        { name: "Modal Popup", url: "/modal-popup" },
        { name: "Github Finder", url: "/github-finder" },
        { name: "Tic Tac Toe", url: "/tic-tac-toe" },
        { name: "Weather App", url: "/weather-app" },
    ];

    // Close sidebar when clicking outside of it
    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close sidebar when clicking a link
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 h-screen w-60 bg-gray-800 text-white p-4 shadow-lg z-40 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-60"
                } md:translate-x-0`}
            >
                {/* Added spacing at the top */}
                <div className="pt-10 md:pt-4">
                    <h2 className="text-xl font-semibold mb-4">React 25</h2>
                </div>

                {/* Scrollable nav links with better UX */}
                <ul className="space-y-3 overflow-y-auto max-h-[90vh] pb-10 pr-2 custom-scrollbar">
                    {pages.map((page, index) => {
                        const isActive = pathname === page.url;
                        return (
                            <li key={index}>
                                <Link href={page.url} replace scroll={false} onClick={handleLinkClick}>
                                    <span
                                        className={`block p-2 rounded cursor-pointer ${
                                            isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                                        }`}
                                    >
                                        {page.name}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Custom scrollbar CSS for better appearance */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 10px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.5);
                }
            `}</style>
        </>
    );
};

export default Header;