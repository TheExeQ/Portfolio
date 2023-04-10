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
                To provide more insight into the process of making these two projects, I have added two separate segments where I talk a little more in-depth about my journey and the lessons learned. <br /><br />
                <p className="font-bold text-2xl pb-2">Network System</p>
                My goal was to develop a networking system for my game engine that could work seamlessly across different platforms. 
                To achieve this, I aimed to create an abstraction layer that would enable support for multiple networking APIs.
                Using Unreal Engine's replication system as a source of inspiration, I set out to develop a simpler version of their design specifically tailored for my game engine.<br /><br />
                <span className="font-bold">Structure: </span>
                My goal was to create a simple yet efficient structure that would be user-friendly and easy to work with. 
                To achieve this, I looked to Unreal Engine's source code for inspiration. 
                I based my project structure on their approach, using a socket builder class to define the desired socket settings. 
                The result of the socket builder is then passed to either SocketSender or SocketReceiver, each of which utilizes a separate thread to increase efficiency. 
                For those interested in learning more about how to use these components, I have attached a couple of images at the bottom of the page to provide a better understanding.<br /><br />
                <span className="font-bold">Abstraction layer: </span>
                Having watched <a target="_blank" href="https://youtube.com/playlist?list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT" className="underline text-blue-400">The Cherno's game engine series</a> on YouTube, I gained valuable insights into how to structure a game engine for maximum flexibility and scalability.
                I learned how to avoid limiting myself to a specific tool or workflow and instead create a system that could easily adapt to changes. 
                Applying these principles, I set out to develop a networking system that could support multiple APIs, providing me with an opportunity to expand my knowledge and experience in this area.<br /><br />
                <p className="font-bold text-2xl pb-2">Website Development</p>
                As for the design and development of my website, I made a conscious decision to create it on my own, without relying on online editors like Wix, SquareSpace, or Webflow. 
                My motivation for doing so was rooted in a desire to learn new technology and expand my skills beyond C++ and game development. 
                I saw this as an opportunity to dive into web development and broaden my knowledge in this area. 
                I found the process to be highly rewarding, as it allowed me to push my boundaries and gain valuable insights into a new field of technology. <br /><br />
                <span className="font-bold">Design: </span>
                To design my website, I opted to use <a target="_blank" href="https://nextjs.org/" className="underline text-blue-400">NextJS</a> with Typescript and <a target="_blank" href="https://tailwindcss.com/" className="underline text-blue-400">TailwindCSS</a>. 
                My decision to use NextJS was driven by my previous experience working with JavaScript and a desire to explore the possibilities that this framework could offer. 
                I chose to work with Typescript instead of JavaScript for two reasons: first, my familiarity with using types in C++ made the transition to Typescript relatively seamless, and second, the added safety checks provided by Typescript made it easier to catch potential issues early in the development process. 
                Lastly, I chose TailwindCSS as my styling framework due to its user-friendly and intuitive design, which made it easy to create a consistent and visually appealing website without the need for extensive custom CSS.<br /><br />
                <span className="font-bold">Deployment: </span>
                To deploy my website, my initial plan was to use <a target="_blank" href="https://cloud.google.com/" className="underline text-blue-400">Google Cloud Platform (GCP)</a> as it was something I had been wanting to learn for a while. 
                After successfully deploying my website to GCP, I realized that I still needed more time to experiment and learn more about their tools before feeling completely comfortable with using their services. 
                Therefore, for the time being, I decided to containerize my website using <a target="_blank" href="https://www.docker.com/" className="underline text-blue-400">Docker</a> and host it on my own server at home. 
                To streamline the deployment process, I also set up a simple CI/CD pipeline using GitHub Actions which allows me to easily deploy new changes. 
                In the future, I hope to give GCP another try once I have gained more experience and knowledge with their platform.<br /><br />
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