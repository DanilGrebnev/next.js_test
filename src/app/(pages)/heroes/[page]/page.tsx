import { IHeroes } from "@/shared/types/Hero"
import { v4 } from "uuid"
import { Link } from "@/shared/components/Link"

interface HeroesPageProps {
    params: {
        page: number
    }
}

const getHeroes = async (page: number = 1): Promise<IHeroes> => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`)
    return response.json()
}

const HeroesPage = async (props: HeroesPageProps) => {
    const { params } = props
    const response = await getHeroes(params.page)

    const getPage = (url: string): number => {
        return (url ? new URL(url).searchParams.get("page") : params.page) as number
    }

    const getHeroValue = (url: string) => {
        let stick = 0
        let count = ""

        for (let i = url.length; i >= 0; i--) {
            const item = url[i]

            if (item === "/") {
                stick++
                continue
            }

            if (stick === 2) break
            if (!item) continue

            count += item
        }
        const reverseCount = +count.split("").reverse().join("")

        return reverseCount
    }

    const nextPage = +getPage(response.next)
    const prevPage = +getPage(response.previous)

    const baseUrl = "/heroes/"

    const nextHref = baseUrl + nextPage
    const prevHref = baseUrl + prevPage

    return (
        <section id="Heroes-page" className="Heroes-page">
            <h1>Heroes page</h1>
            <div>page: {params.page}</div>

            {response.results.map((hero) => {
                const page = getHeroValue(hero.url)
                return (
                    <li key={v4()}>
                        <div>{hero.name}</div>
                        <Link href={"/hero/" + page}>more</Link>
                    </li>
                )
            })}

            <Link href={nextHref}>Next</Link>
            <Link href={prevHref}>Prev</Link>
        </section>
    )
}

export default HeroesPage
