import Image from 'next/image'
import AkayaImage from '../../public/assets/akaya.png'

export interface ProjectProps {
    title: string;
    studio: string;
}

export default function Project(props: ProjectProps): JSX.Element {
    return (
        <div className="w-full mt-auto">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={AkayaImage} alt="/" />
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
                <div className="max-w-[1240px] w-full py-10 grid md:grid-cols-5 gap-8 border-t-2 border-gray-200">
                    <div className="p-4 md:col-span-3 text-center shadow-lg rounded-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.
                    </div>
                    <div className="p-4 md:col-span-2 shadow-lg rounded-lg">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus porro voluptas ullam iste odit veritatis qui culpa, sapiente dicta unde atque, iure, quae placeat officiis ab saepe aliquam aperiam beatae?
                    </div>
                </div>
                <div className="max-w-[1240px] w-full py-10 grid md:grid-cols-5 gap-8 border-t-2 border-gray-200">
                    <div className="p-4 md:col-span-3 text-center shadow-lg rounded-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.
                    </div>
                    <div className="p-4 md:col-span-2 shadow-lg rounded-lg">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus porro voluptas ullam iste odit veritatis qui culpa, sapiente dicta unde atque, iure, quae placeat officiis ab saepe aliquam aperiam beatae?
                    </div>
                </div>
            </div>
        </div>
    )
}