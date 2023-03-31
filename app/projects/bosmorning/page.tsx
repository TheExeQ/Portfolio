import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: `Bo's Morning`,
    studio: 'Sad Centaur',

    genre: "Adventure",
    platform: "Windows",
    productionTime: "8 weeks (50%)",
    teamSize: "13",
    contributions: ["To", "Be", "Continued"],

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.",
    trailer: "/assets/projects/morningofbo/bo.mp4",
    poster: "/assets/projects/morningofbo/bo.png",

    team: [
                // SP
                {
                    name: "Samuel Ryberg",
                    role: "SP",
                    website: "https://www.samuelryberg.com/"
                },
                {
                    name: "Benjamin Ek",
                    role: "SP",
                    website: "https://www.benjaminek.com/"
                },
                {
                    name: "Niklas Fredriksson",
                    role: "SP",
                    website: ""
                },
                {
                    name: "Niklas Jakobsen",
                    role: "SP",
                    website: "https://www.niklasjakobsen.dev/"
                },
                {
                    name: "Neo Nemeth",
                    role: "SP",
                    website: ""
                },
                // SG
                {
                    name: "Victor Ek",
                    role: "SG",
                    website: ""
                },
                {
                    name: "Albin Gunther",
                    role: "SG",
                    website: ""
                },
                {
                    name: "Elin Ekelöw",
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
                    name: "Daniel Fornell",
                    role: "SA",
                    website: ""
                },
                // LD
                {
                    name: "Vanessa Grundström",
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
    ],

    containers: [
        {
            title: "Hedgehog Attack",
            video: "/assets/projects/morningofbo/hedgehogattack.mp4",
            poster: ""
        },
        {
            title: "Frog Attack",
            video: "",
            poster: "/assets/projects/morningofbo/frogattacking.gif"
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