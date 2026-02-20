import React from 'react'
import { Cog } from 'lucide-react';
import { div } from 'motion/react-client';

interface Info {
    name: string,
    image: string
}

const cardInfo: Info[] = [
    {
        name: "HTML",
        image: "/html-svgrepo-com.svg"
    },
    {
        name: "CSS",
        image: "/css3-svgrepo-com.svg"
    },
    {
        name: "JavaSript",
        image: "/javascript-svgrepo-com.svg"
    },
    {
        name: "React",
        image: "/React.svg"
    },
    {
        name: "NextJs",
        image: "/Next.js.svg"
    },
    {
        name: "Express",
        image: "/Express.svg"
    },
    {
        name: "Prisma",
        image: "/light-prisma-svgrepo-com.svg"
    },
    {
        name: "Postgres",
        image: "/postgresql-svgrepo-com.svg"
    },
    {
        name: "MongoDB",
        image: "/MongoDB.svg"
    },
    {
        name: "Linux",
        image: "/Linux.svg"
    },
]

export const Card = ({ name, image }: Info) => {
    return (
        <div className='flex items-center flex-col w-30 h-44 bg-amber-50/7 backdrop-blur-md gap-4 px-4 pb-4 pt-6 rounded-2xl border border-white/10'>
            <img className='w-full' src={image} alt="html-icon" />
            <h1 className='text-white text-xl'>{name}</h1>
        </div>
    )
}

const Main = () => {
    return (
        <main className=''>
            <div className='mt-50 p-6 rounded-xl border border-white/5 bg-amber-50/10 backdrop-blur-md'>
                <h1 className='text-white text-4xl mb-6'>Abou Me</h1>
                <div>
                    <p className='text-white text-xl font-light leading-10'>I’m a Full-Stack JavaScript Developer passionate about building scalable, secure, and high-performance web applications.
                        I specialize in modern technologies like React, Next.js, Node.js, and relational databases, with a strong foundation in Linux and backend architecture.
                        I focus on writing clean, maintainable code and designing systems that are efficient, reliable, and user-friendly.
                        Currently, I’m expanding my knowledge in security and system design to build applications that are not only functional — but resilient and production-ready.</p>
                </div>
            </div>

            <div className='w-full mt-52'>
                <div className='flex items-center text-white text-6xl gap-4 mx-auto w-max'>
                    <h1>Teach Stack</h1>
                    <Cog />
                </div>
                <div className='w-max mx-auto mt-24'>
                    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-1  gap-24 '>
                        {
                            cardInfo.map((card, index) => {
                                return <Card key={index} {...card} />
                            })
                        }
                    </div>
                </div>
            </div>


        </main>
    )
}

export default Main
