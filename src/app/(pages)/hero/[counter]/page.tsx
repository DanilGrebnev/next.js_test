import { FC } from "react"
import { IHero } from "@/shared/types/Hero"
import Head from "next/head"

interface HeroPageProps {
    params: {
        counter: number
    }
}

const getHero = async (counter: number): Promise<IHero> => {
    const response = await fetch(`https://swapi.dev/api/people/${counter}/`)
    return response.json()
}

const Hero: FC<HeroPageProps> = async (props) => {
    const { params } = props

    const res = await getHero(params.counter)

    return (
        <>
            <Head>
                <title>{res.name}</title>
                <meta property="og:title" content={res.name} name="title" key="title" />
            </Head>
            <div>
                <div>name: {res.name}</div>
                <div>height: {res.height}</div>
                <div>gender: {res.gender}</div>
                <div>mass: {res.mass}</div>
            </div>
        </>
    )
}

export default Hero
