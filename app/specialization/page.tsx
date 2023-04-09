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
                During a 5 week period under my specialization course in school, I decided to take on the challenge of creating a network system and designing the website you are currently looking at. 
                Throughout the process, I learned a great deal about networking, web development, and project management. <br /><br />
                It was a tough but fulfilling experience that taught me the importance of sticking with it and putting in the effort.
                To provide more insight into the process of making these two projects, I have added two separate segments where I talk a little more in-depth about my journey and the lessons learned. <br /><br />
                <p className="font-bold text-2xl pb-2">Network System</p>
                My goal was to develop a networking system for my game engine that could work seamlessly across different platforms. 
                To achieve this, I aimed to create an abstraction layer that would enable support for multiple networking APIs. <br /><br />
                Using Unreal Engine's replication system as a source of inspiration, I set out to develop a simpler version of their design specifically tailored for my game engine.<br /><br />
                <p className="font-bold text-2xl pb-2">Website Development</p>
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