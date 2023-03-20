import Project, { ProjectProps } from '../../components/project'

const projectProp: ProjectProps = {
    title: 'Akaya & Pebbles',
    studio: 'Coinflip Studios',
    containers: [
        {
            text: 
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, 
            nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.`,
            video: "/assets/projects/spite.mp4",
            poster: "/assets/projects/hungryhouse.png"
        },
        {
            text: 
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, 
            nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.`,
            video: "/assets/projects/spite.mp4",
            poster: "/assets/projects/bo.png"
        },
        {
            text: 
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur quaerat, expedita veritatis cum praesentium commodi, quas eaque necessitatibus deserunt natus, 
            nobis asperiores a iure illum excepturi repudiandae nostrum! Sunt, id.`,
            video: "/assets/projects/spite.mp4",
            poster: "/assets/projects/bardknight.png"
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