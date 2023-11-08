import type { Metadata } from "next"
import { Header } from "@/shared/components/Header"
import { Inter } from "next/font/google"
import { routes } from "@/Providers/PageRoutes"
import { StoreProvider } from "@/Providers/ReduxProvider"

import "./styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Home page",
    description: "First page description",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <main id="Pages">
                        <Header id="Header" routes={routes} />
                        <section id="page-wrapper">{children}</section>
                    </main>
                </StoreProvider>
            </body>
        </html>
    )
}

export default RootLayout
