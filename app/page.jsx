"use client";

import Image from "next/image";
import { useState } from "react";
import ConnectWallet from "@/components/ConnectWallet";
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

export default function Home() {
  const [account, setAccount] = useState(null);

  const redirectAbout = () => {
    window.location.href = "/about";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" }
      }}
      className="h-full w-full"
    >
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col items-center justify-center xl:flex-row xl:pt-8 xl:pb-24 pt-2 pb-6 w-full">
            {/* text */}
            <div className="text-center xl:text-left">
              <h1 className="h1 mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl hover:text-accent">
                Decentralize Your Data with BlocDoc
              </h1>
              <p className="mb-9 text-white/80 text-sm md:text-base hover:text-red/80">
                BlocDoc empowers you to take control of your digital assets by leveraging the power of Web3 technology. Connect your wallet and effortlessly upload your files to the InterPlanetary File System (IPFS), ensuring secure, immutable, and decentralized storage. With BlocDoc, your data remains in your hands, protected and accessible anytime, anywhere.
              </p>
              <div className="flex justify-center xl:justify-start gap-8">
                <ConnectWallet account={account} setAccount={setAccount} />
                <Button
                  onClick={redirectAbout}
                  className='bg-red text-primary hover:bg-red-hover'>
                  About
                </Button>
              </div>
            </div>
            {/* photo */}
            <div className="w-full h-full relative">
              <Image 
                src="/assets/block.gif" 
                priority 
                quality={100} 
                layout="responsive" 
                width={498} 
                height={498} 
                alt="BlocDoc" 
                className="object-contain" 
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
