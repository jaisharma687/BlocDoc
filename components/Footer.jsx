"use client";

import Link from "next/link";
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary">
        <div className="container">
            <div className="flex justify-between items-center py-10">
            <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        <span className="hover:text-red">BlocDoc</span><span className="text-accent">.</span>
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-5">
            <Link
                aria-label="GitHub"
                href="https://github.com/Siddhantbg/BlocDoc"
                target="_blank"
                rel="noopener noreferrer nofollow"
            >
                <div className="w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] bg-primary text-accent rounded-md flex items-center justify-center hover:text-accent-hover">
                    <div className="text-[28px]">
                        <FaGithub />
                    </div>
                </div>
            </Link>
            <Link
                aria-label="GitHub"
                href="https://github.com/Siddhantbg/BlocDoc"
                target="_blank"
                rel="noopener noreferrer nofollow"
            ><div className="text-xl font-semibold hover:text-red">GitHub Repository</div></Link>
            </div>

            </div>
        </div>
        <div className="border-t border-border py-7">
            <div className="container text-center text-light">
            <p>Designed and Developed by Siddhant, Jai & Shreyash &#129293;</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;