"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // Toggle state
    const pathname = usePathname(); // Get current path

    const pages = [
        { name: "Home", url: "/" },
        { name: "PswdGen", url: "/pswdgen" },
        { name: "One", url: "/one" },
        { name: "Two", url: "/two" },
        { name: "Three", url: "/three" },
        { name: "Four", url: "/four" },
    ];

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
                className={`fixed top-0 left-0 h-screen w-60 bg-gray-800 text-white p-4 shadow-lg z-40 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-60"
                } md:translate-x-0`}
            >
                {/* Added spacing at the top */}
                <div className="pt-10 md:pt-4">
                    <h2 className="text-xl font-semibold mb-4">React25</h2>
                </div>

                <ul className="space-y-3">
                    {pages.map((page, index) => {
                        const isActive = pathname === page.url;
                        return (
                            <li key={index}>
                                <Link href={page.url} replace scroll={false}>
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
        </>
    );
};

export default Header;
