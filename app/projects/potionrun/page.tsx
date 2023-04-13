import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Potion Run',
    studio: 'Mythical Studios',

    genre: "Runner",
    platform: "Windows",
    productionTime: "6 weeks (50%)",
    teamSize: "13",
    contributions: ["Stumble obstacles", "Chasing Monster", "Checkpoints", "Level Transitions"],

    description:
        (
            <div>
                Potion Run was the first game project that i developed during my time at The Game Assembly, it is a runner game in which a gnome character is tasked with delivering a potion to a village before it becomes corrupted by an evil monster. <br /><br />
                The game involves avoiding obstacles along the way in order to preserve as much of the potion as possible before arriving at the destination.
                As a runner game, the focus is on keeping the gnome character moving forward while navigating the obstacles that appear in his path.
            </div>
        ),
    trailer: "/assets/projects/potionrun/potionrun.mov",
    poster: "/assets/projects/potionrun/potionrun.png",

    team: [
        // SP
        {
            name: "Fabian Randau",
            role: "SP",
            website: "https://www.fabianrandau.com/"
        },
        {
            name: "Alexander Rosendahl",
            role: "SP",
            website: "https://www.alexanderrosendahl.com/"
        },
        {
            name: "Samuel Ryberg",
            role: "SP",
            website: "https://www.samuelryberg.com/"
        },
        {
            name: "Mateusz Salaga",
            role: "SP",
            website: "https://www.mateuszsalaga.com/"
        },
        {
            name: "August Smith",
            role: "SP",
            website: "https://www.augustsmith.dev/"
        },
        // SG
        {
            name: "Max Kock",
            role: "SG",
            website: "http://maxkock.artstation.com/"
        },
        {
            name: "Falke Persson",
            role: "SG",
            website: "https://falke.artstation.com/"
        },
        {
            name: "Gustav Ryde",
            role: "SG",
            website: "https://gustavryde.artstation.com/"
        },
        {
            name: "Anes Sabanovic",
            role: "SG",
            website: "https://anessabanovic.artstation.com/"
        },
        // SA
        {
            name: "Mattias Ohlsson",
            role: "SA",
            website: "https://www.mattiasohlsson.com/"
        },
        {
            name: "Christopher Orantes Diaz",
            role: "SA",
            website: "https://www.chdiaz.com/"
        },
        // LD
        {
            name: "Jonathan Mårtensson",
            role: "LD",
            website: "https://www.jonathanmartensson.com/"
        },
        {
            name: "Tilde Persson",
            role: "LD",
            website: "https://www.tildeperssondesign.com/"
        },
    ],

    containers: [
        {
            title: "Stumble Obstacles & Monster",
            video: "/assets/projects/potionrun/1.mp4",
            poster: ""
        },
        {
            title: "Level Transitions",
            video: "/assets/projects/potionrun/2.mp4",
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