import React from 'react'
import ProjectItem from './projectitem'

import PotionRunImage from '../../public/assets/projects/potionrun/potionrun.png'
import HungryHouseImage from '../../public/assets/projects/hungryhouse/hungryhouse.png'
import CuteEmUpImage from '../../public/assets/projects/cuteemup/cuteemup.png'
import BardKnightImage from '../../public/assets/projects/bardknight/bardknight.png'
import BoImage from '../../public/assets/projects/morningofbo/bo.png'
import SpiteImage from '../../public/assets/projects/spiteyellowplague/spite.png'
import AkayaImage from '../../public/assets/projects/akayaandpebbles/akaya.png'

export default function Projects(): JSX.Element {
    return (
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-xl tracking tracking-widest uppercase text-[#F7AB0A]">
                Projects
            </p>
            <h2 className="py-4">
                Here are some of the projects i've worked on
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <ProjectItem title="Akaya & Pebbles" studio="Coinflip Studios" image={AkayaImage} />
                <ProjectItem title="Spite: The Yellow Plague" studio="Coinflip Studios" image={SpiteImage} />
                <ProjectItem title="Bo's Morning" studio="Sad Centaur" image={BoImage} />
                <ProjectItem title="Bard Knight" studio="Grump Studios" image={BardKnightImage} />
                <ProjectItem title="Cute 'em up" studio="AGT" image={CuteEmUpImage} />
                <ProjectItem title="Hungry House" studio="Smooth Brain Studios" image={HungryHouseImage} />
                <ProjectItem title="Potion Run" studio="Mythical Studios" image={PotionRunImage} />
            </div>
        </div>
    )
}