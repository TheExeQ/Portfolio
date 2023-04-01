import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Spite: The Yellow Plague',
    studio: 'Coinflip Studios',

    genre: "Dungeon Crawler",
    platform: "Windows",
    productionTime: "14 weeks (50%)",
    teamSize: "23",
    contributions: ["Parts of Engine/Editor", "Math Library", "Navigation Mesh"],

    description:
        (
            <div>
                My sixth project at The Game Assembly was a dungeon crawler called "Spite: The Yellow Plague". <br /><br />
                The game was about a witch hunter who had been recruited by a village to end the yellow plague that was spreading in the swamp next to the village.
                On his quest to protect the village, the hunter meets a creature that lives in the swamp, which offers to help him by giving him abilities in return for parts of his soul. <br /><br />
                What made this project special was that it was the first time we built our own game engine from scratch.
                The engine was named "Volt" and creating it was a challenging task, but also very fun and exciting.
                We had to think about every aspect of game development, from the physics engine to the rendering pipeline.
            </div>
        ),
    trailer: "/assets/projects/spiteyellowplague/spite.mp4",
    poster: "/assets/projects/spiteyellowplague/spite.png",

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
            name: "Stefan Pihlström",
            role: "SP",
            website: ""
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
            website: ""
        },
        {
            name: "Albin Gunther",
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
            name: "Emily Bengtsson",
            role: "SA",
            website: ""
        },
        {
            name: "Moa Bergman",
            role: "SA",
            website: "https://moabergman.portfoliobox.net/"
        },
        {
            name: "Alexander Diec",
            role: "SA",
            website: ""
        },
        {
            name: "Jacob Fransson",
            role: "SA",
            website: ""
        },
        // LD
        {
            name: "Christoffer Janbris",
            role: "LD",
            website: ""
        },
        {
            name: "Vincent Karagöz",
            role: "LD",
            website: ""
        },
        {
            name: "Mattias Larsson",
            role: "LD",
            website: ""
        },
        {
            name: "Linus Lindborg-Persson",
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
        {
            name: "Christian Mucha",
            role: "TA",
            website: ""
        },
    ],

    containers: [
        {
            title: "Navmesh Tool",
            video: "/assets/projects/spiteyellowplague/finalnavmeshtool.mp4",
            poster: ""
        },
        {
            title: "Navmesh In Game",
            video: "/assets/projects/spiteyellowplague/navmeshingame.mp4",
            poster: ""
        },
        {
            title: "Navmesh Ai",
            video: "/assets/projects/spiteyellowplague/navmeshai.mp4",
            poster: ""
        },
        {
            title: "NavMesh Generation",
            video: "/assets/projects/spiteyellowplague/navmeshgeneration.mp4",
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