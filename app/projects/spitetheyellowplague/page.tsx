import Project, { ProjectProps } from "../../components/project";

const projectProp: ProjectProps = {
  title: "Spite: The Yellow Plague",
  studio: "Coinflip Studios",

  genre: "Dungeon Crawler",
  platform: "Windows",
  productionTime: "14 weeks (50%)",
  teamSize: "23",
  contributions: ["Parts of Engine/Editor", "Math Library", "Navigation Mesh"],

  description: (
    <div>
      My sixth project at The Game Assembly was a dungeon crawler called "Spite:
      The Yellow Plague". <br />
      <br />
      The game was about a witch hunter who had been recruited by a village to
      end the yellow plague that was spreading in the swamp next to the village.
      On his quest to protect the village, the hunter meets a creature that
      lives in the swamp, which offers to help him by giving him abilities in
      return for parts of his soul. <br />
      <br />
      What made this project special was that it was the first time we built our
      own game engine from scratch. The engine was named "Volt" and creating it
      was a challenging task, but also very fun and exciting. We had to think
      about every aspect of game development, from the physics engine to the
      rendering pipeline.
    </div>
  ),
  trailer: "https://www.youtube.com/embed/g8_7V2Aum3k?si=cJ8WECTdMWpmxWyV",
  poster: "/assets/projects/spiteyellowplague/spite.png",

  team: [
    // SP
    {
      name: "Casper Bengtsson",
      role: "SP",
      website: "https://www.casperbengtsson.com/",
    },
    {
      name: "Max Hartell",
      role: "SP",
      website: "https://www.maxhartell.com/",
    },
    {
      name: "Andréas Isaksson",
      role: "SP",
      website: "https://www.andreasisaksson.com/",
    },
    {
      name: "Ivar Jönsson",
      role: "SP",
      website: "https://www.ivarjonsson.com/",
    },
    {
      name: "Stefan Pihlström",
      role: "SP",
      website: "",
    },
    {
      name: "Samuel Ryberg",
      role: "SP",
      website: "https://www.samuelryberg.com/",
    },
    {
      name: "Mateusz Salaga",
      role: "SP",
      website: "https://www.mateuszsalaga.com/",
    },
    // SG
    {
      name: "Emal Ghouse",
      role: "SG",
      website: "https://emalghouse.artstation.com/",
    },
    {
      name: "Albin Gunther",
      role: "SG",
      website: "https://albingunther.artstation.com/",
    },
    {
      name: "Gustav Ryde",
      role: "SG",
      website: "https://gustavryde.artstation.com/",
    },
    {
      name: "Sebastian Schaffer",
      role: "SG",
      website: "https://sebastian_schaffer.artstation.com/",
    },
    {
      name: "Pernilla Sonne",
      role: "SG",
      website: "https://pernilla_sonne.artstation.com/",
    },
    // SA
    {
      name: "Emily Bengtsson",
      role: "SA",
      website: "https://www.emilybengtsson.com/",
    },
    {
      name: "Moa Bergman",
      role: "SA",
      website: "https://moabergman.portfoliobox.net/",
    },
    {
      name: "Alexander Diec",
      role: "SA",
      website: "https://www.alexanderdiec.com/",
    },
    {
      name: "Jacob Fransson",
      role: "SA",
      website: "https://www.jacobfransson.com/",
    },
    // LD
    {
      name: "Christoffer Janbris",
      role: "LD",
      website: "https://christofferjanbris.wixsite.com/portfolio",
    },
    {
      name: "Vincent Karagöz",
      role: "LD",
      website: "https://caidian.wixsite.com/portfolio",
    },
    {
      name: "Mattias Larsson",
      role: "LD",
      website: "https://www.mattiaslarssondesign.com/",
    },
    {
      name: "Linus Lindborg-Persson",
      role: "LD",
      website: "https://www.linuslindborg.com/",
    },
    // TA
    {
      name: "Gopal Alvarez",
      role: "TA",
      website: "https://www.gopalalvarez.com/",
    },
    {
      name: "Charlin Hansson",
      role: "TA",
      website: "https://charlinhansson1997.wixsite.com/portfolio",
    },
    {
      name: "Christian Mucha",
      role: "TA",
      website: "",
    },
  ],

  containers: [
    {
      title: "Player Navigation",
      video: "https://www.youtube.com/embed/xWkqRO_yUD0?si=55KXElTF5Wnk6vJ8",
      poster: "",
    },
    {
      title: "Enemy Navigation",
      video: "https://www.youtube.com/embed/Uy6N9_Vh-Qk?si=MfOKVTqclPnCBYFk",
      poster: "",
    },
    {
      title: "NavMesh Tool",
      video: "https://www.youtube.com/embed/P-GT45HNbBY?si=bXyLaC2QNupkZAM0",
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
