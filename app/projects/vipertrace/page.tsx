import Project, { ProjectProps } from "../../components/project";

const projectProp: ProjectProps = {
  title: "Vipertrace",
  studio: "Coinflip Studios",

  genre: "First Person Shooter",
  platform: "Windows",
  productionTime: "8 weeks (100%)",
  teamSize: "21",
  contributions: ["Recast/Detour Navigation", "Weapon System", "Mystery Box"],

  description: (
    <div>
      My eighth project at The Game Assembly was another game built on the same
      engine "Volt" we created in our sixth project. Since we already had most
      of the functionality required to create games, we were able to get started
      a lot faster this time around.
      <br />
      <br />
      With a solid engine to work with and 8 weeks of full-time work ahead of
      us, we were prepared for much more this time around. The game we created
      was a first-person shooter game called "Vipertrace" which was referenced
      by Call of Duty: Black Ops - Zombies. <br />
      <br />
      In this futuristic sci-fi adventure, players step into the boots of a
      resilient protagonist in the bustling metropolis of Tokyo. As the city
      grapples with an invasion of velociraptor aliens, gamers must harness an
      impressive arsenal of high-tech weaponry to combat the extraterrestrial
      threat and ascend to newfound power. Navigate the neon-lit streets, engage
      in intense battles, and strategically advance through the alien-infested
      terrain.
    </div>
  ),

  trailer: "https://www.youtube.com/embed/HKU5GvgAssY?si=6xAzOceDZq1uTXoj",
  poster: "/assets/projects/vipertrace/vipertrace.png",

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
  ],

  containers: [
    {
      title: "Recast/Detour Navigation",
      video: "https://www.youtube.com/embed/OVYgWwEUw1o?si=8PzHSHPJ7T_dwZ6g",
      poster: "",
    },
    {
      title: "Weapon System",
      video: "https://www.youtube.com/embed/OuYq4GHIHKY?si=swtYp6EtasRZhHj7",
      poster: "",
    },
    {
      title: "Mystery Box",
      video: "https://www.youtube.com/embed/LGPHe8XiDEU?si=ZDygCpgWbxQVGidt",
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
