import type { Metadata } from "next"
import { Header } from "@/shared/components/Header"
import { Inter } from "next/font/google"
import { routes } from "@/Providers/PageRoutes"
import { storeWrapper, StoreProvider, createStore } from "../Providers/StoreProvider"

import "./styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "First page",
    description: "First page description",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const store = createStore()
    return (
        <html lang="en">
            <body className={inter.className}>
                <main id="Pages">
                    <Header id="Header" routes={routes} />
                    {<StoreProvider store={store}>{children}</StoreProvider>}
                </main>
            </body>
        </html>
    )
}

export default RootLayout
