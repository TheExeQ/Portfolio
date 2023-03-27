import Image from 'next/image'

interface ProjectContainerProps {
    title: string;
    video: string;
    poster: string;
}

export interface ProjectProps {
    title: string;
    studio: string;

    genre: string;
    platform: string;
    productionTime: string;
    teamSize: string;
    contributions: string[];

    description: string;
    poster: string;
    trailer: string;

    containers: ProjectContainerProps[];
}

export default function Project(props: ProjectProps): JSX.Element {
    return (
        <div className="w-full mt-auto">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={props.poster} alt="/" />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
                    <h2 className="py-2 border-b-2 border-[#F7AB0A] inline-block">
                        {props.title}
                    </h2>
                    <h3>
                        {props.studio}
                    </h3>
                </div>
            </div>

            <div className="flex flex-col w-screen justify-center items-center">
                <div className="max-w-[1240px] w-full py-10 grid md:grid-cols-5 gap-8 border-t-2 border-gray-300">
                    <div className="p-4 md:col-span-3 text-center shadow-lg rounded-lg">
                        <div className="grid grid-cols-2 gap-4 text-left max-w-[85%] mx-auto">
                            <div>
                                <div className="py-2">
                                    <p className="text-lg font-bold">Genre</p>
                                    <p>{props.genre}</p>
                                </div>

                                <div className="py-2">
                                    <p className="text-lg font-bold">Platform</p>
                                    <p>{props.platform}</p>
                                </div>

                                <div className="py-2">
                                    <p className="text-lg font-bold">Production Time</p>
                                    <p>{props.productionTime}</p>
                                </div>

                                <div className="py-2">
                                    <p className="text-lg font-bold">Team Size</p>
                                    <p>{props.teamSize}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-lg font-bold"> {props.teamSize === "Solo" ? "Features" : "My Contributions"}</p>
                                <ul className="list-disc list-inside">
                                    {props.contributions.map((contribution, index) => {
                                        return (
                                            <li key={index}>{contribution}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:col-span-2 shadow-lg rounded-lg">
                        <video className="w-full h-full" width={1920} height={1080} poster={props.poster} controls>
                            <source src={props.trailer} type="video/mp4"></source>
                        </video>
                    </div>
                </div>

                <div className="max-w-[1240px] w-full py-10 border-t-2 border-gray-300">
                    <div className="p-4 text-center shadow-lg rounded-lg">
                        <h2 className="mb-4">
                            Project Summary
                        </h2>
                        <p className="max-w-[80%] w-full mx-auto mb-2">
                            {props.description}
                        </p>
                    </div>
                </div>

                <div className="max-w-[1240px] w-full py-10 grid md:grid-cols-4 gap-8 border-t-2 border-gray-300">
                    {props.containers.map((container, index) => {
                        return (
                            <div key={index} className="p-4 w-full h-full md:col-span-2 shadow-lg rounded-lg">
                                {container.video.trim() !== "" ?
                                    (
                                        <video className="h-auto" width={1920} height={1080} poster={container.poster} controls>
                                            <source src={container.video + "#t=0.1"} type="video/mp4"></source>
                                        </video>
                                    ) :
                                    (
                                        <Image className="h-auto" width={1920} height={1080} src={container.poster} alt="" />
                                    )
                                }
                                <p className="mt-2 text-2xl font-bold text-center">{container.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}