import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

<nav className="w-full bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl">My Website</h1>
          <div>
          <Link href="/." className="text-white px-4 py-2">
              Home
            </Link>
            <Link href="/signup" className="text-white px-4 py-2">
              Signup
            </Link>
            <Link href="/login" className="text-white px-4 py-2">
              Login
            </Link>
          </div>
        </div>
      </nav>

        {children}
      </body>
    </html>
  );
}
