import Project, { ProjectProps } from '../components/project'

const projectProp: ProjectProps = {
    title: 'Network System',
    studio: 'Solo Specialization Project',

    genre: "Any",
    platform: "Windows, MacOS & Linux",
    productionTime: "5 weeks (50%)",
    teamSize: "Solo",
    contributions: ["UDP Sockets", "Cross Platform", "API Abstraction", /*"Variable Replication",*/ "Dedicated Server Support"],

    description:
        (
            <div>
                For my solo specialization project, I decided to tackle the challenge of creating a networking system for my own game engine.
                I wanted to create a system that would be cross-platform, with an abstraction layer that would allow support for multiple different networking APIs.<br /><br />
                Additionally, I took a lot of inspiration from Unreal's replication system and wanted to create a simplified version of this for my own engine.
            </div>
        ),
    trailer: "/assets/specialization/arylnet.mp4",
    poster: "/assets/specialization/arylnet.png",

    team: [],

    containers: [
        {
            title: "API Abstraction",
            video: "",
            poster: "/assets/specialization/1.png"
        },
        {
            title: "Reciever Usage",
            video: "",
            poster: "/assets/specialization/2.png"
        },
        {
            title: "Sender Usage",
            video: "",
            poster: "/assets/specialization/3.png"
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