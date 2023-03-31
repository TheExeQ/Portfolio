import Project, { ProjectProps } from '../components/project'

const projectProp: ProjectProps = {
    title: 'Network Replication System',
    studio: '',

    genre: "Any",
    platform: "Windows, MacOS & Linux",
    productionTime: "5 weeks (50%)",
    teamSize: "Solo",
    contributions: ["Socket Builder", "Reflection", "Replication"],

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.",
    trailer: "/assets/projects/spiteyellowplague/spite.mp4",
    poster: "/assets/projects/potionrun/potionrun.png",

    team: [],

    containers: [
        {
            title: "Bo",
            video: "/assets/projects/morningofbo/bo.mp4",
            poster: "/assets/projects/morningofbo/bo.png"
        },
        {
            title: "Bard Knight",
            video: "/assets/projects/bardknight/bardknight.mp4",
            poster: "/assets/projects/bardknight/bardknight.png"
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