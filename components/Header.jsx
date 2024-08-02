"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

export const Header = () => {
  const [account, setAccount] = useState(null)

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const checkIfWalletIsConnected = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        if (accounts.length > 0) {
          setAccount(accounts[0])
        }
      } catch (error) {
        console.error("An error occurred while checking the wallet connection:", error)
      }
    }
  }

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        setAccount(accounts[0])
      } catch (error) {
        console.error("An error occurred while connecting the wallet:", error)
      }
    } else {
      alert("Please install MetaMask!")
    }
  }

  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                <span className="hover:text-red">BlocDoc</span><span className="text-accent">.</span>
            </h1>
            </Link>
            {/* desktop navbar & connect wallet */}
            <div className="hidden xl:flex items-center gap-8">
              <Nav />
              <Button onClick={connectWallet} className={account ? 'bg-accent text-primary hover:bg-accent-hover' : 'bg-red text-primary hover:bg-red-hover'}>
                {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
              </Button>
            </div>
            {/* mobile navbar */}
            <div className="xl:hidden flex gap-8 items-center">
              <Button onClick={connectWallet} className={account ? 'bg-accent text-primary hover:bg-accent-hover' : 'bg-red text-primary hover:bg-red-hover'}>
                {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
              </Button>
              <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header