import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Ekaya & Pebbles',
    studio: 'Coinflip Studios',

    genre: "Third Person",
    platform: "Windows",
    productionTime: "14 weeks (50%)",
    teamSize: "21",
    contributions: ["To", "Be", "Continued"],

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.",
    trailer: "/assets/projects/spiteyellowplague/spite.mp4",
    poster: '/assets/projects/ekayaandpebbles/ekaya.png',
    
    team: [
        // SP
        {
            name: "Samuel Ryberg",
            role: "SP",
            website: "https://www.samuelryberg.com/"
        },
        {
            name: "Andréas Isaksson",
            role: "SP",
            website: "https://www.andreasisaksson.com/"
        },
        {
            name: "Ivar Jönsson",
            role: "SP",
            website: "https://www.ivarjonsson.com/"
        },
        {
            name: "Casper Bengtsson",
            role: "SP",
            website: "https://www.casperbengtsson.com/"
        },
        {
            name: "Max Hartell",
            role: "SP",
            website: "https://www.maxhartell.com/"
        },
        {
            name: "Mateusz Salaga",
            role: "SP",
            website: "https://www.mateuszsalaga.com/"
        },
        // SG
        {
            name: "Albin Gunther",
            role: "SG",
            website: ""
        },
        {
            name: "Emal Ghouse",
            role: "SG",
            website: ""
        },
        {
            name: "Gustav Ryde",
            role: "SG",
            website: ""
        },
        {
            name: "Sebastian Schaffer",
            role: "SG",
            website: ""
        },
        {
            name: "Pernilla Sonne",
            role: "SG",
            website: ""
        },
        // SA
        {
            name: "Moa Bergman",
            role: "SA",
            website: "https://moabergman.portfoliobox.net/"
        },
        {
            name: "Emily Bengtsson",
            role: "SA",
            website: ""
        },
        {
            name: "Jacob Fransson",
            role: "SA",
            website: ""
        },
        {
            name: "Alexander Diec",
            role: "SA",
            website: ""
        },
        // LD
        {
            name: "Mattias Larsson",
            role: "LD",
            website: ""
        },
        {
            name: "Christoffer Janbris",
            role: "LD",
            website: ""
        },
        {
            name: "Linus Lindborg-Persson",
            role: "LD",
            website: ""
        },
        {
            name: "Vincent Karagöz",
            role: "LD",
            website: ""
        },
        // TA
        {
            name: "Gopal Alvarez",
            role: "TA",
            website: ""
        },
        {
            name: "Charlin Hansson",
            role: "TA",
            website: ""
        },
    ],

    containers: [
        {
            title: "Control Reference",
            video: "/assets/projects/ekayaandpebbles/ekayacontrolreference.mp4",
            poster: ""
        },
        {
            title: "Mono C# Integration",
            video: "/assets/projects/ekayaandpebbles/monostrings.mp4",
            poster: ""
        },
        {
            title: "Telekinesis Prototype",
            video: "/assets/projects/ekayaandpebbles/telekinesisprototype.mp4",
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