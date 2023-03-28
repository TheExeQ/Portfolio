import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Bard Knight',
    studio: 'Grump Studios',

    genre: "Platformer",
    platform: "Windows",
    productionTime: "8 weeks (50%)",
    teamSize: "15",
    contributions: ["To", "Be", "Continued"],

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.",
    trailer: "/assets/projects/bardknight/bardknight.mp4",
    poster: "/assets/projects/bardknight/bardknight.png",

    team: [],

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