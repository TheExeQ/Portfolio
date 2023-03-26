import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Akaya & Pebbles',
    studio: 'Coinflip Studios',
    poster: '/assets/projects/akayaandpebbles/akaya.png',
    containers: [
        {
            content:
                (
                    <div className="grid grid-cols-2 gap-4 text-left max-w-[85%] mx-auto">
                        <div>
                            <div className="py-2">
                                <p className="text-lg font-bold">Genre</p>
                                <p>Third Person</p>
                            </div>

                            <div className="py-2">
                                <p className="text-lg font-bold">Platform</p>
                                <p>Windows</p>
                            </div>

                            <div className="py-2">
                                <p className="text-lg font-bold">Production Time</p>
                                <p>14 weeks (50%)</p>
                            </div>

                            <div className="py-2">
                                <p className="text-lg font-bold">Team Size</p>
                                <p>21</p>
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
            video: "/assets/projects/hungryhouse/hungryhouse.mp4",
            poster: "/assets/projects/hungryhouse/hungryhouse.png"
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
            video: "/assets/projects/akayaandpebbles/akayacontrolreference.mp4",
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
            video: "/assets/projects/akayaandpebbles/monostrings.mp4",
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
            video: "/assets/projects/akayaandpebbles/telekinesisprototype.mp4",
            poster: ""
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