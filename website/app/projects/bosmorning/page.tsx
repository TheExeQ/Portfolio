import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: `Bo's Morning`,
    studio: 'Sad Centaur',
    poster: "/assets/projects/morningofbo/bo.png",
    containers: [
        {
            content:
                (
                    <div className="grid grid-cols-2 gap-4 text-left max-w-[85%] mx-auto">
                        <div>
                            <div className="py-2">
                                <p className="text-lg font-bold">Genre</p>
                                <p>Adventure</p>
                            </div>

                            <div className="py-2">
                                <p className="text-lg font-bold">Platform</p>
                                <p>Windows</p>
                            </div>

                            <div className="py-2">
                                <p className="text-lg font-bold">Production Time</p>
                                <p>8 weeks (50%)</p>
                            </div>

                            <div className="py-2">
                                <p className="text-lg font-bold">Team Size</p>
                                <p>14</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg font-bold">My Contributions</p>
                            <ul className="list-disc list-inside">
                                <li>To</li>
                                <li>Be</li>
                                <li>Continued</li>
                            </ul>
                        </div>
                    </div>
                )
            ,
            video: "/assets/projects/morningofbo/bo.mp4",
            poster: "/assets/projects/morningofbo/bo.png"
        },
        {
            content:
                (
                    <div className="flex flex-col justify-center items-center">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus,
                            nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.
                        </p>
                    </div>
                )
            ,
            video: "/assets/projects/morningofbo/hedgehogattack.mp4",
            poster: ""
        },
        {
            content:
                (
                    <div className="flex flex-col justify-center items-center">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus,
                            nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.
                        </p>
                    </div>
                )
            ,
            video: "",
            poster: "/assets/projects/morningofbo/frogattacking.gif"
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