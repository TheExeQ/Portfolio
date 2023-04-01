import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Hungry House',
    studio: 'Smooth Brain Studios',

    genre: "Puzzle",
    platform: "Mobile",
    productionTime: "6 weeks (50%)",
    teamSize: "13",
    contributions: ["Main Menu", "Progress Saving/Loading", "Creature Animations"],

    description: "During my second project I worked on a mobile puzzle game called Hungry House. The game's objective was to move a group of frogs between platforms, in order to feed a hungry living house creature. What made the game challenging was that the creature couldn't be overfed or underfed, so players had to think strategically about how to move the frogs in order to get the right amount of food to the creature. As the game progressed, it became even more challenging as obstacles were introduced. These obstacles required players to carefully consider the movements of the frogs, in order to successfully navigate the level and keep the creature happy.",
    trailer: "/assets/projects/hungryhouse/hungryhouse.mp4",
    poster: "/assets/projects/hungryhouse/hungryhouse.png",

    team: [
        // SP
        {
            name: "Jesper Andersson",
            role: "SP",
            website: "https://www.jesscodes.net/"
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
            name: "Ivar Jönsson",
            role: "SP",
            website: "https://www.ivarjonsson.com/"
        },
        {
            name: "Erik Neuman",
            role: "SP",
            website: "https://www.erikneuman.com/"
        },
        {
            name: "Samuel Ryberg",
            role: "SP",
            website: "https://www.samuelryberg.com/"
        },
        // SG
        {
            name: "David Bohlin",
            role: "SG",
            website: "https://david_bohlin.artstation.com/"
        },
        {
            name: "Malin Fröjd",
            role: "SG",
            website: ""
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
        // SA
        {
            name: "Tanya Bengtsson",
            role: "SA",
            website: "https://www.tanyabengtsson.se/"
        },
        {
            name: "Moa Bergman",
            role: "SA",
            website: "https://moabergman.portfoliobox.net/"
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