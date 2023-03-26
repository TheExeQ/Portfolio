import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: `Cute 'em up`,
    studio: 'AGT',
    poster: "/assets/projects/cuteemup/cuteemup.png",
    containers: [
        {
            content:
                (
                    <div className="grid grid-cols-2 gap-4 text-left max-w-[85%] mx-auto">
                        <div>
                            <div className="py-2">
                                <p className="text-lg font-bold">Genre</p>
                                <p>Shoot 'em up</p>
                            </div>

                            <div className="py-2">
                                <p className="text-lg font-bold">Platform</p>
                                <p>Windows</p>
                            </div>

                            <div className="py-2">
                                <p className="text-lg font-bold">Production Time</p>
                                <p>6 weeks (50%)</p>
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
            video: "/assets/projects/cuteemup/cuteemup.mp4",
            poster: "/assets/projects/cuteemup/cuteemup.png"
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
            poster: "/assets/projects/cuteemup/bossbullethell.png"
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
            poster: "/assets/projects/cuteemup/bossmultibullets.png"
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
            poster: "/assets/projects/cuteemup/bossnormalbullets.png"
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