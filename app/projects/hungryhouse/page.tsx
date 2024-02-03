import Project, { ProjectProps } from "../../components/project";

const projectProp: ProjectProps = {
  title: "Hungry House",
  studio: "Smooth Brain Studios",

  genre: "Puzzle",
  platform: "Mobile",
  productionTime: "6 weeks (50%)",
  teamSize: "13",
  contributions: [
    "Main Menu",
    "Progress Saving/Loading",
    "Animation Implementations",
  ],

  description: (
    <div>
      During my second project I worked on a mobile puzzle game called Hungry
      House. The game's objective was to move a group of frogs between
      platforms, in order to feed a hungry living house creature. <br />
      <br />
      What made the game challenging was that the creature couldn't be overfed
      or underfed, so players had to think strategically about how to move the
      frogs in order to get the right amount of food to the creature. <br />
      <br />
      As the game progressed, it became even more challenging as obstacles were
      introduced. These obstacles required players to carefully consider the
      movements of the frogs, in order to successfully navigate the level and
      keep the creature happy. <br />
      <br />
      <p className="font-bold text-2xl pb-2">Nominations & Awards</p>
      <ul className="list-inside list-disc">
        <li>
          <a
            className="text-blue-400 underline"
            href="https://www.gameawards.se/2022-nominees"
          >
            Mobile Game of the Year and Best Art at the Swedish Game Awards 2022
          </a>
        </li>
        <li>
          <a
            className="text-blue-400 underline"
            href="https://www.therookies.co/entries/16448"
          >
            Mobile Game of the Year - People's Choice at The Rookies Awards 2022
          </a>
        </li>
      </ul>
    </div>
  ),
  trailer: "https://www.youtube.com/embed/pXnV-tQai3s?si=ud2sPwdE5UeghMD8",
  poster: "/assets/projects/hungryhouse/hungryhouse.png",

  team: [
    // SP
    {
      name: "Jesper Andersson",
      role: "SP",
      website: "https://www.jesscodes.net/",
    },
    {
      name: "Benjamin Ek",
      role: "SP",
      website: "https://www.benjaminek.com/",
    },
    {
      name: "Markus Hermelin",
      role: "SP",
      website: "https://www.markushermelin.com/",
    },
    {
      name: "Ivar Jönsson",
      role: "SP",
      website: "https://www.ivarjonsson.com/",
    },
    {
      name: "Erik Neuman",
      role: "SP",
      website: "https://www.erikneuman.com/",
    },
    {
      name: "Samuel Ryberg",
      role: "SP",
      website: "https://www.samuelryberg.com/",
    },
    // SG
    {
      name: "David Bohlin",
      role: "SG",
      website: "https://david_bohlin.artstation.com/",
    },
    {
      name: "Malin Fröjd",
      role: "SG",
      website: "https://malin_frojd.artstation.com/",
    },
    {
      name: "Daniel Gryningstjerna",
      role: "SG",
      website: "https://danielgryningstjerna.artstation.com/",
    },
    {
      name: "Pernilla Sonne",
      role: "SG",
      website: "https://pernilla_sonne.artstation.com/",
    },
    // SA
    {
      name: "Tanya Bengtsson",
      role: "SA",
      website: "https://www.tanyabengtsson.se/",
    },
    {
      name: "Moa Bergman",
      role: "SA",
      website: "https://moabergman.portfoliobox.net/",
    },
    // LD
    {
      name: "Elias Carlsson",
      role: "LD",
      website: "https://www.eliascdesign.com/",
    },
    {
      name: "Vanessa Grundström",
      role: "LD",
      website: "https://www.grundstromdesign.com/",
    },
  ],

  containers: [
    {
      title: "Creature animations",
      video: "https://www.youtube.com/embed/uvDD25SQ_r4?si=S4VfRH-S1O2SORLP",
      poster: "",
    },
    {
      title: "Main Menu",
      video: "https://www.youtube.com/embed/quxzQwJaG_M?si=IEa9w2OxwnSz1rIv",
      poster: "",
    },
    {
      title: "Level Select",
      video: "https://www.youtube.com/embed/etTgkPEaUvY?si=G4F4JzTTM4OVZadQ",
      poster: "",
    },
  ],
};

export default function Projects(): JSX.Element {
  return (
    <div className="w-full">
      <Project {...projectProp} />
    </div>
  );
}
