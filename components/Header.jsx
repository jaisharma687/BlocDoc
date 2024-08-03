"use client"

import Link from "next/link"
import { useState } from "react"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import ConnectWallet from "./ConnectWallet"

export const Header = () => {
  const [account, setAccount] = useState(null)

  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <div className="flex flex-col gap-4">
              <Link href="/">
                <h1 className="text-4xl font-semibold">
                    <span className="hover:text-red">BlocDoc</span><span className="text-accent">.</span>
                </h1>
              </Link>
              <div className="xl:hidden flex gap-8 items-center">
                <ConnectWallet account={account} setAccount={setAccount} />
              </div>
            </div>
            {/* desktop navbar & connect wallet */}
            <div className="hidden xl:flex items-center gap-8">
              <Nav />
              <ConnectWallet account={account} setAccount={setAccount} />
            </div>
            {/* mobile navbar */}
            <div className="xl:hidden flex gap-8 items-center">
              <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header