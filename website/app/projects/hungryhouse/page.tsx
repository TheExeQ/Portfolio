import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Hungry House',
    studio: 'Smooth Brain Studios',

    genre: "Puzzle",
    platform: "Mobile",
    productionTime: "6 weeks (50%)",
    teamSize: "13",
    contributions: ["To", "Be", "Continued"],

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.",
    trailer: "/assets/projects/hungryhouse/hungryhouse.mp4",
    poster: "/assets/projects/hungryhouse/hungryhouse.png",

    containers: [
        {
            title: "Divide Bug",
            video: "/assets/projects/hungryhouse/dividebug.mp4",
            poster: ""
        },
        {
            title: "Cutscene",
            video: "/assets/projects/hungryhouse/cutscene.mp4",
            poster: ""
        },
        {
            title: "House Animation Bug",
            video: "/assets/projects/hungryhouse/houseanimbug.mp4",
            poster: ""
        },
        {
            title: "Predator Animation",
            video: "/assets/projects/hungryhouse/predatoranim.mp4",
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