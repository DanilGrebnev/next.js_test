import type { Metadata } from "next"
import { Header } from "@/shared/components/Header"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "First page",
    description: "First page",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const links = [
        { href: "/", text: "home" },
        { href: "about", text: "about" },
    ]

    return (
        <html lang="en">
            <body className={inter.className}>
                <Header id="Header" links={links} />
                <main id="Pages">{children}</main>
            </body>
        </html>
    )
}
