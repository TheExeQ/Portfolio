import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: `Bo's Morning`,
    studio: 'Sad Centaur',

    genre: "Adventure",
    platform: "Windows",
    productionTime: "8 weeks (50%)",
    teamSize: "14",
    contributions: ["To", "Be", "Continued"],

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.",
    trailer: "/assets/projects/morningofbo/bo.mp4",
    poster: "/assets/projects/morningofbo/bo.png",

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