import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Ekaya & Pebbles: A Helping Hand',
    studio: 'Coinflip Studios',

    genre: "Third Person",
    platform: "Windows",
    productionTime: "14 weeks (50%)",
    teamSize: "21",
    contributions: ["Player", "Mono Runtime (C# Scripting)", "Arena System"],

    description:
        (
            <div>
                My seventh project at The Game Assembly was another game built on the same engine "Volt" we created in our previous project.
                Since we already had most of the functionality required to create games, we were able to get started a lot faster this time around.<br /><br />
                We also had the advantage of being able to improve on our previous mistakes, which made the development process much smoother.
                The game we created this time was a third-person adventure game called "Ekaya & Pebbles: A Helping Hand". <br /><br />
                In this game, players take on the role of a female character named Ekaya, who sets out on a journey to restart the heart of an ancient colossus. Along the way, she is accompanied by a little companion named Pebbles, who has telekinetic powers that can help her on her journey.
            </div>
        ),

    trailer: "/assets/projects/ekayaandpebbles/ekaya.mp4",
    poster: '/assets/projects/ekayaandpebbles/ekaya.png',

    team: [
        // SP
        {
            name: "Casper Bengtsson",
            role: "SP",
            website: "https://www.casperbengtsson.com/"
        },
        {
            name: "Max Hartell",
            role: "SP",
            website: "https://www.maxhartell.com/"
        },
        {
            name: "Andréas Isaksson",
            role: "SP",
            website: "https://www.andreasisaksson.com/"
        },
        {
            name: "Ivar Jönsson",
            role: "SP",
            website: "https://www.ivarjonsson.com/"
        },
        {
            name: "Samuel Ryberg",
            role: "SP",
            website: "https://www.samuelryberg.com/"
        },
        {
            name: "Mateusz Salaga",
            role: "SP",
            website: "https://www.mateuszsalaga.com/"
        },
        // SG
        {
            name: "Emal Ghouse",
            role: "SG",
            website: "https://emalghouse.artstation.com/"
        },
        {
            name: "Albin Gunther",
            role: "SG",
            website: "https://albingunther.artstation.com/"
        },
        {
            name: "Gustav Ryde",
            role: "SG",
            website: "https://gustavryde.artstation.com/"
        },
        {
            name: "Sebastian Schaffer",
            role: "SG",
            website: "https://sebastian_schaffer.artstation.com/"
        },
        {
            name: "Pernilla Sonne",
            role: "SG",
            website: "https://pernilla_sonne.artstation.com/"
        },
        // SA
        {
            name: "Emily Bengtsson",
            role: "SA",
            website: "https://www.emilybengtsson.com/"
        },
        {
            name: "Moa Bergman",
            role: "SA",
            website: "https://moabergman.portfoliobox.net/"
        },
        {
            name: "Alexander Diec",
            role: "SA",
            website: "https://www.alexanderdiec.com/"
        },
        {
            name: "Jacob Fransson",
            role: "SA",
            website: "https://www.jacobfransson.com/"
        },
        // LD
        {
            name: "Christoffer Janbris",
            role: "LD",
            website: "https://christofferjanbris.wixsite.com/portfolio"
        },
        {
            name: "Vincent Karagöz",
            role: "LD",
            website: "https://caidian.wixsite.com/portfolio"
        },
        {
            name: "Mattias Larsson",
            role: "LD",
            website: "https://www.mattiaslarssondesign.com/"
        },
        {
            name: "Linus Lindborg-Persson",
            role: "LD",
            website: "https://www.linuslindborg.com/"
        },
        // TA
        {
            name: "Gopal Alvarez",
            role: "TA",
            website: "https://www.gopalalvarez.com/"
        },
        {
            name: "Charlin Hansson",
            role: "TA",
            website: "https://charlinhansson1997.wixsite.com/portfolio"
        },
    ],

    containers: [
        {
            title: "Telekinesis Ability",
            video: "/assets/projects/ekayaandpebbles/1.mp4",
            poster: ""
        },
        {
            title: "Player Movement",
            video: "/assets/projects/ekayaandpebbles/2.mp4",
            poster: ""
        },
        {
            title: "C# Scripting",
            video: "/assets/projects/ekayaandpebbles/3.mp4",
            poster: ""
        },
    ]
}

export default function Projects(): JSX.Element {
    return (
        <div className="w-full">
            <Project {...projectProp} />
        </div>
    )
}