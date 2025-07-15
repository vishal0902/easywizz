import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import { redirect } from "next/navigation";
import { LogoSection } from "./components/LogoSection";
import { Toaster } from "react-hot-toast";
import { Roboto } from 'next/font/google';

import {Nunito} from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // choose the weights you need
  variable: '--font-nunito',     // optional: for CSS variable
  display: 'swap',
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "EasyWizz",
  description: "E-Office solutions",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body
        className={nunito.className}
        // className={`${nunito.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{fontSize:"1.2em", padding:"10px"}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#4885ff",
                secondary: "black",
              },
            },
          }}
        />
        <SessionProvider session={session}>
          <header className="my-4 flex justify-between text-xl font-bold items-center p-4 gap-4 h-16">
            <LogoSection />

            <div>
              <LoginButton />
            </div>
          </header>

          {children}
          <Analytics />
        </SessionProvider>
      </body>
    </html>
  );
}
