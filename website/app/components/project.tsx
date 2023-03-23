import Image from 'next/image'

interface ProjectContainerProps {
    content: JSX.Element;
    video: string;
    poster: string;
}

export interface ProjectProps {
    title: string;
    studio: string;
    poster: string;
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
                {props.containers.map((container, index) => {
                    return (index % 2 == 0) ? (
                        <div key={index} className="max-w-[1240px] w-full py-10 grid md:grid-cols-5 gap-8 border-t-2 border-gray-300">
                            <div className="p-4 md:col-span-3 text-center shadow-lg rounded-lg">
                                {container.content}
                            </div>
                            <div className="p-4 md:col-span-2 shadow-lg rounded-lg">
                                {container.video.trim() !== "" ?
                                    (
                                        <video height="300" width="500" poster={container.poster} controls>
                                            <source src={container.video} type="video/mp4"></source>
                                        </video>
                                    ) :
                                    (
                                        <Image height="300" width="500" src={container.poster} alt=""/>
                                    )
                                }
                            </div>
                        </div>
                    ) :
                        (
                            <div key={index} className="max-w-[1240px] w-full py-10 grid md:grid-cols-5 gap-8 border-t-2 border-gray-300">
                                <div className="p-4 md:col-span-2 shadow-lg rounded-lg">
                                    {container.video.trim() !== "" ?
                                        (
                                            <video height="300" width="500" poster={container.poster} controls>
                                                <source src={container.video} type="video/mp4"></source>
                                            </video>
                                        ) :
                                        (
                                            <Image height="300" width="500" src={container.poster} alt="" />
                                        )
                                    }
                                </div>
                                <div className="p-4 md:col-span-3 text-center shadow-lg rounded-lg">
                                    {container.content}
                                </div>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}