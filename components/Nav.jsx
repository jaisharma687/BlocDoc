"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <navbar className="flex gap-8">
        {links.map((link,index) => {
            return (
            <Link 
                href={link.path} 
                key={index} 
                className={`${
                    link.path ===  pathname  
                    && "text-red border-b-2 border-red"
                } capitalize font-medium hover:text-red transition-all`}>
                {link.name}
            </Link>
            );
        })}
    </navbar>
  );
};
export default Nav