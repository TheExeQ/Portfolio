"use client"
import Image from 'next/image'
import { useState } from "react";

interface ProjectContainerProps {
    title: string;
    video: string;
    poster: string;
    desc?: string;
}

interface ProjectTeamProps {
    name: string;
    role: string;
    website: string;
}

export interface ProjectProps {
    title: string;
    studio: string;

    genre: string;
    platform: string;
    productionTime: string;
    teamSize: string;
    contributions: string[];

    description: JSX.Element;
    poster: string;
    trailer: string;

    team: ProjectTeamProps[];

    containers: ProjectContainerProps[];
}

export default function Project(props: ProjectProps): JSX.Element {

    const order = ['SP', 'SG', 'SA', 'LD', 'TA', 'ÖG'];

    props.team.sort((a, b) => order.indexOf(a.role) - order.indexOf(b.role));

    const [selectedImageIndex, setselectedImageIndex] = useState(0);
    const [showDetailedImage, setShowDetailedImage] = useState(false);

    const toggleDetailedImage = () => {
        setShowDetailedImage(!showDetailedImage);
        toggleScroll(showDetailedImage);
    }

    const toggleScroll = (active: Boolean) => {
        if (active) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    }
    
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
                                <p className="text-lg font-bold"> {props.teamSize === "Solo" ? "Features" : "My Contributions"} </p>
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
                        <div className="max-w-[80%] w-full mx-auto mb-2">
                            {props.description}
                        </div>
                    </div>
                </div>

                {props.team.length > 0 ? (
                    <div className="max-w-[1240px] w-full py-10 border-t-2 border-gray-300">
                        <div className="p-4 text-center shadow-lg rounded-lg">
                            <h2 className="mb-4">
                                Team
                            </h2>
                            <div className="flex flex-wrap justify-center md:justify-between max-w-[80%] w-full mx-auto mb-2">
                                {order.filter((role) => {
                                    return props.team.some((member) => {
                                        return member.role === role;
                                    });
                                }).map((role, index) => {
                                    return (
                                        <div key={"team" + index} className="p-4">
                                            <p className="text-lg font-bold mb-2">{role}</p>
                                            <ul className="list-inside">
                                                {props.team.map((member, index) => {
                                                    return (member.role == role) ? (
                                                        <li key={index} className="pt-2">
                                                            {(member.website.length > 0) ? (
                                                                <a href={member.website} target="_blank" className="underline text-blue-400">
                                                                    {member.name}
                                                                </a>
                                                            ) : (
                                                                <p>{member.name}</p>
                                                            )}
                                                        </li>
                                                    ) : (null)
                                                })}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>) : (null)}

                <div className="max-w-[1240px] w-full py-10 grid md:grid-cols-4 gap-8 border-t-2 border-gray-300">
                    {props.containers.map((container, index) => {
                        return (
                            <div key={ "containers" + index} className="p-4 w-full h-full md:col-span-2 shadow-lg rounded-lg">
                                {container.video.trim() !== "" ?
                                    (
                                        <video className="h-auto" width={1920} height={1080} poster={container.poster} controls>
                                            <source src={container.video + "#t=0.1"} type="video/mp4"></source>
                                        </video>
                                    ) :
                                    (
                                        <Image onClick={() => { toggleDetailedImage(); setselectedImageIndex(index); }} className="h-auto" width={1920} height={1080} src={container.poster} alt="" />
                                    )
                                }
                                <p className="mt-2 text-2xl font-bold text-center">{container.title}</p>
                            </div>
                        )
                    })}
                </div>

                <div className={showDetailedImage ? 
                    `fixed top-0 left-0 bg-black/80 w-full h-full z-20` 
                    : 
                    "hidden"}>
                    <div className="fixed p-6 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full md:w-[75%] 
                    bg-white/90 z-30 rounded-xl text-center max-h-screen overflow-y-auto">
                        <h1 className="py-2">{props.containers[selectedImageIndex].title}</h1>
                        <Image className="md:px-[15%] py-2" width={1920} height={1080} src={props.containers[selectedImageIndex].poster} alt="" />
                        <p className="md:mx-auto md:max-w-[75%] pb-4 text-xl font-semibold">{props.containers[selectedImageIndex].desc}</p>
                        <button className="px-6 py-3 font-bold rounded-2xl" onClick={toggleDetailedImage} >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}