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
    
    team: [],

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