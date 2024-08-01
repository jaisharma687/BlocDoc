import Link from "next/link"
import { Button } from "./ui/button"

// components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

export const Header = () => {
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
              <Link href="/login">
                <Button>Connect to Wallet</Button>
              </Link>
            </div>
            {/* mobile navbar */}
            <div className="xl:hidden flex gap-8 items-center">
              <Link href="/login">
                <Button>Connect to Wallet</Button>
              </Link>
              <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header