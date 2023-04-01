import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Bard Knight',
    studio: 'Grump Studios',

    genre: "Platformer",
    platform: "Windows",
    productionTime: "8 weeks (50%)",
    teamSize: "15",
    contributions: ["Player", "Moving Platforms"],

    description:
        (
            <div>
                My fourth project at The Game Assembly was a 2.5D platformer that was unlike anything I had worked on before.
                The game was called "Bard Knight" and it was about a knight who had to collect musical instruments and traverse through levels to complete his songs. <br /><br />
                What made this project unique was that we got the chance to collaborate with students from a music school called Östra Grevie.
                This collaboration allowed us to incorporate music into the gameplay in a way that was both fun and educational.
            </div>
        ),
    trailer: "/assets/projects/bardknight/bardknight.mp4",
    poster: "/assets/projects/bardknight/bardknight.png",

    team: [
        // SP
        {
            name: "Casper Bengtsson",
            role: "SP",
            website: "https://www.casperbengtsson.com/"
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
            name: "David Bohlin",
            role: "SG",
            website: "https://david_bohlin.artstation.com/"
        },
        {
            name: "Simon Grefbäck",
            role: "SG",
            website: ""
        },
        {
            name: "Mirjam Hildahl",
            role: "SG",
            website: ""
        },
        // SA
        {
            name: "Jonas Berggren",
            role: "SA",
            website: "https://jonasbanimation.portfoliobox.net/"
        },
        {
            name: "Daniel Fornell",
            role: "SA",
            website: ""
        },
        {
            name: "Hugo Jansson",
            role: "SA",
            website: ""
        },
        // LD
        {
            name: "Christoffer Carlsvärd",
            role: "LD",
            website: ""
        },
        {
            name: "Christoffer Janbris",
            role: "LD",
            website: ""
        },
        // ÖG
        {
            name: "Alexander Eggers",
            role: "ÖG",
            website: ""
        },
        {
            name: "Nikolaus Harryson",
            role: "ÖG",
            website: ""
        },
    ],

    containers: [
        {
            title: "Player Animations",
            video: "",
            poster: "/assets/projects/bardknight/walkfallanimation.gif"
        },
        {
            title: "Physics Based Movement",
            video: "/assets/projects/bardknight/playerphysxmovement.mp4",
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