import React from 'react'
import ProjectItem from './projectitem'

export default function Projects(): JSX.Element {
    return (
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-xl tracking tracking-widest uppercase text-[#F7AB0A]">
                Projects
            </p>
            <h2 className="py-4">
                Here are some of the projects I've worked on
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <ProjectItem title="Akaya & Pebbles" studio="Coinflip Studios" image={"/assets/projects/akayaandpebbles/akaya.png"} />
                <ProjectItem title="Spite: The Yellow Plague" studio="Coinflip Studios" image={"/assets/projects/spiteyellowplague/spite.png"} />
                <ProjectItem title="Bo's Morning" studio="Sad Centaur" image={"/assets/projects/morningofbo/bo.png"} />
                <ProjectItem title="Bard Knight" studio="Grump Studios" image={"/assets/projects/bardknight/bardknight.png"} />
                <ProjectItem title="Cute 'em up" studio="AGT" image={"/assets/projects/cuteemup/cuteemup.png"} />
                <ProjectItem title="Hungry House" studio="Smooth Brain Studios" image={"/assets/projects/hungryhouse/hungryhouse.png"} />
                <ProjectItem title="Potion Run" studio="Mythical Studios" image={"/assets/projects/potionrun/potionrun.png"} />
            </div>
        </div>
    )
}