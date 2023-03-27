import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Spite: The Yellow Plague',
    studio: 'Coinflip Studios',

    genre: "Dungeon Crawler",
    platform: "Windows",
    productionTime: "14 weeks (50%)",
    teamSize: "23",
    contributions: ["To", "Be", "Continued"],

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.",
    trailer: "/assets/projects/spiteyellowplague/spite.mp4",
    poster: "/assets/projects/spiteyellowplague/spite.png",

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