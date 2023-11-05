import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About page",
    description: "About page description",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
