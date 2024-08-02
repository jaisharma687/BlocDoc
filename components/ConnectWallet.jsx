import { useEffect } from 'react'
import { Button } from './ui/button'

const ConnectWallet = ({ account, setAccount }) => {
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
    <Button
    onClick={connectWallet}
    className={account ? 'bg-accent text-primary hover:bg-accent-hover' : 'bg-red text-primary hover:bg-red-hover'}
    >
    {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
    </Button>
)
}

export default ConnectWallet
