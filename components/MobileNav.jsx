"use client";

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "contact",
        path: "/contact",
    }
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className='flex justify-center items-center' onClick={() => setIsOpen(true)}>
                    <CiMenuFries className='text-[32px] text-red hover:text-red-hover' />
                </button>
            </SheetTrigger>
            <SheetContent side="right" className='flex flex-col'>
                {/*logo*/}
                <div className="text-2xl mt-32 mb-40 text-center">
                    <Link href="/" onClick={handleLinkClick}>
                        <h1 className='text-4xl font-semibold'>
                            <span className="hover:text-red">BlocDoc</span><span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col gap-8 justify-center items-center">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                onClick={handleLinkClick}
                                className={`${
                                    link.path === pathname
                                    && "text-red border-b-2 border-red"
                                } text-xl capitalize font-medium hover:text-red transition-all`}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
