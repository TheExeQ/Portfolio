import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Hungry House',
    studio: 'Smooth Brain Studios',
    poster: "/assets/projects/hungryhouse/hungryhouse.png",
    containers: [
        {
            content:
                (
                    <div className="grid grid-cols-2 gap-4 text-left max-w-[85%] mx-auto">
                        <div>
                            <div className="py-2">
                                <p className="text-lg font-bold">Genre</p>
                                <p>Puzzle</p>
                            </div>

                            <div className="py-2">
                                <p className="text-lg font-bold">Platform</p>
                                <p>Mobile</p>
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
            video: "/assets/projects/hungryhouse/dividebug.mp4",
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
            video: "/assets/projects/hungryhouse/cutscene.mp4",
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
            video: "/assets/projects/hungryhouse/houseanimbug.mp4",
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
            video: "/assets/projects/hungryhouse/predatoranim.mp4",
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