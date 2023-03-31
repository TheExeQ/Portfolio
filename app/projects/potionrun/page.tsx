import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Potion Run',
    studio: 'Mythical Studios',

    genre: "Runner",
    platform: "Windows",
    productionTime: "6 weeks (50%)",
    teamSize: "13",
    contributions: ["To", "Be", "Continued"],

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.",
    trailer: "/assets/projects/potionrun/potionrun.mov",
    poster: "/assets/projects/potionrun/potionrun.png",
    
    team: [
        // SP
        {
            name: "Samuel Ryberg",
            role: "SP",
            website: "https://www.samuelryberg.com/"
        },
        {
            name: "Fabian Randau",
            role: "SP",
            website: "https://www.fabianrandau.com/"
        },
        {
            name: "Alexander Rosendahl",
            role: "SP",
            website: ""
        },
        {
            name: "August Smith",
            role: "SP",
            website: "https://www.augustsmith.dev/"
        },
        {
            name: "Mateusz Salaga",
            role: "SP",
            website: "https://www.mateuszsalaga.com/"
        },
        // SG
        {
            name: "Max Kock",
            role: "SG",
            website: "http://maxkock.artstation.com/"
        },
        {
            name: "Anes Sabanovic",
            role: "SG",
            website: "https://anessabanovic.artstation.com/"
        },
        {
            name: "Gustav Ryde",
            role: "SG",
            website: ""
        },
        {
            name: "Falke Persson",
            role: "SG",
            website: ""
        },
        // SA
        {
            name: "Mattias Ohlsson",
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
            name: "Jonathan Mårtensson",
            role: "LD",
            website: ""
        },
        {
            name: "Tilde Persson",
            role: "LD",
            website: ""
        },        
    ],

    containers: [
        {
            title: "Level Transition",
            video: "/assets/projects/potionrun/leveltransition.mp4",
            poster: ""
        },
        {
            title: "Monster Showcase",
            video: "/assets/projects/potionrun/monstershowcase.mp4",
            poster: ""
        },
        {
            title: "Block Generator",
            video: "/assets/projects/potionrun/blockgenerator.mp4",
            poster: ""
        },
        {
            title: "Checkpoints Alpha",
            video: "/assets/projects/potionrun/checkpointsalpha.mp4",
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