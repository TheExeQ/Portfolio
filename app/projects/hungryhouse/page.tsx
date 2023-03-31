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

    team: [
        // SP
        {
            name: "Samuel Ryberg",
            role: "SP",
            website: "https://www.samuelryberg.com/"
        },
        {
            name: "Ivar Jönsson",
            role: "SP",
            website: "https://www.ivarjonsson.com/"
        },
        {
            name: "Benjamin Ek",
            role: "SP",
            website: "https://www.benjaminek.com/"
        },
        {
            name: "Markus Hermelin",
            role: "SP",
            website: "https://www.markushermelin.com/"
        },
        {
            name: "Jesper Andersson",
            role: "SP",
            website: "https://www.jesscodes.net/"
        },
        {
            name: "Erik Neuman",
            role: "SP",
            website: "https://www.erikneuman.com/"
        },
        // SG
        {
            name: "David Bohlin",
            role: "SG",
            website: "https://david_bohlin.artstation.com/"
        },
        {
            name: "Daniel Gryningstjerna",
            role: "SG",
            website: ""
        },
        {
            name: "Pernilla Sonne",
            role: "SG",
            website: ""
        },
        {
            name: "Malin Fröjd",
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
            name: "Tanya Bengtsson",
            role: "SA",
            website: "https://www.tanyabengtsson.se/"
        },
        // LD
        {
            name: "Elias Carlsson",
            role: "LD",
            website: "https://www.eliascdesign.com/"
        },
        {
            name: "Vanessa Grundström",
            role: "LD",
            website: ""
        },
    ],

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