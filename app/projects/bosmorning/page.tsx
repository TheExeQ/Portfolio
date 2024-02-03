import Project, { ProjectProps } from "../../components/project";

const projectProp: ProjectProps = {
  title: `Bo's Morning`,
  studio: "Sad Centaur",

  genre: "Adventure",
  platform: "Windows",
  productionTime: "8 weeks (50%)",
  teamSize: "13",
  contributions: ["Rabbit Enemy", "Hedgehog Enemy", "Bird Enemy", "Frog Enemy"],

  description: (
    <div>
      My fifth project at The Game Assembly was an adventure top-down game
      called "Bo's Morning." The game revolved around a farmer named Bo, who had
      to save his farm from a plague that had caused all animals and plants in
      the area to become evil.
      <br />
      <br />
      In order to save his farm, Bo had to eliminate the infectious flower that
      was causing the plague. The game design involved a lot of creativity, as
      we had to think about how to create an immersive world for the player to
      explore
    </div>
  ),
  trailer: "https://www.youtube.com/embed/kqHU9M_ITfA?si=DREz1ECH2eymxgd3",
  poster: "/assets/projects/morningofbo/bo.png",

  team: [
    // SP
    {
      name: "Benjamin Ek",
      role: "SP",
      website: "https://www.benjaminek.com/",
    },
    {
      name: "Niklas Fredriksson",
      role: "SP",
      website: "https://www.niklasfredriksson.com/",
    },
    {
      name: "Niklas Jakobsen",
      role: "SP",
      website: "https://www.niklasjakobsen.dev/",
    },
    {
      name: "Neo Nemeth",
      role: "SP",
      website: "https://www.neonemeth.net/",
    },
    {
      name: "Samuel Ryberg",
      role: "SP",
      website: "https://www.samuelryberg.com/",
    },
    // SG
    {
      name: "Victor Ek",
      role: "SG",
      website: "https://victorek.artstation.com/",
    },
    {
      name: "Elin Ekelöw",
      role: "SG",
      website: "https://elinekelow.artstation.com/",
    },
    {
      name: "Albin Gunther",
      role: "SG",
      website: "https://albingunther.artstation.com/",
    },
    // SA
    {
      name: "Moa Bergman",
      role: "SA",
      website: "https://moabergman.portfoliobox.net/",
    },
    {
      name: "Daniel Fornell",
      role: "SA",
      website: "http://www.danielfornell.com/",
    },
    // LD
    {
      name: "Vanessa Grundström",
      role: "LD",
      website: "https://www.grundstromdesign.com/",
    },
    {
      name: "Christoffer Janbris",
      role: "LD",
      website: "https://christofferjanbris.wixsite.com/portfolio",
    },
    {
      name: "Linus Lindborg-Persson",
      role: "LD",
      website: "https://www.linuslindborg.com/",
    },
  ],

  containers: [
    {
      title: "Rabbit",
      video: "https://www.youtube.com/embed/lDRKc5rsBpk?si=OBQA4PWUclBdJwrH",
      poster: "",
    },
    {
      title: "Hedgehog",
      video: "https://www.youtube.com/embed/z9oXHQRuVUw?si=QbUVh8cco0IGQiXO",
      poster: "",
    },
    {
      title: "Bird",
      video: "https://www.youtube.com/embed/zvYMHCj5zBE?si=fHHUkNes7KumzWDe",
      poster: "",
    },
    {
      title: "Frog",
      video: "https://www.youtube.com/embed/y-tYkYYEvYQ?si=CiWOzn2s2-_ntv2t",
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
