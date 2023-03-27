import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Akaya & Pebbles',
    studio: 'Coinflip Studios',

    genre: "Third Person",
    platform: "Windows",
    productionTime: "14 weeks (50%)",
    teamSize: "21",
    contributions: ["To", "Be", "Continued"],

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.",
    trailer: "/assets/projects/spiteyellowplague/spite.mp4",
    poster: '/assets/projects/akayaandpebbles/akaya.png',
    
    containers: [
        {
            title: "Control Reference",
            video: "/assets/projects/akayaandpebbles/akayacontrolreference.mp4",
            poster: ""
        },
        {
            title: "Mono C# Integration",
            video: "/assets/projects/akayaandpebbles/monostrings.mp4",
            poster: ""
        },
        {
            title: "Telekinesis Prototype",
            video: "/assets/projects/akayaandpebbles/telekinesisprototype.mp4",
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