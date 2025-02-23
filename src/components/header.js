"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pages = [
        { name: "Home", url: "/" },
        { name: "PswdGen", url: "/pswdgen" },
        { name: "One", url: "/one" },
        { name: "Two", url: "/two" },
        { name: "Three", url: "/three" },
        { name: "Four", url: "/four" },
    ];

    const pathname = usePathname(); // Get current path

    return (
        <div className="fixed top-0 left-0 h-screen w-60 bg-gray-800 text-white p-4 shadow-lg z-50">
            <h2 className="text-xl font-semibold mb-4">React25</h2>
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
    );
};

export default Header;
