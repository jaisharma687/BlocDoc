"use client"

import Image from "next/image";
import { useState } from "react"
import ConnectWallet from "@/components/ConnectWallet";
import { Button } from '@/components/ui/button'

export default function Home() {
  const [account, setAccount] = useState(null)

  const redirectAbout = ()=>{
    window.location.href = "/about"
  }
  return (
    <>
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-center xl:flex-row xl:pt-8 xl:pb-24 min-w-min pt-2 pb-6">
          {/* text */}
          <div className="text-center xl:text-left">
            <h1 className="h1 mb-6 hover:text-accent">Decentralize Your Data with BlocDoc</h1>
            <p className="mb-9 text-white/80 hover:text-red/80">
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
            <div className="w-[498px] h-[498px] min-w-min">
            <Image src = "/assets/block.gif" priority quality={100} fill alt="BlocDoc"  className="object-contain"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}