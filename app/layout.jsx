import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100","200","300","400","500","600","700","800"],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "BlockDoc",
  description: "Decentralize Your Data with BlocDoc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
              style: {
                borderRadius: '10px',
                background: '#1F4047',
                color: '#fff',
              },
          }}
        />
        <Header />
        <StairTransition />
        <PageTransition>
        {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}


