import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: `Cute 'em up`,
    studio: 'AGT',

    genre: "Shoot 'em up",
    platform: "Windows",
    productionTime: "6 weeks (50%)",
    teamSize: "13",
    contributions: ["To", "Be", "Continued"],

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.",
    trailer: "/assets/projects/cuteemup/cuteemup.mp4",
    poster: "/assets/projects/cuteemup/cuteemup.png",

    team: [
        // SP
        {
            name: "Samuel Ryberg",
            role: "SP",
            website: "https://www.samuelryberg.com/"
        },
        {
            name: "Elin Granath",
            role: "SP",
            website: "https://www.elingranath.com/"
        },
        {
            name: "Molly Tandberg",
            role: "SP",
            website: ""
        },
        {
            name: "Casper Bengtsson",
            role: "SP",
            website: "https://www.casperbengtsson.com/"
        },
        {
            name: "Erik Jerpander",
            role: "SP",
            website: "https://www.erikjerpander.com/"
        },
        {
            name: "Stefan Pihlström",
            role: "SP",
            website: ""
        },
        // SG
        {
            name: "Bastian Helly-Hansen",
            role: "SG",
            website: ""
        },
        {
            name: "Lowe Silverlyra",
            role: "SG",
            website: ""
        },
        {
            name: "Gustav Ryde",
            role: "SG",
            website: ""
        },
        // SA
        {
            name: "Daniel Nagy",
            role: "SA",
            website: ""
        },
        {
            name: "Christopher Orantes Diaz",
            role: "SA",
            website: ""
        },
        // LD
        {
            name: "Tilde Persson",
            role: "LD",
            website: ""
        },
        {
            name: "Oliver Ringh",
            role: "LD",
            website: ""
        },
        {
            name: "Hannes Wäst",
            role: "LD",
            website: ""
        },
    ],

    containers: [
        {
            title: "Bullet Hell",
            video: "",
            poster: "/assets/projects/cuteemup/bossbullethell.png"
        },
        {
            title: "Spread Bullets",
            video: "",
            poster: "/assets/projects/cuteemup/bossmultibullets.png"
        },
        {
            title: "Single Bullets",
            video: "",
            poster: "/assets/projects/cuteemup/bossnormalbullets.png"
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