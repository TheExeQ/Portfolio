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
    
    team: [],

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