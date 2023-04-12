import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: `Cute 'em up`,
    studio: 'AGT',

    genre: "Shoot 'em up",
    platform: "Windows",
    productionTime: "6 weeks (50%)",
    teamSize: "13",
    contributions: ["Parts of Player", "Bullet Manager", "Final Boss"],

    description:
        (
            <div>
                My third project at The Game Assembly was both exciting and challenging.
                It was the first game I developed using the school's in-house game engine, which made the project more difficult than my previous ones. <br /><br />
                The game was called Cute Em Up, and it was a Shoot Em Up game where players had to progress through levels while shooting robots engineered by an evil scientist. <br /><br />
                One of the biggest challenges with the Cute Em Up project was that it was the first game we developed in C++. This meant that we had to worry about memory management and other complexities that we didn't have to think about in our previous projects, which were developed using C#.
            </div>
        ),
    trailer: "/assets/projects/cuteemup/cuteemup.mp4",
    poster: "/assets/projects/cuteemup/cuteemup.png",

    team: [
        // SP
        {
            name: "Casper Bengtsson",
            role: "SP",
            website: "https://www.casperbengtsson.com/"
        },
        {
            name: "Elin Granath",
            role: "SP",
            website: "https://www.elingranath.com/"
        },
        {
            name: "Erik Jerpander",
            role: "SP",
            website: "https://www.erikjerpander.com/"
        },
        {
            name: "Stefan Pihlström",
            role: "SP",
            website: ""
        },
        {
            name: "Samuel Ryberg",
            role: "SP",
            website: "https://www.samuelryberg.com/"
        },
        {
            name: "Molly Tandberg",
            role: "SP",
            website: "https://mollytandberg.dev"
        },
        // SG
        {
            name: "Bastian Helly-Hansen",
            role: "SG",
            website: "https://bastianhellyhansen.artstation.com/"
        },
        {
            name: "Gustav Ryde",
            role: "SG",
            website: "https://gustavryde.artstation.com/"
        },
        {
            name: "Lowe Silverlyra",
            role: "SG",
            website: "https://silverlyra.artstation.com/"
        },
        // SA
        {
            name: "Daniel Nagy",
            role: "SA",
            website: "https://danielnagy.portfoliobox.net/"
        },
        {
            name: "Christopher Orantes Diaz",
            role: "SA",
            website: "https://www.chdiaz.com/"
        },
        // LD
        {
            name: "Tilde Persson",
            role: "LD",
            website: "https://www.tildeperssondesign.com/"
        },
        {
            name: "Oliver Ringh",
            role: "LD",
            website: "https://oliverringh.wixsite.com/portfolio"
        },
        {
            name: "Hannes Wäst",
            role: "LD",
            website: "https://hanneswastdesign.wixsite.com/portfolio"
        },
    ],

    containers: [
        {
            title: "Boss (Phase One)",
            video: "/assets/projects/cuteemup/1.mp4",
            poster: ""
        },
        {
            title: "Shink Ability & Boss (Phase Two)",
            video: "/assets/projects/cuteemup/2.mp4",
            poster: ""
        },
        {
            title: "Bullet Hell",
            video: "/assets/projects/cuteemup/3.mp4",
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