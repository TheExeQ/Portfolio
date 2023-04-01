import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Ekaya & Pebbles: A Helping Hand',
    studio: 'Coinflip Studios',

    genre: "Third Person",
    platform: "Windows",
    productionTime: "14 weeks (50%)",
    teamSize: "21",
    contributions: ["Player", "C# Scripting", "Arena System"],

    description: "My seventh project at The Game Assembly was another game built on the same engine \"Volt\" we created in our previous project. Since we already had most of the functionality required to create games, we were able to get started a lot faster this time around. We also had the advantage of being able to improve on our previous mistakes, which made the development process much smoother. The game we created this time was a third-person adventure game called \"Ekaya & Pebbles: A Helping Hand\". In this game, players take on the role of a female character named Ekaya, who sets out on a journey to restart the heart of an ancient colossus. Along the way, she is accompanied by a little companion named Pebbles, who has telekinetic powers that can help her on her journey.",
    trailer: "/assets/projects/spiteyellowplague/spite.mp4",
    poster: '/assets/projects/ekayaandpebbles/ekaya.png',
    
    team: [
        // SP
        {
            name: "Samuel Ryberg",
            role: "SP",
            website: "https://www.samuelryberg.com/"
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
            name: "Mateusz Salaga",
            role: "SP",
            website: "https://www.mateuszsalaga.com/"
        },
        // SG
        {
            name: "Albin Gunther",
            role: "SG",
            website: ""
        },
        {
            name: "Emal Ghouse",
            role: "SG",
            website: ""
        },
        {
            name: "Gustav Ryde",
            role: "SG",
            website: ""
        },
        {
            name: "Sebastian Schaffer",
            role: "SG",
            website: ""
        },
        {
            name: "Pernilla Sonne",
            role: "SG",
            website: ""
        },
        // SA
        {
            name: "Moa Bergman",
            role: "SA",
            website: "https://moabergman.portfoliobox.net/"
        },
        {
            name: "Emily Bengtsson",
            role: "SA",
            website: ""
        },
        {
            name: "Jacob Fransson",
            role: "SA",
            website: ""
        },
        {
            name: "Alexander Diec",
            role: "SA",
            website: ""
        },
        // LD
        {
            name: "Mattias Larsson",
            role: "LD",
            website: ""
        },
        {
            name: "Christoffer Janbris",
            role: "LD",
            website: ""
        },
        {
            name: "Linus Lindborg-Persson",
            role: "LD",
            website: ""
        },
        {
            name: "Vincent Karagöz",
            role: "LD",
            website: ""
        },
        // TA
        {
            name: "Gopal Alvarez",
            role: "TA",
            website: ""
        },
        {
            name: "Charlin Hansson",
            role: "TA",
            website: ""
        },
    ],

    containers: [
        {
            title: "Control Reference",
            video: "/assets/projects/ekayaandpebbles/ekayacontrolreference.mp4",
            poster: ""
        },
        {
            title: "Mono C# Integration",
            video: "/assets/projects/ekayaandpebbles/monostrings.mp4",
            poster: ""
        },
        {
            title: "Telekinesis Prototype",
            video: "/assets/projects/ekayaandpebbles/telekinesisprototype.mp4",
            poster: ""
        }
    ]
}

export default function Projects(): JSX.Element {
    return (
        <div className="w-full">
            <Project {...projectProp} />
        </div>
    )
}